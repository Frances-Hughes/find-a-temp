import request from 'superagent'

export function getSpecialisations() {
  return request.get('/specialisations').then((res) => {
    return res.body
  })
}

export function getTemps(query) {
  return request
    .get('/temps')
    .query(query)
    .then((res) => {
      return res.body
    })
}
