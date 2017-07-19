const email = require('./email')
const users = require('./users')

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
      const user = users.create(args.email)
      await email.sendConfirm(user.token, user.email)
      const newLogin = {
        // TODO: rename message
        thing: `Email sent to ${args.email}. Check your email for login link.`,
        email: args.email
      }
      console.log('here', newLogin)
      return newLogin
    },
    loginConfirm: async (root, args) => {
      try {
        await users.confirm(args.email, args.token)
        return { isSuccess: true, message: 'Login confirmed' }
      } catch (err) {
        console.log('err', err)
        return { isSuccess: false, message: 'Login rejected' }
      }
    }
  }
}

exports.resolvers = resolvers
