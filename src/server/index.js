require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')

const db = require('./db')
const { schema } = require('./schema')

const app = express()
const corsWhitelist = process.env.CORS_WHITELIST.split(',')
const corsOptions = {
  origin(origin, done) {
    return corsWhitelist.includes(origin)
      ? done(null, true)
      : done(new Error(`Origin ${origin} not allowed`))
  }
}

app.use('*', cors(corsOptions))
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const port = process.env.PORT || 3001

app.listen(port, _ => console.log('Server on port ' + port + '...'))
