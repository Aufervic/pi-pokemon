// extractores
// reciben un objeto en determinado "formato"
// extraen la información que se requiere
// y le dan el "formato" con el que trabajamos

// extrae HEALTH, ATTACK, DEFENSE Y SPEED de STATS
const _extractPokemonStats = (statsAPI) =>{
  const sts  = {}

  statsAPI.forEach( s => {
    switch(s.stat.name){
      case 'hp':
        sts['health'] = s.base_stat
        break
      case 'attack':
      case 'defense':
      case 'speed':
        sts[s.stat.name] = s.base_stat
        break
    }
  })
  return sts
}

const _extractPokemonTypes = (typesAPI)=>{
  // en la url, los tipos se cuentan desde 1, por eso restamos 1
  let tps  = typesAPI.map( t => {return {id: parseInt(t.type.url.split('/')[6])-1, name: t.type.name}})
  tps = tps.sort((ta, tb) => ta.id - tb.id)

  return tps
}

// devuelve información básica de un pokemon
const extractPokemon = (pokemonAPI) => {// pokemonAPI es el obj de un pokemon que viene de la API
  const {id, name, sprites, types, stats} = pokemonAPI

  const image = sprites.other.dream_world.front_default
  // const image = sprites.other.home.front_default
  // const image = sprites.other['official-artwork'].front_default

  const tps = _extractPokemonTypes(types)

  return {id, name, image, types: tps, attack: stats[1].base_stat}
}


const extractPokemonDetail = (pokemonAPI) => {
  const {id, name, sprites, stats, height, weight, types} = pokemonAPI

  const sts = _extractPokemonStats(stats)

  const image = sprites.other.dream_world.front_default
  // const image = sprites.other.home.front_default // no encaja
  // const image = sprites.other['official-artwork'].front_default

  const tps = _extractPokemonTypes(types)

  return {id, name, image, ...sts, height, weight, types: tps}
}



module.exports = {
  extractPokemon,
  extractPokemonDetail,
  
}