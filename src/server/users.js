const uuid = require('uuid/v4')

const db = require('./db')
const usersRepo = require('./users/repo')

// http://localhost:3000/login/confirm?email=trent.jake%40gmail.com&token=0bb0b72d-b0e6-42bd-b669-5319ee17c43c
const tempEmail = 'trent.jake@gmail.com'
const tempToken = '0bb0b72d-b0e6-42bd-b669-5319ee17c43c'
const tempUser = { email: tempEmail, token: tempToken }
const tempUsers = {
  [tempEmail]: tempUser
}

const create = async email => {
  const token = uuid()
  const user = { token, email }
  await usersRepo.create(db, user)
  return user
}

const confirm = (email, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await usersRepo.find(db, { email, token })
      if (!user) return reject()

      resolve(user)
    } catch (err) {
      reject()
    }
  })
}

exports.confirm = confirm
exports.create = create
