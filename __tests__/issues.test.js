const db = require('../database/db-config');

const Issues = require('../api/issues/model');

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('issues').truncate()
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

const TestIssue = {title: 'potholes', description: 'All the freaking holes in the roads! Why does this need an explanation?', resolved_status: 'unresolved', user_id: 3}

const TestUpdate = {title: 'noPotholes', description: 'All the  holes in the road have been disappeared!', resolved_status: 'unresolved', user_id: 3}

describe('Issues model', () => {
  it('getAll gets issues list', async () => {
    const result = await Issues.getAll()
    expect(result).toHaveLength(3)
  })
  it('getBy issue by user_id', async () => {
    const result = await Issues.getBy(1)    
    expect(result.user_id).toBe(1)
    expect([result]).toHaveLength(1)
  })
  it('getBy returns undefined when user_id does not exist', async () => {
    const result = await Issues.getBy(100)
    expect(result).toBe(undefined)
  })
  it('getById gets issue by id', async () => {
    const result = await Issues.getById(2)
    expect(result.user_id).toBe(3)
  })
  it('getById returns undefined when issue does not exist', async () => {
    const result = await Issues.getById(100)
    expect(result).toBe(undefined)
  })
  it('add inserts new issue into issues table', async () => {
    const result = await Issues.add(TestIssue)
    expect([result]).toHaveLength(1)
    const check = await Issues.getById(4)
    expect(check).toMatchObject(TestIssue)
  })
  it('update edits issue in issues table', async () => {
    const result = await Issues.update(1,TestUpdate)
    expect(result).toBe(1)
    const check = await Issues.getById(1)
    expect(check).toMatchObject(TestUpdate)
  })
  it('update fails to edit issue in issues table when no issue by that id exists', async () => {
    const result = await Issues.update(100,TestUpdate)
    expect(result).toBe(0)
  })
  it('remove deletes issue from issues table', async () => {
    const result = await Issues.remove(1)
    expect(result).toBe(1)
    const check = await Issues.getAll()
    expect(check).toHaveLength(2)
  })
  it('remove fails to delete issue in issues table when no issue by that id exists', async () => {
    const result = await Issues.remove(100)
    expect(result).toBe(0)
    const check = await Issues.getAll()
    expect(check).toHaveLength(3)
  })
})
