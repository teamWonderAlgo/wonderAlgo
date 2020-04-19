const Pool = require('pg').Pool;

const pool = new Pool({
  connectionString: "postgres://vtllhtnl:mS10i22W8-5lu_niodtxK4oLtF6LcEiS@drona.db.elephantsql.com:5432/vtllhtnl"
});

module.exports = pool;