exports.up = function (knex) {
  return knex.schema.createTable('hours', table => {
    table.increments()

    table.boolean('livre').notNullable();
    table.string('horario').notNullable();
    table.string('cliente').notNullable();
    table.string('schedule_id').notNullable();

    table.foreign('id').references('id').inTable('schedules')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('hours')
};
