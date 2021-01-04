const db = require('../../database/db-config');

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove
}

 function getAll(){
  return db('issues');
 }

 function getById(id) {
  return db('issues').where({ id }).first();
 }

 async function add(issue) {
  const [id] = await db('issues').insert(issue, 'id');
  return getById(id);
 }

 function update(id, info) {
   return getById(id).update(info);
 }

 function remove(id) {
  return getById(id).del();
}
