const createPokemon = (req, res)=>{
  res.status(200).json({message: 'Post: crea un pokemon'})
}

module.exports = createPokemon