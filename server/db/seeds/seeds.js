exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('specialisations').del()
  await knex('temps').del()

  // Create specialisations
  await knex('specialisations').insert([
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Technology' },
    { id: 3, name: 'Events' },
    { id: 4, name: 'Legal' },
  ])

  // Create temps
  await knex('temps').insert([
    { id: 1, name: 'Gloria', specialisation_id: 1, is_available: true },
    { id: 2, name: 'Geoff', specialisation_id: 4, is_available: false },
    { id: 3, name: 'Vanessa', specialisation_id: 2, is_available: true },
    { id: 4, name: 'Nadia', specialisation_id: 3, is_available: true },
    { id: 5, name: 'Millie', specialisation_id: 3, is_available: true },
    { id: 6, name: 'Sadie', specialisation_id: 2, is_available: false },
    { id: 7, name: 'Richard', specialisation_id: 1, is_available: true },
    { id: 8, name: 'George', specialisation_id: 4, is_available: true },
  ])
}
