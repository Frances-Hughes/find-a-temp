import React, { useEffect, useState } from 'react'
import { getSpecialisations, getTemps } from '../apis'

function App() {
  const [specialisations, setSpecialisations] = useState([])
  const [temps, setTemps] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filters, setFilters] = useState({})

  function fetchSpecialisations() {
    setLoading(true)
    setError('')
    getSpecialisations()
      .then((specialisations) => {
        setSpecialisations(specialisations)
      })
      .finally(() => setLoading(false))
      .catch((err) => {
        setError(err.message)
      })
  }

  function fetchTemps() {
    setLoading(true)
    setError('')
    getTemps(filters)
      .then((temps) => {
        setTemps(temps)
      })
      .finally(() => setLoading(false))
      .catch((err) => {
        setError(err.message)
      })
  }

  useEffect(() => {
    fetchSpecialisations()
    fetchTemps()
  }, [])

  useEffect(() => {
    fetchTemps()
  }, [filters])

  const handleChange = (e) => {
    setFilters((prevState) => {
      let filterData = Object.assign({}, prevState)
      if (e.target.value === '') {
        delete filterData[e.target.name]
      } else {
        filterData[e.target.name] = e.target.value
      }
      return filterData
    })
  }

  return (
    <div className="app">
      <div className="heading">Find a Temp</div>
      <div className="selects">
        <div className="select-wrapper">
          <select
            name="specialisation_id"
            id="specialisation_id"
            onChange={handleChange}
          >
            <option value="">Specialisation</option>
            {specialisations.map((specialisation) => (
              <option key={specialisation.id} value={specialisation.id}>
                {specialisation.name}
              </option>
            ))}
          </select>
        </div>
        <div className="select-wrapper">
          <select name="is_available" id="is_available" onChange={handleChange}>
            <option value="">Available</option>
            <option value="1">True</option>
            <option value="0">False</option>
          </select>
        </div>
      </div>
      <div className="results">
        {temps.length === 0 && <div className="result">No temps found</div>}
        {temps.map((temp) => (
          <div className="result" key={temp.id}>
            <div>
              <strong>Name:</strong> {temp.name}
            </div>
            <div>
              <strong>Specialisation:</strong> {temp.specialisation}
            </div>
            <div>
              <strong>Available:</strong> {temp.is_available ? 'True' : 'False'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
