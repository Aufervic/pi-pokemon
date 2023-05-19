import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_TYPES = 'GET_TYPES'
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME'
export const FILTER_API_OR_DB = 'FILTER_API_OR_DB'
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE'
export const ORDER = 'ORDER'


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


export const filterPokemonsAPIOrDB = (filter) => {
  return {type: FILTER_API_OR_DB, payload: filter}
}

export const filterPokemonsByType = (type) => {
  return {type: FILTER_BY_TYPE, payload: type}
}

export const orderPokemons = (by) => {
  return {type: ORDER, payload: by}
}