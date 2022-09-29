SET opentelemetry_start_trace_probability = 1.0;
SELECT 1;
system flush logs;

DROP TABLE IF EXISTS default.zipkin_spans;
CREATE MATERIALIZED VIEW default.zipkin_spans
ENGINE = URL('http://qryn:3100/tempo/api/push', 'JSONEachRow')
SETTINGS output_format_json_named_tuples_as_objects = 1,
    output_format_json_array_of_rows = 1 AS
SELECT
    lower(hex(reinterpretAsFixedString(trace_id))) AS traceId,
    lower(hex(parent_span_id)) AS parentId,
    lower(hex(span_id)) AS id,
    operation_name AS name,
    start_time_us AS timestamp,
    finish_time_us - start_time_us AS duration,
    cast(tuple('clickhouse'), 'Tuple(serviceName text)') AS localEndpoint,
    cast(tuple(
        attribute.values[indexOf(attribute.names, 'db.statement')]),
        'Tuple("db.statement" text)') AS tags
FROM system.opentelemetry_span_log;

# DROP TABLE IF EXISTS default.influx_log_send;
# CREATE MATERIALIZED VIEW default.influx_log_send
# ENGINE = URL('http://qryn:3100/influx/api/v2/write', 'LineAsString')
# AS SELECT format('syslog,level={0},logger_name={1},type=clickhouse message="{2}" {3}', 
#  toString(level), 
#  replaceRegexpAll(toString(logger_name), '[^a-zA-Z0-9_]', '_'), 
#  replaceAll(replaceRegexpAll(message, '["\\\\]', '\x00\\0'), '\x00', '\\'), 
#  toString(toUnixTimestamp64Nano(event_time_microseconds))) FROM system.text_log;
