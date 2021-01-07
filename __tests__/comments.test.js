const db = require('../database/db-config');

const Comments = require('../api/actions/comments-model');

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('comments').truncate()
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

const TestComment = {comment:'hello', user_id:3, issue_id:3}

describe('Comments model', () => {
  it('Comments.getIssueComments returns an empty array if no comments exist', async () => {
    const result = await Comments.getIssueComments(100)
    expect(result).toHaveLength(0)
  })
  it('Comments.getIssueComments returns comments for a particular issue', async () => {
    const result = await Comments.getIssueComments(2)    
    expect(result).toHaveLength(2)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('comment')
    expect(result[0]).toHaveProperty('user_id')
    expect(result[0]).toHaveProperty('issue_id')
  })
  it('Comments.getUserComments returns an empty array if no comments exist', async () => {
    const result = await Comments.getUserComments(100)
    expect(result).toHaveLength(0)
  })
  it('Comments.getUserComments returns comments for a particular user', async () => {
    const result = await Comments.getUserComments(1)
    expect(result).toHaveLength(2)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('comment')
    expect(result[0]).toHaveProperty('user_id')
    expect(result[0]).toHaveProperty('issue_id')
  })
  it('Comments.getComment returns an empty array if no comment exist', async () => {
    const result = await Comments.getComment(100)
    expect(result).toHaveLength(0)
  })
  it('Comments.getComment returns specified comment', async () => {
    const result = await Comments.getComment(2)
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe(2)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('comment')
  })
  it('Comments.addComment adds expected comment to the comments table', async () => {
    const result = await Comments.addComment(TestComment)
    expect(result).toHaveLength(1)
    expect(result[0].user_id).toBe(3)
    expect(result[0].comment).toBe('hello')
  })
})
