const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')

const { schema } = require('./schema')

const app = express()

app.use('*', cors({ origin: 'http://localhost:3000' }))
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

const port = process.env.PORT || 3001

app.listen(port, _ => console.log('Server on port ' + port + '...'))
