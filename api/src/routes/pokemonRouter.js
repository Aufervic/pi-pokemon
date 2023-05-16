const express = require('express')

const {
  getAllPokemonsHandler,
  getPokemonByIDHandler,
  getPokemonByNameHandler,
  createPokemonHandler,
  testPokemonHandler,
  deletePokemonHandler
  
} = require('../handlers/pokemonHandlers')

const pokemonRouter = express.Router()


pokemonRouter.get('/', getAllPokemonsHandler)


// por query name?
pokemonRouter.get('/name', getPokemonByNameHandler)

pokemonRouter.get('/:idPokemon', getPokemonByIDHandler)

pokemonRouter.post('/', createPokemonHandler)


pokemonRouter.delete('/delete/:id', deletePokemonHandler)



pokemonRouter.delete('/test/:id', testPokemonHandler)

module.exports = pokemonRouter