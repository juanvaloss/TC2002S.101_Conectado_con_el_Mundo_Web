const Pool = require("pg").Pool;
const db = new Pool({
    user: 'adminn',
    host: 'localhost',
    database: 'quiz',
    password: 'password',
    port: 5432,
  });
  

module.exports = { db };

