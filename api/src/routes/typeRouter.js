const express = require('express')
const {getAllTypesHandler} = require('../handlers/typeHandlers')

const typeRouter = express.Router()


typeRouter.get('/', getAllTypesHandler)


module.exports = typeRouter