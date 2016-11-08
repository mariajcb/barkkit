<<<<<<< HEAD:server/migrations/20161105131834_posts.js
=======

exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments()
    table.integer('users_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.string('title').notNullable().defaultTo('')
    table.string('author').notNullable().defaultTo('')
    table.string('image').notNullable()
    table.string('description', 2000).notNullable().defaultTo('')
    table.integer('votes').defaultTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts')
};
>>>>>>> loginsignup:server/migrations/20161105131834_2_posts.js
