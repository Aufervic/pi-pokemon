const { Pokemon, Type } = require('../db')

let id = 10000

const createPokemon = async (req, res)=>{
  try {
    
    const {name, image, health, attack, defense, speed, height, weight, types} = req.body

    // debe por lo menos relacionarse con 2 tipos
    if(types.length < 2) throw new Error('El pokemon debe tener al menos 2 tipos')

    const newPokemon = await Pokemon.create({id, name, image, health, attack, defense, speed, height, weight})
    await newPokemon.addTypes(types)

    const thePokemon = await Pokemon.findByPk(id, {
      include: {
        model: Type,
        //attributes: ['name'],
        through: {
          attributes: [], // nada de la tabla intermedia, cuando tiene los atributos timestamps
        }, 
      }
    })
    if(!thePokemon) throw new Error(`Pokemon con id: ${id} no existe :(`)
    id++

    res.status(200).json(thePokemon)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = createPokemon