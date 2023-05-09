require('dotenv').config()
const axios = require('axios')
const Extractors = require('../utils/extractors')
const {API_URL} = process.env

const getPokemonsByName = async (req, res)=>{
  try {
    const name = req.query.name.toLowerCase()
    
    // Buscar en la Base de Datos

    // Buscar en la API
    const {data} = await axios.get(`${API_URL}/${name}`)

    const pokemon = Extractors.extractPokemon(data)

    res.status(200).json(pokemon)

  } catch (error) {
    if(error.code === 'ERR_BAD_REQUEST'){
      return res.status(404).json({error: 'El pokemon no fue encontrado'})
    }
    
    res.status(500).json({error: error.message})
    
  }

}

module.exports = getPokemonsByName