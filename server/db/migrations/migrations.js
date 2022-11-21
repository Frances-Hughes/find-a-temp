exports.up = async function (knex) {
  await knex.schema.createTable('specialisations', (table) => {
    table.increments('id').primary()
    table.string('name')
  })
  return knex.schema.createTable('temps', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('specialisation_id').references('specialisations.id')
    table.boolean('is_available')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('temps')
  return knex.schema.dropTable('specialisations')
}
