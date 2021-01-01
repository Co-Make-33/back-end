
exports.seed = function(knex) {
  return knex('votes').truncate()
    .then(function () {
      return knex('votes').insert([
        {vote_id: 1, user_id: 1, issue_id: 1, vote: 1},
        {vote_id: 2, user_id: 3, issue_id: 2, vote: 1},
        {vote_id: 3, user_id: 1, issue_id: 2, vote: -1}
      ]);
    });
};