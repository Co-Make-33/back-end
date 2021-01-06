
exports.up = function(knex) {
  return knex.schema
    .table('votes', function(table){
      table.dropColumn('vote')
      table.integer('upvote')
      table.integer('downvote')
  })
};

exports.down = function(knex) {
  return knex.schema
    .table('votes', function(table) {
      table.dropColumn('downvote')
      table.dropColumn('upvote')
  })
};
