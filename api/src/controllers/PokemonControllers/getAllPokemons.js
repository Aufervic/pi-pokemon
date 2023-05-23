require('dotenv').config();
const axios = require('axios')
const {Pokemon, Type} = require('../../db')
const Extractors = require('../../utils/extractors')

const {API_URL} = process.env;



const _getAllPokemonsOfAPI = async (offset) =>{
  
  const {data} = await axios.get(`${API_URL}?offset=${offset}&limit=${5}`)
  
  if(!data) throw new Error('No se lograron traer los pokemons')
  
  const urls = data.results.map(p => axios(p.url))
  const pokemons = await Promise.all(urls)
    .then((responses) => {
      return responses.map( r => Extractors.extractPokemon(r.data) )
    })
    .catch((error) =>{
      throw new Error(error.message)
    })
  return pokemons
}

const _getAllPokemonsOfDB = async () => {
  return  await Pokemon.findAll({
    attributes: ['id', 'name', 'image', 'attack', 'createdInDB'],
    include: {
      model: Type,
      through: {
        attributes: []
      }
    }
  })
}

const getAllPokemons = async (offset) => {
  const pokemonsDB = await _getAllPokemonsOfDB()
    const pokemonsAPI = await _getAllPokemonsOfAPI(offset)

    return pokemonsDB.reverse().concat(pokemonsAPI)
}


module.exports = getAllPokemons