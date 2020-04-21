const pool = require('../../db');

const algoController = {};

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
