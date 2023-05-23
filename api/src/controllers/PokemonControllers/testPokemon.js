require('dotenv').config();
const axios = require('axios')
const {Pokemon, Type} = require('../../db')
const Extractors = require('../../utils/extractors')

const {API_URL} = process.env;


const testPokemon = async (id)=>{
  
  const types = await Type.findAll({where: {id: [1, 2]}})

  return types
}


module.exports = testPokemon
