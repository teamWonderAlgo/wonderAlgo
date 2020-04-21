-- This is just a file to keep all SQL queries. This file is not required to run anything.


-- insert new algo
INSERT INTO algos (algo_name, content)
VALUES ('nameOfAlgo', 'the actual prompt for the algo goes here');

-- insert new user
INSERT INTO users (name, password)
VALUES ('nameOfAlgo', 'password');

-- get a result that matches user_id/algo_id
SELECT * FROM times WHERE user_id = 1 AND algo_id = 1;


-- store a result in time table, connecting with user_id and algo_id
INSERT INTO times (time, algo_id, user_id) VALUES ($1, $2, $3);

-- add user to database
INSERT INTO users (name, password) VALUES($1, $2);

-- validate user
SELECT * FROM users WHERE name = $1;

-- get results for current user
SELECT * FROM times WHERE user_id = $1;