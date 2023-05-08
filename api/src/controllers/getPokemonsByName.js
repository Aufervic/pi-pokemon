const getPokemonsByName = (req, res)=>{
  res.status(200).json({message: 'Get: array de pokes por nombre'})
}

module.exports = getPokemonsByName