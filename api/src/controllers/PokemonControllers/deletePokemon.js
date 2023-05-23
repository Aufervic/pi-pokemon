require('dotenv').config();
const axios = require('axios')
const {Pokemon, Type} = require('../../db')
const Extractors = require('../../utils/extractors')

const {API_URL} = process.env;


const deletePokemon = async (id)=>{
  console.log("ELIMINANDO")
  const newPokemon = await Pokemon.destroy({where: {id}})

  return {message: "POKEMONSE ELIMINADO"}
}


module.exports =  deletePokemon