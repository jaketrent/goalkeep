exports.up = knex =>
  knex.schema.createTable('users', t => {
    t.string('email').notNull().primary()
    t.string('token').notNull()
    t.dateTime('createdAt').notNull().defaultTo(knex.fn.now())
    t.dateTime('updatedAt').notNull().defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('users')
