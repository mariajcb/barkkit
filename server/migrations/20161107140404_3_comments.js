exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments();
        table.integer('posts_id').notNullable().references('id').inTable('posts').onDelete('CASCADE');
        table.integer('users_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.string('content').notNullable();
        table.string('author').notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('comments')
}
