

const validatePokemon = ({name, image, health, attack, defense, speed, height, weight, types})=>{
  const regexpName = /^[A-Z]+$/i

  // NAME
  if(!name){// *
    return 'name cannot be null'
  }else if(name.indexOf(' ')>=0){
    return 'the name must not contain spaces'
  }else if(!regexpName.test(name)){// FALTA, caracteres especiales
    return 'the name must not contain special characters or numbers'
  }else if(name.length > 11){
    return'the name exceeds 11 characters'
  }

  // IMAGE
  if(!image){// *
    return 'image url cannot be null'
  }


  // HEALTH
  if(health === ''){// *
    return 'you must enter a value for health'
  }else if(isNaN(health)){
    return 'health should be a number'
  }else if(health <= 0){
    return 'health must be greater than zero'
  }else if(health > 255){
    return 'health should be less than 255  (blissey)'
  }

  // ATTACK
  if(attack === ''){// *
    return 'you must enter a value for attack'
  }else if(isNaN(attack)){
    return 'attack should be a number'
  }else if(attack <= 0){
    return 'attack must be greater than zero'
  }else if(attack > 181){
    return 'attack should be less than 181 (kartana)'
  }

  // DEFENSE
  if(defense === ''){// *
    return 'you must enter a value for defense'
  }else 
  if(isNaN(defense)){
    return 'defense should be a number'
  }else if(defense <= 0){
    return 'defense must be greater than zero'
  }else if(defense > 230){
    return 'defense should be less than 230 (shuckle)'
  }


  // SPEED
  if(isNaN(speed)){
    return 'speed should be a number'
  }else if(speed < 0){
    return 'speed cannot be negative'
  }else if(speed > 200){
    return 'speed must be less than 200 (regieleki)'
  }

  // HEIGHT
  if(isNaN(height)){
    return 'height should be a number'
  }else if(height < 0){
    return 'height cannot be negative'
  }else if(height > 145){
    return 'height must be less than 145 (wailord)'
  }

  // WEIGHT
  if(isNaN(weight)){
    return 'weight should be a number'
  }else  if(weight < 0){
    return 'weight cannot be negative'
  }else if(weight > 9999){
    return 'weight must be less than 9 999 (cosmoem)'
  }

  // TYPES
  if(types.length < 2){
     return 'you must select at least 2 types'
  }
  

  return null
}

module.exports = {
  validatePokemon,
}