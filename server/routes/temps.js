const express = require('express')
const router = express.Router()

const db = require('../db')

// GET /temps
router.get('/', async (req, res) => {
  try {
    const temps = await db.getTemps(req.query)

    res.json(temps)
  } catch (err) {
    console.error(err.message)
  }
})

module.exports = router
