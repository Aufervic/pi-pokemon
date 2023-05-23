require('dotenv').config();
const axios = require('axios')
const {Pokemon, Type} = require('../../db')
const Extractors = require('../../utils/extractors')

const {API_URL} = process.env;


const _getPokemonsByNameOfDB = async (name) => {
  return await Pokemon.findOne({
    where: {name},
    include:{
      model: Type,
      through: {
        attributes: []
      }
    }
  })
}

const _getPokemonsByNameOfAPI = async (name) => {
  try{
    const {data} = await axios.get(`${API_URL}/${name}`)
    return Extractors.extractPokemonDetail(data)
  }catch(err){
    return null
  }
}

const getPokemonByName = async (name) => {
    // Buscar en la Base de Datos
    let pokemon = await _getPokemonsByNameOfDB(name)
    
    if(pokemon) return pokemon

    // Buscar en la API
    return await _getPokemonsByNameOfAPI(name)
}


module.exports = getPokemonByName