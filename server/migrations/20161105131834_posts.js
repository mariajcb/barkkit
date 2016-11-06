
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments()
    table.integer('user_id')
    table.string('title').notNullable().defaultTo('')
    table.string('author').notNullable().defaultTo('')
    table.string('image')
    table.string('description').notNullable().defaultTo('')
    table.integer('votes').defaultTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts')
};
