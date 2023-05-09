require('dotenv').config();
const axios = require('axios')
const Extractors = require('../utils/extractors')
const {API_URL} = process.env;

const _getPokemonByIDOfAPI = async (idPokemon)=>{
  const {data} = await axios.get(`${API_URL}/${idPokemon}`)

  if(!data) throw new Error('No se encontró en API el pokemon para id: '+idPokemon)

  return Extractors.extractPokemonDetail(data)
}

// el id debe ser un numero aceptable
const getPokemonsByID = async (req, res)=>{
  try {
    const {idPokemon} = req.params
    
    // Pedir a la BD
    
    // Pedimos a la API
    const pokemon = await _getPokemonByIDOfAPI(idPokemon)

    // también devolver junto con los tipos asociados al pokemon
    res.status(200).json(pokemon)

  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = getPokemonsByID