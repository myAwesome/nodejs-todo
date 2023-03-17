-- Table Definition ----------------------------------------------

CREATE TABLE tbl_task (
    id SERIAL PRIMARY KEY,
    description text NOT NULL,
    done boolean DEFAULT false
);
