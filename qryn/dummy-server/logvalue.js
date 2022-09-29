const tracing = require('./tracing')();
const request = require('request-promise-native');

module.exports = (context) => {
  // Tracing
  const { api, tracer } = tracing;

  // Logging system sends to Loki
  const logEntry = async (details) => {
      const { message, tags, endpointLabel, endpoint, value } = details;
      const logSpan = tracer.startSpan("log_to_prom");
      let error = false;
      let stream = tags || { "__name__": message };
      if (endpoint) {
          stream[endpointLabel] = endpoint;
      }
      stream["__name__"] = message;
      // console.log('trying',message,value,stream);
      try {
          await request(
              {
                  uri: 'http://qryn:3100/loki/api/v1/push',
                  method: 'POST',
                  headers: {
                      'Content-type': 'application/json'
                  },
                  json: true,
                  body: {
                      'streams': [
                          {
                              stream,
                              'values': [
                                  [ `${Date.now() * 1000000}`, message, parseFloat(value) ]
                              ]
                          }
                      ]
                  }
              },
          );
      } catch (err) {
          console.log(err);
          error = true;
      }
      logSpan.setStatus({ code: (!error) ? api.SpanStatusCode.OK : api.SpanStatusCode.ERROR });
      logSpan.end();
  };

  return logEntry;
}
