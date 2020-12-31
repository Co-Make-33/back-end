
exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('user_id')
      table.string('username', 128).notNullable().unique()
      table.string('email',128).notNullable().unique()
      table.string('password', 128).notNullable()
    })
    .createTable('issues', table => {
      table.increments('issue_id')
      table.string('title', 128).notNullable()
      table.string('description').notNullable()
      table.timestamp('date_created').defaultTo(knex.fn.now())
      table.string('resolved_status').defaultTo('unresolved')
      table.integer('user_id')
        .unsigned()
        .references('user_id').inTable('users')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('comments', table => {
      table.increments('comment_id')
      table.string('comment').notNullable()
      table.string('user_id').notNullable()
      table.timestamp('comment_date').defaultTo(knex.fn.now())
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('comments')
    .dropTableIfExists('issues')
    .dropTableIfExists('users');
};