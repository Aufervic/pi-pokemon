require('dotenv').config()
const axios = require('axios')

const {API_URL_TYPE} = process.env

const getAllTypes = async (req, res)=>{

  try {
    const {data} = await axios.get(API_URL_TYPE)

    if(!data) throw new Error('No se encontraron tipos de pokemon')
    const type = data.results.map(({name}, id) => { return {id, name} })

    res.status(200).json(type)

  } catch (error) {
    
    res.status(500).json({error: error.message})
  }
}

module.exports = getAllTypes