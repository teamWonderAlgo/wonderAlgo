const express = require('express');
const pool = require('../../db')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const router = express.Router();

// Get a algo for a specific ID number (random num is generated in front end)
router.get('/algo/:id', async (req, res, next) => {
  const query = `SELECT algos.content, algos.default_code FROM algos WHERE algo_id = $1;`
  try {
    const algo = await pool.query(query, [req.params.id])
    return res.status(200).json(algo.rows[0])
  } catch (err) {
    return next(err)
  }
});

// Receive a body that contains TIME, ALGO_ID and USER_ID for storing in 'times' table
router.post('/storeResult', async (req, res, next) => {
  const { user_id, algo_id, timeInSeconds } = req.body;
  const query = `INSERT INTO times (time, algo_id, user_id) VALUES ($1, $2, $3);`
  try {
    const algo = await pool.query(query, [timeInSeconds, algo_id, user_id]);
    return res.status(200).json(`Successfully added result to 'time' table`)
  } catch (err) {
    return next(err)
  }
});

// Receive a body that contains USERNAME and PASSWORD for storing in 'users' table
router.post('/addUser', async (req, res, next) => {
  const query = `INSERT INTO users (name, password) VALUES($1, $2);`
  try {
    const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds)
    await pool.query(query, [req.body.username, encryptedPassword]);
    return res.status(200).json(`Successfully added ${req.body.username} to the users table`)
  } catch (err) {
    return next(err)
  }
});

// Receive a body that contains USERNAME and PASSWORD for comparing in 'users' table
router.post('/validateUser', async (req, res, next) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE name = $1;`
  try {
    const user = await pool.query(query, [username]);
    if (await bcrypt.compare(password, user.rows[0].password)) {
      return res.status(200).json(`Successful login`)
    } else {
      throw new Exception();
    }
  } catch (err) {
    return next({err: 'password/username did not match'})
  }
})

module.exports = router;