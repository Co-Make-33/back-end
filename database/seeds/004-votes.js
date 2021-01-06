
exports.seed = function(knex) {
  return knex('votes').del()
    .then(function () {
      return knex('votes').insert([
        {id: 1, user_id: 1, issue_id: 1},
        {id: 2, user_id: 3, issue_id: 2},
        {id: 3, user_id: 1, issue_id: 2}
      ]);
    });
};
