const {
  getAllPokemons,
  getPokemonByID,
  getPokemonByName,
  createPokemon,
  deletePokemon,

  testPokemon
} = require('../controllers/PokemonControllers')

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
    if(!pokemon) throw {myMessage: `'${name}' not found`}
    res.status(200).json(pokemon)

  } catch (error) {
    const {myMessage} = error
    if(!myMessage){
      return res.status(500).json({error: 'something went wrong', code: 0})
    }

    res.status(404).json({error: myMessage, code: 1})
  }
}


const createPokemonHandler = async(req, res) => {
  const {name, image, health, attack, defense, speed, height, weight, types} = req.body

  try {
    const newPokemon = await createPokemon(name.toLowerCase(), image, health, attack, defense, speed, height, weight, types)

    res.status(200).json(newPokemon)
  } catch (error) {
    const {myMessage} = error
    if(!myMessage){
      return res.status(500).json({error: 'something went wrong', code: 0})
    }
    
    // de todas maneras devuelve con 404 aunque le pongas 500
    return res.status(404).json({error: myMessage, code: 1})
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