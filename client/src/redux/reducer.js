import { GET_POKEMONS, GET_TYPES } from "./actions";

const initialState = {
  allPokemons: [],
  types: [],
}

const reducer = (state= initialState, action) => {
  switch(action.type){
    case GET_POKEMONS:
      return {...state, allPokemons: action.payload}
    case GET_TYPES:
      return {...state, types: action.payload}
   
    default:
      return state
  }
}


export default reducer