const connection = require('./connection')

module.exports = {
  getAllSpecialisations,
  getTemps,
}

// get all specialisations
function getAllSpecialisations(db = connection) {
  return db('specialisations').select()
}

// get temps
function getTemps(data, db = connection) {
  const { specialisation_id, is_available } = data

  return db('temps')
    .innerJoin(
      'specialisations',
      'temps.specialisation_id',
      'specialisations.id'
    )
    .select(
      'temps.id',
      'temps.name',
      'specialisations.name as specialisation',
      'temps.is_available'
    )
    .modify(function (queryBuilder) {
      if (specialisation_id) {
        console.log('specialisation_id', specialisation_id)
        queryBuilder.where('temps.specialisation_id', specialisation_id)
      }
      if (is_available !== undefined) {
        console.log('is_available', is_available)

        queryBuilder.where('temps.is_available', is_available)
      }
    })
}
