// This is shared between the requester and the server
// As such, to only do what's needed, we init using a
// function and then pass the service context to
// determine what to initialise.
module.exports = (serviceName) => {
  // Include all OpenTelemetry dependencies for tracing
  const api = require("@opentelemetry/api");
  const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
  const { SimpleSpanProcessor } = require("@opentelemetry/sdk-trace-base");
  const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin');
  //const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
  // const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
  const { Resource } = require('@opentelemetry/resources');
  const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
  let getNodeAutoInstrumentations;
  let registerInstrumentations;
  let W3CTraceContextPropagator;

  // Create a tracer provider
  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    }),
  });

  // Export to Jaeger
  //const exporter = new OTLPTraceExporter(options);

  // Export to Zipkin/qryn
  const options = {
    url: 'http://qryn:3100/tempo/api/push',
  }
  const exporter = new ZipkinExporter(options);

  // Use simple span (should probably use Batch)
  const processor = new SimpleSpanProcessor(exporter);
  provider.addSpanProcessor(processor);
  provider.register();

  // Return instances of the API and the tracer to the calling app
  return {
    tracer: api.trace.getTracer(serviceName),
    api: api,
  }
};
