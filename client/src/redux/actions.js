import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_TYPES = 'GET_TYPES'


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