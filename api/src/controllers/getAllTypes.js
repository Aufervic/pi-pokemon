const getAllTypes = (req, res)=>{
  res.status(200).json({message: 'Get: arreglo de todos los tipos'})
}

module.exports = getAllTypes