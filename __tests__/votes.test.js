const db = require('../database/db-config');

const Votes = require('../api/actions/votes-model');

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('votes').del()
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

const TestVote = {user_id: 1, issue_id: 1, upvote: null, downvote: -1}

describe('Votes model', () => {
  it('Votes.getIssueVotes returns a vote total for a given issue', async () => {
    const result = await Votes.getIssueVotes(2)    
    expect(result).toHaveLength(1)
    expect(result[0].issue_id).toBe(2)
  })
  it('Votes.getIssueVotes returns values of null when a given issue does not have any votes', async () => {
    const result = await Votes.getIssueVotes(3)
    expect(result[0].id).toBe(null)
  })
  it('Votes.upsert adds vote data to votes table', async () => {
    const result = await Votes.upsert(TestVote)
    expect(typeof(result)).toBe('object')
  })
})
