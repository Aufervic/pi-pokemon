const createPokemon = require('./createPokemon')
const deletePokemon = require('./deletePokemon')
const getAllPokemons = require('./getAllPokemons')
const getPokemonByID = require('./getPokemonByID')
const getPokemonByName = require('./getPokemonByName')

const testPokemon = require('./testPokemon')


module.exports = {
  createPokemon,
  deletePokemon,
  getAllPokemons,
  getPokemonByID,
  getPokemonByName,
  
  testPokemon
}