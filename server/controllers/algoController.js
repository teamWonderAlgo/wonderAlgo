const pool = require('../../db');

const algoController = {};


// middleware for grabbing a results list: Get a sorted array of objects that contain 1) name of algo, 2) time elapsed, 3) the id of the time
algoController.createResultsList = async (req, res, next) => {
  const query = `
    SELECT times.time, algos.algo_name, times.id
    FROM times
    INNER JOIN algos ON times.algo_id = algos.algo_id
    WHERE times.user_id = $1
    ORDER BY time;`;
  try {
    const results = await pool.query(query, [req.params.user_id]);
    res.locals.results = results.rows;
    next();
  } catch (err) {
    return next(err);
  }
};

module.exports = algoController;
