const express = require('express')
const router = express.Router()

const db = require('../db')

// GET /tasks
router.get('/', async (req, res) => {
  try {
    const specialisations = await db.getAllSpecialisations()

    res.json(specialisations)
  } catch (err) {
    console.error(err.message)
  }
})

module.exports = router
