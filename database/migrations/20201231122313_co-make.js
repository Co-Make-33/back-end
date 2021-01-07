
exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id')
      table.string('username', 128).notNullable().unique().index()
      table.string('email',128).notNullable().unique().index()
      table.string('password', 128).notNullable()
    })
    .createTable('issues', table => {
      table.increments('id')
      table.string('title', 128).notNullable()
      table.string('description').notNullable()
      table.timestamp('date_created').defaultTo(knex.fn.now())
      table.string('resolved_status').defaultTo('unresolved')
      table.integer('user_id')
        .unsigned()
        .references('id').inTable('users')
        .onDelete('CASCADE').onUpdate('CASCADE')
    })
    .createTable('comments', table => {
      table.increments('id')
      table.string('comment').notNullable()
      table.timestamp('comment_date').defaultTo(knex.fn.now())
      table.integer('user_id')
        .unsigned()
        .references('id').inTable('users')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('issue_id')
        .unsigned()
        .references('id').inTable('issues')
        .onDelete('CASCADE').onUpdate('CASCADE')
    })
    .createTable('votes', table => {
      table.increments('id')
      table.integer('user_id')
        .unsigned()
        .references('id').inTable('users')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('issue_id')
        .unsigned()
        .references('id').inTable('issues')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('vote')
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('votes')
    .dropTableIfExists('comments')
    .dropTableIfExists('issues')
    .dropTableIfExists('users');
};
