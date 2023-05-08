const getPokemonsByID = (req, res)=>{
  res.status(200).json({message: 'Get: detalle del poke por id'})
}

module.exports = getPokemonsByID