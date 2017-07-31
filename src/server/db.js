const pg = require('knex')({
  client: 'pg',
  connection: process.env.DB_CONN_URL
})

module.exports = pg
