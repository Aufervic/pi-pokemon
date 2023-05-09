require('dotenv').config()
const axios = require('axios')
const Extractors = require('../utils/extractors')
const {Pokemon, Type} = require('../db')

const {API_URL} = process.env


const _getPokemonsByNameOfDB = async (name) => {
  return await Pokemon.findAll({
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
  const {data} = await axios.get(`${API_URL}/${name}`)

  return Extractors.extractPokemonDetail(data)
}

const getPokemonsByName = async (req, res)=>{
  try {
    const name = req.query.name.toLowerCase()
    
    
    // Buscar en la Base de Datos
    let pokemon = await _getPokemonsByNameOfDB(name)
    
    if(pokemon.length) return res.status(200).json(pokemon)

    // Buscar en la API
     pokemon = await _getPokemonsByNameOfAPI(name)
    

    res.status(200).json(pokemon)

  } catch (error) {
    if(error.code === 'ERR_BAD_REQUEST'){
      return res.status(404).json({error: 'El pokemon no fue encontrado'})
    }
    
    res.status(500).json({error: error.message})
    
  }

}

module.exports = getPokemonsByName