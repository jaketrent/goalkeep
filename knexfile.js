require('dotenv').config()

module.exports = {
  client: 'pg',
  connection: process.env.DB_CONN_URL
}
