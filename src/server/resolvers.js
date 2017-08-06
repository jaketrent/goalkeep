// @flow
const email = require('./email')
const users = require('./users')

// TODO: temp, rm
const channels = [
  {
    id: 1,
    name: 'soccer'
  },
  { id: 2, name: 'baseball' }
]

const resolvers = {
  Query: {
    channels: () => channels
  },
  Mutation: {
    login: async (_: any, args: { email: string }) => {
      try {
        const user = await users.create(args.email)
        await email.sendConfirm(user.token, user.email)
        return { isSuccess: true, email: args.email }
      } catch (err) {
        console.log('err', err)
        return { isSuccess: false }
      }
    },
    loginConfirm: async (_: any, args: { email: string, token: string }) => {
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
