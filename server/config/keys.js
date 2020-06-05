const { Pool } = require('pg');

const PG_URI =
  'postgres://chrnvxwf:cngDfImIIPi4y6oZvtUDT-oNCuBYtw0q@ruby.db.elephantsql.com:5432/chrnvxwf';
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
