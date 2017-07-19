const email = require('./email')
const token = require('./token')

const channels = [
  {
    id: 1,
    name: 'soccer'
  },
  { id: 2, name: 'baseball' }
]

const resolvers = {
  Query: {
    channels: _ => channels
  },
  Mutation: {
    login: async (root, args) => {
      await email.sendConfirm(token.generate(), args.email)
      const newLogin = {
        thing: `Email sent to ${args.email}. Check your email for login link.`,
        email: args.email
      }
      console.log('here', newLogin)
      return newLogin
    }
  }
}

exports.resolvers = resolvers
