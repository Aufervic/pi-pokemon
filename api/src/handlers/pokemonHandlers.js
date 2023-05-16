const {
  getAllPokemons,
  getPokemonByID,
  getPokemonByName,
  createPokemon,
  deletePokemon,

  testPokemon
} = require('../controllers/pokemonControllers')

const getAllPokemonsHandler = async (req, res) =>{
  const {offset} = req.query

  try {
    const pokemons = await getAllPokemons(offset)
    res.status(200).json(pokemons)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const getPokemonByIDHandler = async (req, res) => {
  const {idPokemon} = req.params
  try {
    const pokemon = await getPokemonByID(idPokemon)

    res.status(200).json(pokemon)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}


const getPokemonByNameHandler = async(req, res) => {
  const name = req.query.name.toLowerCase()

  try {
    const pokemon = await getPokemonByName(name)
    res.status(200).json(pokemon)

  } catch (error) {
    if(error.code === 'ERR_BAD_REQUEST')
      return res.status(404).json({error: 'El pokemon no fue encontrado'})
    
    res.status(500).json({error: error.message})
  }
}

const createPokemonHandler = async(req, res) => {
  const {name, image, health, attack, defense, speed, height, weight, types} = req.body

  try {
    // debe por lo menos relacionarse con 2 tipos
    if(types.length < 2) throw new Error('El pokemon debe tener al menos 2 tipos')

    
    const newPokemon = await createPokemon(name.toLowerCase(), image, health, attack, defense, speed, height, weight, types)

    res.status(200).json(newPokemon)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}



const deletePokemonHandler = async(req, res) => {
  const {id} = req.params

  try {
    // debe por lo menos relacionarse con 2 tipos
   
    const result = await deletePokemon(id)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}


const testPokemonHandler = async(req, res) => {
  const {id} = req.params

  try {
    // debe por lo menos relacionarse con 2 tipos
   
    const result = await testPokemon(id)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = {
  getAllPokemonsHandler,
  getPokemonByIDHandler,
  getPokemonByNameHandler,
  createPokemonHandler,
  deletePokemonHandler,

  testPokemonHandler
}