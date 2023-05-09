const express = require('express')
const getAllTypes = require('../controllers/getAllTypes')

const typeRouter = express.Router()


typeRouter.get('/', getAllTypes)


module.exports = typeRouter