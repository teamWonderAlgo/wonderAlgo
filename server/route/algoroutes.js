const express = require('express');
const pool = require('../../db')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const algoController = require('../controllers/algoController')

const router = express.Router();

// Get a algo for a specific ID number (random num is generated in front end)
router.get('/algo/:id', async (req, res, next) => {
  const query = 'SELECT algos.content, algos.default_code, algos.algo_name FROM algos WHERE algo_id = $1';
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

// Receive a body that contains NAME, EMAIL and PASSWORD for storing in 'users' table
router.post('/addUser', async (req, res, next) => {
  const query = `INSERT INTO users (name, password, email) VALUES($1, $2, $3);`
  try {
    const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds)
    await pool.query(query, [req.body.name, encryptedPassword, req.body.email]);
    return res.status(200).json(`Successfully added ${req.body.name} to the users table`)
  } catch (err) {
    return next(err)
  }
});

// Receive a body that contains EMAIL and PASSWORD for comparing in 'users' table
router.post('/validateUser', async (req, res, next) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = $1;`
  try {
    const user = await pool.query(query, [email]);
    if (await bcrypt.compare(password, user.rows[0].password)) {
      return res.status(200).json(`Successful login`)
    } else {
      throw new Exception();
    }
  } catch (err) {
    return next({err: 'email/password did not match'})
  }
})

router.get('/getResults/:user_id', algoController.createResultsList, async (req, res, next) => {
  res.status(200).json(res.locals.results);
});

module.exports = router;