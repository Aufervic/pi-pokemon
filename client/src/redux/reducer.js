import {GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES, FILTER_API_OR_DB, FILTER_BY_TYPE, ORDER } from "./actions";

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
    
    case GET_POKEMON_BY_NAME:
      return { ...state, pokemons: [action.payload] };

    // filters
    case FILTER_API_OR_DB:
      switch(action.payload){
        case 'db':
          return {
            ...state,
            pokemons: state.allPokemons.filter(p => p.createdInDB)
          }
        case 'api':
          return {
            ...state,
            pokemons: state.allPokemons.filter(p => !p.createdInDB)
          }
        default: return {
          ...state,
          pokemons: state.allPokemons
        }

      }
    case FILTER_BY_TYPE:
      console.log("Filter by type:", action.payload)
      if(action.payload === 'default') return { ...state, pokemons: state.allPokemons}
      // por el momento un solo type
      return{
        ...state,
        pokemons: state.allPokemons.filter(p => {
          const tps = p.types.filter( t => t.name=== action.payload)
          return tps.length
        })
      }
    case ORDER:
      console.log("Order by:", action.payload)
      let allPokes = [...state.allPokemons]
      switch (action.payload){
        case 'ascName': return {
          ...state,
          pokemons: allPokes.sort(( poke1, poke2) => {
            if(poke1.name<poke2.name) return -1
            if(poke1.name>poke2.name) return 1
            return 0
          })
        }
        case 'desName': return {
          ...state,
          pokemons: allPokes.sort(( poke1, poke2) => {
            if(poke1.name>poke2.name) return -1
            if(poke1.name<poke2.name) return 1
            return 0
          })
        }
        case 'ascAttack': return {
          ...state,
          pokemons: allPokes.sort(( poke1, poke2) => poke1.attack - poke2.attack)
        }
        case 'desAttack': return {
          ...state,
          pokemons: allPokes.sort(( poke1, poke2) => poke2.attack - poke1.attack)
        }
        default: return {
          ...state,
          pokemons: allPokes
        }
      }
    
    default:
      return state
  }
};

export default reducer;
