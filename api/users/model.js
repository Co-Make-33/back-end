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
  return db('users').select('user_id', 'username' );
}

function getBy(filter) {
  return db('users').where(filter).orderBy('user_id');
}

function getById(id) {
  return db('users').where({ id }).first();
}

async function add(user) {
  const [id] = await db('users').insert(user, 'user_id');
  return getById(id);
}

function update(id, info) {
  return getById(id).update(info);
}

function remove(id) {
  return getById(id).del();
}
