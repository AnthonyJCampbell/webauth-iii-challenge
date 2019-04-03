const db = require('./../data/dbConfig')

module.exports = {
  find,
  findBy,
  createUser,
  findUserById,
}

function find() {
  return db('users').select('id', 'username', 'password')
}

function findBy(filter) {
  return db('users').where(filter)
}

async function createUser(newUser) {
  const [id] = await db('users').insert(newUser)

  return findUserById(id)
}

function findUserById(id) {
  return db('users').where({id}).first()
}