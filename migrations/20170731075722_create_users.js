exports.up = knex =>
  knex.schema.createTable('users', t => {
    t.string('email').notNull().primary()
    t.string('token').notNull()
    t.dateTime('createdAt').notNull()
    t.dateTime('updatedAt').notNull()
  })

exports.down = knex => knex.schema.dropTable('users')
