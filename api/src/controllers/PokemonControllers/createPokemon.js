require('dotenv').config();
const {Pokemon, Type} = require('../../db')
const axios = require('axios')
const Extractors = require('../../utils/extractors');
const getPokemonByName = require('./getPokemonByName');
const {validatePokemon} = require('../../utils/validators')

const {API_URL} = process.env;

const previousValidations = async ({name, image, health, attack, defense, speed, height, weight, types}) => {
 
  if(!types || types.length < 2) throw  {myMessage: 'you must send at least two types.'}
  
  const findTypes = await Type.findAll({where: {id: types}})
  if(!findTypes.length || findTypes.length < types.length ) throw {myMessage: 'no matches found for types.'}
  
  const errs = validatePokemon({name, image, health, attack, defense, speed, height, weight, types})
  if(errs) throw  {myMessage: errs}
  if(name.length > 11) throw  {myMessage: 'the name must not exceed 11 characters.'}
  if(!name) throw  {myMessage: 'the name must have at least one letter.'}

  const existName = await  getPokemonByName(name)
  if(existName) throw {myMessage: 'there is a pokemon with that name.'}
}


const createPokemon = async (name, image, health, attack, defense, speed, height, weight, types)=>{
  await previousValidations({name, image, health, attack, defense, speed, height, weight, types})

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