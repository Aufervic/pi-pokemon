import axios from 'axios'

export const GET_POKEMONS = 'GET_POKEMONS'


export const getPokemons = () => {
  return async (dispatch) =>{
    const {data} = await axios.get('http://localhost:3001/pokemons')
    return dispatch({type: GET_POKEMONS, payload: data})
  }
}


