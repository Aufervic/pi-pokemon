import {GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES, FILTERS, FILTER_BY_NAME } from "./actions";

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
    case FILTERS:
      let filteredPokemons = getDataByOrigin(action.payload.origin, [...state.allPokemons])
      filteredPokemons = getDataByType(action.payload.type, filteredPokemons)
      filteredPokemons = getOrderDataBy(action.payload.order, filteredPokemons)
      return {
        ...state,
        pokemons: filteredPokemons
      }

    case FILTER_BY_NAME:
      if(!action.payload){
        return {
          ...state,
          pokemons: [...state.allPokemons]
        }
      }
      let pokemonsToFilter = state.pokemons.length? state.pokemons: state.allPokemons
      
      return {
        ...state,
        pokemons: pokemonsToFilter.filter( p => p.name.includes(action.payload))
      }

    default:
      return state
  }
};

const getDataByOrigin = (origin, pokes)=>{
  switch(origin){
    case 'db': return pokes.filter(p => p.createdInDB)
    case 'api': return pokes.filter(p => !p.createdInDB)
    default: return pokes
  }
}

const getDataByType = (type, pokes)=>{
  if(type === 'default') return pokes

  // por el momento un solo type
  return pokes.filter(p => {
      const tps = p.types.filter( t => t.name=== type)
      return tps.length
    })
}

const getOrderDataBy = (order, pokes)=>{
  switch (order){
    case 'ascName': return pokes.sort(( poke1, poke2) => {
        if(poke1.name<poke2.name) return -1
        if(poke1.name>poke2.name) return 1
        return 0
      })

    case 'desName': return pokes.sort(( poke1, poke2) => {
        if(poke1.name>poke2.name) return -1
        if(poke1.name<poke2.name) return 1
        return 0
      })

    case 'ascAttack': return pokes.sort(( poke1, poke2) => poke1.attack - poke2.attack)
    case 'desAttack': return pokes.sort(( poke1, poke2) => poke2.attack - poke1.attack)
    default: return pokes
  }
}


export default reducer;
