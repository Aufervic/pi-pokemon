const getAllPokemons = (req, res)=>{
  res.status(200).json({message: 'Get: arreglo de pokemons'})
}

module.exports = getAllPokemons