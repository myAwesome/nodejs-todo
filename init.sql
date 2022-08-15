-- Table Definition ----------------------------------------------

CREATE TABLE tbl_task (
    id SERIAL PRIMARY KEY,
    description text NOT NULL,
    done boolean DEFAULT false
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX tbl_task_pkey ON tbl_task(id int4_ops);