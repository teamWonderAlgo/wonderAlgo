const express = require('express');
const pool = require('../../db')

const router = express.Router();

// Get a algo for a specific ID number (random num is generated in front end)
router.get('/algo/:id', /**middleware */ async (req,res)=>{
  const query = 'SELECT * FROM algos WHERE algo_id = $1;'
  try {
    const algo = await pool.query(query, [req.params.id])
    res.status(200).json(algo.rows[0])
  } catch (error) {
    return next(error)
  }
})

router.post('/storeResult', (req, res ) => {
  
  res.status(200).json('stored');
})

module.exports = router;