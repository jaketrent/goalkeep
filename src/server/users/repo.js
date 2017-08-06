// @flow
const util = require('util')

export type UserSeed = {
  email: string,
  token: string
}

export type User = UserSeed

const create = async (
  db: Knex$Knex,
  { email, token }: UserSeed
): Promise<User> => {
  const insert = db('users').insert({ email, token }).toString()

  const update = db('users')
    .update({ token })
    .whereRaw(`users.email = '${email}'`)
  const query = util.format(
    '%s ON CONFLICT (email) DO UPDATE SET %s',
    insert.toString(),
    update.toString().replace(/^update\s.*\sset\s/i, '')
  )

  await db.raw(query)
  return { email, token }
}

// TODO: how to flowtype Promise<User>?
const find = async (db: Knex$Knex, { email, token }: User): any => {
  return await db('users').where({ email, token })
}

exports.create = create
exports.find = find
