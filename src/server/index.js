require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')

const { schema } = require('./schema')

const app = express()
const corsWhitelist = process.env.CORS_WHITELIST.split(',')
const corsOptions = {
  origin(origin, done) {
    console.log('origin', origin)
    return origin === 'https://goalkeep.jaketrent.com' //corsWhitelist.includes(origin)
      ? done(null, true)
      : done(new Error('CORS Origin no-no'))
  }
}

app.use('*', cors(corsOptions))
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const port = process.env.PORT || 3001

app.listen(port, _ => console.log('Server on port ' + port + '...'))
