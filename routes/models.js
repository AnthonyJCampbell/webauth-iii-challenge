const db = require('./../data/dbConfig')

module.exports = {
  find,
  findBy,
  add,
  findUserById,
}

function find() {
  return db('users').select('id', 'username', 'password')
}

function findBy(filter) {
  return db('users').where(filter)
}


async function add(user) {
  let [id] = await db('users').insert(user)

  return findUserById(id)
}


function findUserById(id) {
  return db('users').where({id}).first()
}