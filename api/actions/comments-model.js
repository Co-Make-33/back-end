const db = require('../../database/db-config');

module.exports = {
  getIssueComments,
  getUserComments,
  getComment,
  addComment
}

function getIssueComments(id) {
  return db('comments as c')
    .where('c.issue_id', 'like', id)
    .join('users as u', 'c.user_id', 'u.id')
    .join('issues as i', 'c.issue_id', 'i.id')
    .select('c.*', 'u.username', 'i.title');
}

function getUserComments(id) {
  return db('comments as c')
    .where('c.user_id', 'like', id).first()
    .join('users as u', 'c.user_id', 'u.id')
    .join('issues as i', 'c.issue_id', 'i.id')
    .select('c.*', 'u.username', 'i.title');
}

function getComment(id) {
  return db('comments as c')
    .where('c.id', 'like', id).first()
    .join('users as u', 'c.user_id', 'u.id')
    .join('issues as i', 'c.issue_id', 'i.id')
    .select('c.*', 'u.username', 'i.title');
}

async function addComment(comment) {
  const [id] = await db('comments').insert(comment);
  return await getComment(id);
}
