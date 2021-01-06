const db = require('../../database/db-config');

module.exports = {
  getIssueVotes,
  getIssueComments,
  getUserComments,
  getComment,
  addComment
}

function getIssueVotes(id) {
  return db('votes as v')
    .where('v.issue_id', 'like', id)
    .sum('v.vote')
    .join('users as u', 'v.user_id', 'u.id')
    .join('issues as i', 'v.issue_id', 'i.id')
    .select('v.*', 'u.username', 'i.title');
}

function getIssueComments(id) {
  return db('comments as c')
    .where('c.issue_id', 'like', id).first()
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
    .where('c.id', id).first()
    .join('users as u', 'c.user_id', 'u.id')
    .join('issues as i', 'c.issue_id', 'i.id')
    .select('c.*', 'u.username', 'i.title');
}

async function addComment(comment) {
  const id = await db('comments').insert(comment);
  return await getComment(id)
}
