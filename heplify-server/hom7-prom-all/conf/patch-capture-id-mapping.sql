-- Homer ships protocol_header.captureId as type "integer" in fields_mapping.
-- SIP search uses (protocol_header->>'captureId')::int, which fails when capture
-- IDs are non-numeric (heplify -hn / HEP node names) and returns no rows.
-- See https://github.com/sipcapture/homer-app/issues/449
UPDATE mapping_schema
SET fields_mapping = sub.new_mapping
FROM (
    SELECT
        ms.id,
        (
            SELECT jsonb_agg(
                CASE
                    WHEN elem->>'id' = 'protocol_header.captureId'
                    THEN jsonb_set(elem, '{type}', '"string"')
                    ELSE elem
                END
                ORDER BY ord
            )
            FROM jsonb_array_elements(ms.fields_mapping::jsonb) WITH ORDINALITY AS t(elem, ord)
        ) AS new_mapping
    FROM mapping_schema ms
    WHERE ms.fields_mapping::text LIKE '%protocol_header.captureId%'
) sub
WHERE mapping_schema.id = sub.id
  AND mapping_schema.fields_mapping::text LIKE '%"protocol_header.captureId"%"integer"%';
