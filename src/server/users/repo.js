const util = require('util')

const create = async (db, { email, token }) => {
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
}

const find = async (db, { email, token }) => {
  return await db('users').where({ email, token })
}

exports.create = create
exports.find = find
