const express = require('express')

const {
  getAllPokemonsHandler,
  getPokemonByIDHandler,
  getPokemonByNameHandler,
  createPokemonHandler
} = require('../handlers/pokemonHandlers')

const pokemonRouter = express.Router()


pokemonRouter.get('/', getAllPokemonsHandler)


// por query name?
pokemonRouter.get('/name', getPokemonByNameHandler)

pokemonRouter.get('/:idPokemon', getPokemonByIDHandler)

pokemonRouter.post('/', createPokemonHandler)


module.exports = pokemonRouter