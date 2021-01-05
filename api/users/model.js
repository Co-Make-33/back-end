const db = require('../../database/db-config');

module.exports = {
  getAll,
  getBy,
  getById,
  add,
  update,
  remove
}

function getAll() {
  return db('users').select('id', 'username', 'email' );
}

function getBy(filter) {
  return db('users').where(filter).orderBy('id');
}

function getById(id) {
  return db("users").select('id', 'username', 'email' ).where({ id }).first();
}

async function add(user) {
  const [id] = await db('users').insert(user, 'id');
  return getById(id);
}

function update(id, info) {
  return getById(id).update(info);
}

function remove(id) {
  return getById(id).del();
}
