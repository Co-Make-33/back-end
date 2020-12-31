
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, username: 'Paco', password: '123123', },
        {id: 2, username: 'Nate', password: '123123', },
        {id: 3, username: 'NoName', password: '123123', }
      ]);
    });
};
