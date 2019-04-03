
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();

    table
      .varchar('username', 64)
      .notNullable()
      .unique();

    table
      .varchar("password", 128)
      .notNullable();
    table
      .varchar("department", 128)
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
