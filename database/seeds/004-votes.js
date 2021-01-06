
exports.seed = function(knex) {
  return knex('votes').del()
    .then(function () {
      return knex('votes').insert([
        {id: 1, user_id: 1, issue_id: 1, upvote: 1, downvote: null},
        {id: 2, user_id: 3, issue_id: 2, upvote: 1, downvote: null},
        {id: 3, user_id: 1, issue_id: 2, upvote: 1, downvote: null}
      ]);
    });
};
