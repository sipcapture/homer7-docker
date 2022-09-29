const { api, tracer } = require('./tracing')('dummy-server');
const logEntry = require('./logging')();
const logValue = require('./logvalue')();
const { uniqueNamesGenerator, starWars, colors } = require('unique-names-generator');

const endpoints = [
    {
        endpoint: "/healthcheck",
        methods: [ "GET" ],
    },
    {
        endpoint: "/metrics/user",
        methods: [ "GET" ],
    },
    {
        endpoint: "/metrics/server",
        methods: [ "GET" ],
    },
    {
        endpoint: "/login",
        methods: [ "GET", "POST" ],
    },
    {
        endpoint: "/logout",
        methods: ["POST"],
    },
    {
        endpoint: "/cart/contents",
        methods: [ "GET", "POST", "DELETE" ],
    },
    {
        endpoint: "/account/profile",
        methods: [ "GET", "POST", "DELETE" ],
    },
    {
        endpoint: "/account/security",
        methods: [ "GET", "POST" ],
    },
    {
        endpoint: "/account/settings",
        methods: [ "GET", "POST", "DELETE" ],
    },
    {
        endpoint: "/checkout/payment",
        methods: [ "POST" ],
    },
    {
        endpoint: "/checkout/confirmation",
        methods: [ "GET", "POST" ],
    },
    {
        endpoint: "/info",
        methods: [ "GET" ],
    },
];

// Sleep method
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Creates a new span given some span attributes
const createSpan = (name, target, method) => {
    const newSpan = tracer.startSpan(name);
    newSpan.setAttribute('http.target', target);
    newSpan.setAttribute('http.method', method);
    newSpan.setAttribute('job', 'dummy-server');

    return newSpan;
};

// Pretends to receive a request from somewhere and then returns a response
async function dummyApiCall() {
    // Create a new trace by creating a parent span
    const requestSpan = createSpan('request_received');
    const { traceId } = requestSpan.spanContext();
    let dbError = false;

    // Create a new context for this request
    api.context.with(api.trace.setSpan(api.context.active(), requestSpan), async () => {
        // Pick a method and a target
        const target = endpoints[Math.floor(Math.random() * endpoints.length)];
        const endpoint = target.endpoint;
        const method = target.methods[Math.floor(Math.random() * target.methods.length)];
        const entity = uniqueNamesGenerator({ dictionaries: [starWars, colors] });

        requestSpan.setAttribute('entity', entity);

        logEntry({
            level: 'info',
            job: `dummy-server`,
            message: `traceID=${traceId} endpoint=${endpoint} method=${method} entity="${entity}"`,
        });

        // Create a new span to process the request - wait anywhere between 1 and 10 ms to do this
        const processSpan = createSpan('request_processed', endpoint, method);
        await sleep(Math.floor(Math.random() * 10) + 1);

        // Maybe the info sent is garbage. There's a 1 in 20 chance of this
        const garbage = Math.floor(Math.random() * 20) === 0;
        processSpan.end();

        // New span to talk to a cache or database
        if (!garbage) {
            const dataSpan = createSpan('data_request', endpoint, method);
            await api.context.with(api.trace.setSpan(api.context.active(), dataSpan), async () => {
                // Simulate a cache hit
                const lookupSpan = createSpan('cache_lookup', endpoint, method);
                const cacheHit = Math.floor(Math.random() * 2) === 0;

                await sleep(Math.floor(Math.random() * 40) + 20);

                lookupSpan.setAttribute('entity', entity);
                lookupSpan.setAttribute('cache.hit', cacheHit);
                lookupSpan.end();

		/*
	        logEntry({
	            stream: {job: `dummy-server`, method: `${method}`, entity: `${entity}`, level: 'info' },
	            value: cacheHit,
	            message: `traffic_generator_cache_hit`,
	        });
		*/

                // If no cache hit, simulate a DB lookup
                if (!cacheHit) {
                    const dbSpan = createSpan('request_processed');
		    var hold = Math.floor(Math.random() * 400) + 110;
                    await sleep(hold);
                    // Possibly throw an error
                    dbError = Math.floor(Math.random() * 10) === 0;
                    let spanStatus = api.SpanStatusCode.OK;
                    if (dbError) {
                        spanStatus = api.SpanStatusCode.ERROR;
                        dbSpan.setAttributes({
                            'db.error': 'INVALID_DATA',
                            'db.error_message': 'Invalid data sent to Database',
                        });
                        logEntry({
                            level: 'error',
                            job: `dummy-server`,
                            message: `traceID=${traceId} entity="${entity}" databaseError="Invalid data sent to Database"`,
                        });

		        logValue({
		            tags: {job: `dummy-server`, method: `${method}`},
		            value: parseFloat(hold) || parseFloat(1),
		            message: `traffic_generator_db_err`,
		        });

                    }
                    dbSpan.setStatus({ code: spanStatus });
                    dataSpan.setStatus({ code: spanStatus });
                    dbSpan.end();
                }



            });
            dataSpan.end();
        }

        // Simulate a response pack
        const responseSpan = tracer.startSpan("request_response");
        await sleep(Math.floor(Math.random() * 20) + 10);
        if (!garbage && !dbError) {
            responseSpan.setAttribute('http.status_code', 200);
            requestSpan.setAttribute('http.status_code', 200);
        } else if (dbError) {
            responseSpan.setAttribute('http.status_code', 500);
            requestSpan.setAttribute('http.status_code', 500);
        } else {
            responseSpan.setAttribute('http.status_code', 400);
            requestSpan.setAttribute('http.status_code', 400);
        }
        responseSpan.end();

        // Finally we end the parent span
        requestSpan.setStatus({ code: (dbError) ? api.SpanStatusCode.ERROR : api.SpanStatusCode.OK });
        requestSpan.end();
    });
}

// Kick off several timers each of which simulate making a call to an HTTP server
(() => {
    setInterval(() => dummyApiCall(), 500);
    setInterval(() => dummyApiCall(), 1000);
    setInterval(() => dummyApiCall(), 2000);
    setInterval(() => dummyApiCall(), 3000);
    setInterval(() => dummyApiCall(), 4000);
})();
