require('dotenv').config();
const axios = require('axios')
const Extractors = require('../utils/extractors')
const {API_URL} = process.env;
const {Pokemon} = require('../db')


// trae los 20 primeros
// offset no debe superar al límite

const getAllPokemonsPromises = (req, res)=>{
    const {offset} = req.query

    axios.get(`${API_URL}?offset=${offset}&limit=${20}`)
    .then(({data}) => {

      if(!data) throw new Error('No se lograron traer los pokemons')
      const urls = data.results.map(p => axios(p.url))
      return Promise.all(urls)
    })

    .then((responses) => {
      const pokemons = responses.map( r => Extractors.extractPokemon(r.data) )

      res.status(200).json(pokemons)
    })

    .catch((error) =>{
      res.status(500).json({error: error.message})
    })
}

const _getAllPokemonsOfAPI = async (offset) =>{
  const {data} = await axios.get(`${API_URL}?offset=${offset}&limit=${20}`)
  
  if(!data) throw new Error('No se lograron traer los pokemons')
  
  const urls = data.results.map(p => axios(p.url))

  const pokemons = Promise.all(urls)
    .then((responses) => {
      return responses.map( r => Extractors.extractPokemon(r.data) )
    })
    .catch((error) =>{
      throw new Error(error.message)
    })

  return pokemons
}

const _getAllPokemonsOfDB = async () => {
  return await Pokemon.findAll({
    attributes: ['id', 'name', 'image']
  })
}

const getAllPokemonsAxios = async (req, res)=>{
  const {offset} = req.query

  try {
    const pokemonsAPI = await _getAllPokemonsOfAPI(offset)
    const pokemonsDB = await _getAllPokemonsOfDB()

    res.status(200).json(pokemonsAPI.concat(pokemonsDB))
  } catch (error) {
    res.status(500).json({error: error.message})
  }

}

// Ambos metodos parecen demorar igual
// module.exports = getAllPokemons
module.exports = getAllPokemonsAxios