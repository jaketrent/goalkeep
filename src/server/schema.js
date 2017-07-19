const {
  makeExecutableSchema,
  addMockFunctionsToSchema
} = require('graphql-tools')

const { resolvers } = require('./resolvers')

const typeDefs = `

# Because apparently I need this?! Must provide schema definition with query type or a type named Query.

type Channel {
   id: ID!
   name: String
}
type Query {
   channels: [Channel]
}

type Login {
  email: String!
}
type LoginResponse {
  email: String
  thing: String
}

type LoginConfirm {
  email: String!
  token: String!
}
type LoginConfirmResponse {
  isSuccess: Boolean
  message: String
}

type Mutation {
  login(email: String!): LoginResponse
  loginConfirm(email: String!, token: String!): LoginConfirmResponse
}
`
const schema = makeExecutableSchema({ typeDefs, resolvers })
exports.schema = schema
