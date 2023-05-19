import { GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES } from "./actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case GET_TYPES:
      return { ...state, types: action.payload };
    
    // filters
    case GET_POKEMON_BY_NAME:
      return { ...state, pokemons: [action.payload] };

    default:
      return state;
  }
};

export default reducer;
