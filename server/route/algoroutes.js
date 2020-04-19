const express = require('express');
const pool = require('../../db')

const router = express.Router();

// Get a algo for a specific ID number (random num is generated in front end)
router.get('/algo/:id', async (req, res, next) => {
  const query = 'SELECT algos.content FROM algos WHERE algo_id = $1;'
  try {
    const algo = await pool.query(query, [req.params.id])
    res.status(200).json(algo.rows[0])
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
    res.status(200).json(`Successfully added result to 'time' table`)
  } catch (err) {
    return next(err)
  }
});

router.post('/addUser', async (req, res, next) => {
  const query = `INSERT INTO users (name, password) VALUES($1, $2);`
  try {
    await pool.query(query, [req.body.username, req.body.password]);
    res.status(200).json(`Successfully added ${req.body.username} to the users table`)
  } catch (err) {
    return next(err)
  }
});

module.exports = router;