// extractores
// reciben un objeto en determinado "formato"
// extraen la información que se requiere
// y le dan el "formato" con el que trabajamos

// extrae HEALTH, ATTACK, DEFENSE Y SPEED de STATS
const _extractPokemonStats = (stats) =>{
  const sts  = {}

  stats.forEach( s => {
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

// devuelve información básica de un pokemon
const extractPokemon = (data) => {// data es el obj de un pokemon que viene de la API
  const {id, name, sprites} = data

  const image = sprites.other.dream_world.front_default

  

  return {id, name, image}
}


const extractPokemonDetail = (data) => {
  const {id, name, sprites, stats, height, weight, types} = data

  const sts = _extractPokemonStats(stats)

  const image = sprites.other.dream_world.front_default

  let tps = types.map( t => {return {id: parseInt(t.type.url.split('/')[6]), name: t.type.name}})
  tps = tps.sort((ta, tb) => ta.id - tb.id)

  return {id, name, image, ...sts, height, weight, types: tps}
}



module.exports = {
  extractPokemon,
  extractPokemonDetail,
  
}