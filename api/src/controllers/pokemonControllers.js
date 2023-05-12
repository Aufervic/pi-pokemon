require('dotenv').config();
const axios = require('axios')
const {Pokemon, Type} = require('../db')
const Extractors = require('../utils/extractors')

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
    attributes: ['id', 'name', 'image', 'createdInDB'],
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

    return pokemonsDB.concat(pokemonsAPI)
}



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

const getPokemonByName = async (name) => {
    // Buscar en la Base de Datos
    let pokemon = await _getPokemonsByNameOfDB(name)
    
    if(pokemon.length) return pokemon

    // Buscar en la API
    return await _getPokemonsByNameOfAPI(name)
}



const createPokemon = async (name, image, health, attack, defense, speed, height, weight, types)=>{

  // verificar si existen los types, antes de crear el pokemon
  const newPokemon = await Pokemon.create({name, image, health, attack, defense, speed, height, weight})
  await newPokemon.addTypes(types)
  
  const thePokemon = await Pokemon.findByPk(newPokemon.id, {
    include: {
      model: Type,
      //attributes: ['name'],
      through: {
        attributes: [], // nada de la tabla intermedia, cuando tiene los atributos timestamps
      }, 
    }
  })
  if(!thePokemon) throw new Error(`Pokemon con id: ${newPokemon.id} no existe :(`)
  

  return thePokemon

}

module.exports = {
  getAllPokemons,
  getPokemonByID,
  getPokemonByName,
  createPokemon
}