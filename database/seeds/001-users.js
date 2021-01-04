
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Paco', email: 'p@p.com', password: '123123', },
        {id: 2, username: 'Nate', email: 'n@n.com', password: '123123', },
        {id: 3, username: 'NoName', email: 'no@no.com', password: '123123', }
      ]);
    });
};
