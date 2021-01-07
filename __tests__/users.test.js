const db = require('../database/db-config');

const Users = require('../api/users/model');

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

const TestUser = {username:'Test', email: 't@t.com', password: '123123'}
const TestUpdate = {username:'Test 2', email: 't@t.com', password: '123123'}

describe('Users model', () => {
  it('getAll lists all users in users table', async () => {
    const result = await Users.getAll()
    expect(result).toHaveLength(3)
  })
  it('getBy gets specific user object', async () => {
    const result = await Users.getBy({username:'Paco'})
    expect(result).toHaveLength(1)
  })
  it('getBy gets specific user object', async () => {
    const result = await Users.getBy({username:'Paco'})
    expect(result).toHaveLength(1)
  })
  it('getBy returns empty object when user does not exist', async () => {
    const result = await Users.getBy({username:'April'})
    expect(result).toHaveLength(0)
  })
  it('getById returns specific users info', async () => {
    const result = await Users.getById(1)
    expect(result.id).toBe(1)
  })
  it('getById returns undefined when user does not exist', async () => {
    const result = await Users.getById(100)
    expect(result).toBe(undefined)
  })
  it('add creates new user', async () => {
    const result = await Users.add(TestUser)
    expect(result.id).toBe(4)
    expect([result]).toHaveLength(1)
  })
  it('update returns 1 when update was successful', async () => {
    const result = await Users.update(1, TestUpdate)
    expect(result).toBe(1)
    const check = await Users.getById(1)
    expect(check.id).toBe(1)
  })
  it('update returns 0 when user does not exist', async () => {
    const result = await Users.update(100, TestUpdate)
    expect(result).toBe(0)
  })
  it('remove returns 1 when deletion was successful', async () => {
    const result = await Users.remove(1)
    expect(result).toBe(1)
    const check = await Users.getById(1)
    expect(check).toBe(undefined)
  })
  it('remove returns 0 when user does not exist', async () => {
    const result = await Users.remove(100)
    expect(result).toBe(0)
  })
})
