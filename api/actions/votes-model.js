const db = require('../../database/db-config');

module.exports = {
  getIssueVotes,
  addVote
}

function getIssueVotes(id) {
  return db('votes as v')
    .where('v.issue_id', 'like', id)
    .sum('v.upvote as upvote_total')
    .sum('v.downvote as downvote_total')
    .join('users as u', 'v.user_id', 'u.id')
    .join('issues as i', 'v.issue_id', 'i.id')
    .select('v.id', 'v.issue_id', 'i.title');
}

function addVote(vote) {
  return db('votes').insert(vote);
}
