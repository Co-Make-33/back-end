const db = require('../../database/db-config');

module.exports = {
  getIssueVotes,
  getIssueComments,
  getUserComments
}

function getIssueVotes(id){
  return db('votes as v')
    .where('v.issue_id', 'like', id)
    .sum('v.vote')
    .join('users as u', 'v.user_id', 'u.id')
    .join('issues as i', 'v.issue_id', 'i.id')
    .select('v.*', 'u.username', 'i.title')
}

function getIssueComments(id){
  return db('comments as c')
    .where('c.issue_id', 'like', id).first()
    .join('users as u', 'c.user_id', 'u.id')
    .join('issues as i', 'c.issue_id', 'i.id')
    .select('c.*', 'u.username', 'i.title')
}

function getUserComments(id){
  return db('comments as c')
    .where('c.user_id', 'like', id).first()
    .join('users as u', 'c.user_id', 'u.id')
    .join('issues as i', 'c.issue_id', 'i.id')
    .select('c.*', 'u.username', 'i.title')
}


