// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users.sqlite3'
    },
    seeds: {
      directory: './data/seeds'
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  },
};
