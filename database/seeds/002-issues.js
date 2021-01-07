
exports.seed = function(knex) {
  return knex('issues').del()
    .then(function () {
      return knex('issues').insert([
        {id: 1, title: 'potholes', description: 'All the freaking holes in the roads! Why does this need an explanation?', resolved_status: 'unresolved', user_id: 1},
        {id: 2, title: 'racoons', description: 'We all need trash pandas in our lives. Import racoons!!!', resolved_status: 'unresolved', user_id: 3},
        {id: 3, title: 'feral trees', description: 'The trees are infected with albienuctious and attacking sweet little kitties!', resolved_status: 'unresolved', user_id: 2}
      ]);
    });
};
