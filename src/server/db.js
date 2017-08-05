// @flow
const config = require('./config')

const pg = require('knex')({
  client: 'pg',
  connection: config.databaseUrl
})

module.exports = pg
