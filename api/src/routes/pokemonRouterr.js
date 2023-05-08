const express = require('express')
const getAllPokemons = require('../controllers/getAllPokemons')
const getPokemonsByName = require('../controllers/getPokemonsByName')
const getPokemonsByID = require('../controllers/getPokemonsByID')
const createPokemon = require('../controllers/createPokemon')

const pokemonRouter = express.Router()


pokemonRouter.get('/', getAllPokemons)


// por query name?
pokemonRouter.get('/name', getPokemonsByName)

pokemonRouter.get('/:idPokemon', getPokemonsByID)

pokemonRouter.post('/', createPokemon)


module.exports = pokemonRouter