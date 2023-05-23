export default function validate(pokemonData, errImage) {
  // const regesImageURL = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
  // const regesImageURL = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/
  const regexpName = /^[A-Z]+$/i
  
  let errors = {}

  // NAME
  if(!pokemonData.name){// *
    errors.name = 'name cannot be null'
  }else if(pokemonData.name.indexOf(' ')>=0){
    errors.name = 'The name must not contain spaces'
  }else if(!regexpName.test(pokemonData.name)){// FALTA, caracteres especiales
    errors.name = 'the name must not contain special characters or numbers'
  }else if(pokemonData.name.length > 11){
    errors.name = 'the name exceeds 11 characters'
  }

  // IMAGE
  if(errImage){
    errors.image = errImage
  }else if(!pokemonData.image){// *
    errors.image = 'image url cannot be null'
  }// Tambien se valida en el form


  // HEALTH
  if(pokemonData.health === ''){// *
    errors.health = 'you must enter a value for health'
  }else if(isNaN(pokemonData.health)){
    errors.health = 'health should be a number'
  }else if(pokemonData.health <= 0){
    errors.health = 'health must be greater than zero'
  }else if(pokemonData.health > 255){
    errors.health = 'health should be less than 255  (blissey)'
  }

  // ATTACK
  if(pokemonData.attack === ''){// *
    errors.attack = 'you must enter a value for attack'
  }else if(isNaN(pokemonData.attack)){
    errors.attack = 'attack should be a number'
  }else if(pokemonData.attack <= 0){
    errors.attack = 'attack must be greater than zero'
  }else if(pokemonData.attack > 181){
    errors.attack = 'attack should be less than 181 (kartana)'
  }

  // DEFENSE
  if(pokemonData.defense === ''){// *
    errors.defense = 'you must enter a value for defense'
  }else 
  if(isNaN(pokemonData.defense)){
    errors.defense = 'defense should be a number'
  }else if(pokemonData.defense <= 0){
    errors.defense = 'defense must be greater than zero'
  }else if(pokemonData.defense > 230){
    errors.defense = 'defense should be less than 230 (shuckle)'
  }


  // SPEED
  if(isNaN(pokemonData.speed)){
    errors.speed = 'speed should be a number'
  }else if(pokemonData.speed < 0){
    errors.speed = 'speed cannot be negative'
  }else if(pokemonData.speed > 200){
    errors.speed = 'speed must be less than 200 (regieleki)'
  }

  // HEIGHT
  if(isNaN(pokemonData.height)){
    errors.height = 'height should be a number'
  }else if(pokemonData.height < 0){
    errors.height = 'height cannot be negative'
  }else if(pokemonData.height > 145){
    errors.height = 'height must be less than 145 (wailord)'
  }

  // WEIGHT
  if(isNaN(pokemonData.weight)){
    errors.weight = 'weight should be a number'
  }else  if(pokemonData.weight < 0){
    errors.weight = 'weight cannot be negative'
  }else if(pokemonData.weight > 9999){
    errors.weight = 'weight must be less than 9 999 (cosmoem)'
  }

  // TYPES
  if(pokemonData.types.length < 2){
     errors.types = 'you must select at least 2 types'
  }
  

  return errors
}