require('dotenv').config();
const axios = require('axios')
const Extractors = require('../utils/extractors')
const {API_URL} = process.env;



// trae los 20 primeros
// offset no debe superar al límite

const getAllPokemons = (req, res)=>{
    const {offset} = req.query

    axios.get(`${API_URL}?offset=${offset}&limit=${20}`)
    .then(({data}) => {

      if(!data) throw new Error('No se lograron traer los pokemons')
      const urls = data.results.map(p => axios(p.url))
      return Promise.all(urls)
    })

    .then((responses) => {
      const pokemons = responses.map( r => Extractors.extractPokemon(r.data) )

      res.status(200).json(pokemons)
    })

    .catch((error) =>{
      res.status(500).json({error: error.message})
    })
}


const getAllPokemonsAxios = async (req, res)=>{
  const {offset} = req.query

  try {
    const {data} = await axios.get(`${API_URL}?offset=${offset}&limit=${20}`)
  
    if(!data) throw new Error('No se lograron traer los pokemons')
    
    const urls = data.results.map(p => axios(p.url))


    Promise.all(urls)
    .then((responses) => {
      const pokemons = responses.map( r => Extractors.extractPokemon(r.data) )
      res.status(200).json(pokemons)
    })
    .catch((error) =>{
      throw new Error(error.message)
    })

  } catch (error) {
    res.status(500).json({error: error.message})
  }

}

// Ambos metodos parecen demorar igual
// module.exports = getAllPokemons
module.exports = getAllPokemonsAxios