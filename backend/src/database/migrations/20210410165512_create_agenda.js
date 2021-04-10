exports.up = function (knex) {
  return knex.schema.createTable('schedule', table => {
    table.increments()
    table.integer('year').notNullable();
    table.integer('month').notNullable();
    table.integer('day').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('schedule')
};
