
CREATE EXTENSION IF NOT EXISTS hstore;
DROP SCHEMA IF EXISTS s1 CASCADE;
CREATE SCHEMA s1;

--sharding stuff - start
--CREATE SEQUENCE s1.user_id_seq;
--
--CREATE OR REPLACE FUNCTION s1.next_id(OUT result bigint) AS $$
--DECLARE
--    our_epoch bigint := 1372883441000;
--    seq_id bigint;
--    now_millis bigint;
--    shard_id int := 1;
--BEGIN
--    SELECT nextval('s1.user_id_seq') % 1024 INTO seq_id;
--
--    SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000) INTO now_millis;
--    result := (now_millis - our_epoch) << 23;
--    result := result | (shard_id << 10);
--    result := result | (seq_id);
--END;
--$$ LANGUAGE PLPGSQL;
--sharding stuff - end

--instagram extract shard from id:
--console.log(('154617313239041' & 0x0000007fffff) >>>10);


CREATE TABLE s1.user (
  id bigint NOT NULL DEFAULT s1.next_id() PRIMARY KEY,
  attrs hstore
);

