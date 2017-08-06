// @flow
const uuid = require('uuid/v4')

const db = require('./db')
const usersRepo = require('./users/repo')
import type { User, UserSeed } from './users/repo'

// http://localhost:3000/login/confirm?email=trent.jake%40gmail.com&token=0bb0b72d-b0e6-42bd-b669-5319ee17c43c
const tempEmail = 'trent.jake@gmail.com'
const tempToken = '0bb0b72d-b0e6-42bd-b669-5319ee17c43c'
const tempUser = { email: tempEmail, token: tempToken }
const tempUsers = {
  [tempEmail]: tempUser
}

const create = async (email: string): Promise<User> => {
  const token = uuid()
  const seed: UserSeed = { token, email }
  return await usersRepo.create(db, seed)
}

const confirm = (email: string, token: string): Promise<User> => {
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
