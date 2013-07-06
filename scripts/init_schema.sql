CREATE EXTENSION IF NOT EXISTS hstore;
DROP SCHEMA IF EXISTS mattschema1 CASCADE;
CREATE SCHEMA mattschema1;
CREATE TABLE mattschema1.user (
  id bigint,
  attrs hstore
);