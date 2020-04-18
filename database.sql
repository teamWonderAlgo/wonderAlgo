-- SAVE QUERIES HERE FOR COPYING


-- insert new algo
INSERT INTO algos (algo_name, content)
VALUES ('nameOfAlgo', 'the actual prompt for the algo goes here');

-- insert new user
INSERT INTO users (name, password)
VALUES ('nameOfAlgo', 'password');



-- get a result that matches user_id/algo_id
SELECT * FROM times WHERE user_id = 1 AND algo_id = 1;