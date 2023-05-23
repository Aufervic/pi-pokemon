import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_TYPES = 'GET_TYPES'
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME'
export const FILTERS = 'FILTERS'


export const getPokemons = () => {
  return async (dispatch) =>{
    const {data} = await axios.get('http://localhost:3001/pokemons')
    return dispatch({type: GET_POKEMONS, payload: data})
  }
}

export const getTypes = () => {
  return async (dispatch) =>{
    const {data} = await axios.get('http://localhost:3001/types')
    return dispatch({type: GET_TYPES, payload: data})
  }
}

export const getPokemonByName = (name) => {
  return async (dispatch) =>{
    const {data} = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`)
    return dispatch({type: GET_POKEMON_BY_NAME, payload: data})
  }
}


export const filterData=(filters)=>{
  return {type: FILTERS, payload: filters}
}
