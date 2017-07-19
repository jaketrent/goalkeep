const uuid = require('uuid/v4')

// http://localhost:3000/login/confirm?email=trent.jake%40gmail.com&token=0bb0b72d-b0e6-42bd-b669-5319ee17c43c
const tempEmail = 'trent.jake@gmail.com'
const tempToken = '0bb0b72d-b0e6-42bd-b669-5319ee17c43c'
const tempUser = { email: tempEmail, token: tempToken }
const tempUsers = {
  [tempEmail]: tempUser
}

const create = email => {
  const token = uuid()

  const user = { token, email }

  // TODO: real data write
  // TODO: gen and return expiration date
  tempUsers[email] = user

  return user
}

const confirm = (email, token) => {
  // TODO: real data access
  return new Promise((resolve, reject) => {
    const user = tempUsers[email]

    if (user && user.token === token) resolve(user)
    else reject()
  })
}

exports.confirm = confirm
exports.create = create
