const Pool = require('pg').Pool;


// Connection to postgresql database. Change URL below for another database.
const pool = new Pool({
  connectionString: "postgres://vtllhtnl:mS10i22W8-5lu_niodtxK4oLtF6LcEiS@drona.db.elephantsql.com:5432/vtllhtnl"
});

module.exports = pool;