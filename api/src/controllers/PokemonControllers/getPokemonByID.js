require('dotenv').config();
const axios = require('axios')
const {Pokemon, Type} = require('../../db')
const Extractors = require('../../utils/extractors')

const {API_URL} = process.env;




const _getPokemonByIDOfDB = async (id) => {
  return Pokemon.findByPk(id, {
    include: {
      model: Type,
      through: {
        attributes: [], // nada de la tabla intermedia
      }, 
    }
  })
}

const _getPokemonByIDOfAPI = async (id)=>{
  const {data} = await axios.get(`${API_URL}/${id}`)

  if(!data) throw new Error('No se encontró en API el pokemon para id: '+idPokemon)

  return Extractors.extractPokemonDetail(data)
}

const getPokemonByID = async (id) => {
  // Pedir a la BD

  if(isNaN(id)){
    let pokemon = await _getPokemonByIDOfDB(id)
    if(pokemon) return pokemon
  }
    
    
  // Pedimos a la API
  return await _getPokemonByIDOfAPI(id)
}


module.exports = getPokemonByID