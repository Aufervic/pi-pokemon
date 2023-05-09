require('dotenv').config()
const axios = require('axios')
const {Type} = require('../db')

const {API_URL_TYPE} = process.env


const _getAllTypesOfAPI = async () => {
  const {data} = await axios.get(API_URL_TYPE)
  if(!data) throw new Error('No se encontraron tipos de pokemon')
  return data.results.map(({name}, id) => { return {id, name} })
}

const getAllTypes = async (req, res)=>{

  try {
    // busca en la base de datos
    let types = await Type.findAll()
    
    if(types.length) return res.status(200).json(types)

    // busca en la api
    types = await _getAllTypesOfAPI()

    // guardar en la base de datos
    types = await Type.bulkCreate(types)

    res.status(201).json(types)

  } catch (error) {
    
    res.status(500).json({error: error.message})
  }
}

module.exports = getAllTypes