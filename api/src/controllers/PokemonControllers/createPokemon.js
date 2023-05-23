require('dotenv').config();
const {Pokemon, Type} = require('../../db')
const axios = require('axios')
const Extractors = require('../../utils/extractors')

const {API_URL} = process.env;

const createPokemon = async (name, image, health, attack, defense, speed, height, weight, types)=>{
  // verificar si existen los types, antes de crear el pokemon
  console.log(types);
  types.sort((a, b) => a-b)
  const newPokemon = await Pokemon.create({name, image, health, attack, defense, speed, height, weight})
  await newPokemon.addTypes(types)
  
  const thePokemon = await Pokemon.findByPk(newPokemon.id, {
    include: {
      model: Type,
      //attributes: ['name'],
      through: {
        attributes: [], // nada de la tabla intermedia, cuando tiene los atributos timestamps
      }, 
    }
  })
  if(!thePokemon) throw new Error(`Pokemon con id: ${newPokemon.id} no existe :(`)
  

  return thePokemon
}


module.exports = createPokemon