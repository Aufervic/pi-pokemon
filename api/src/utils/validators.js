const validatePokemon = ({name, image, health, attack, defense, speed, height, weight, types})=>{
  const regexpName = /^[A-Z]+$/i

  // NAME
  if(!name){// *
    return 'El nombre es obligatorio'
  }else if(name.indexOf(' ')>=0){
    return 'El nombre no debe contener espacios'
  }else if(!regexpName.test(name)){// FALTA, caracteres especiales
    return 'El nombre no debe contener caracteres especiales ni números'
  }else if(name.length > 11){
    return'El nombre supera los 11 caracteres'
  }

  // IMAGE
  if(!image){// *
    return 'Ingrese url de imagen'
  }


  // HEALTH
  if(health === ''){// *
    return 'La Vida es obligatoria'
  }else if(isNaN(health)){
    return 'La Vida debe ser un número'
  }else if(health <= 0){
    return 'La Vida debe ser mayor a cero'
  }else if(health > 255){
    return 'La Vida debe ser menor a 255  (blissey)'
  }

  // ATTACK
  if(attack === ''){// *
    return 'El Ataque es obligatorio'
  }else if(isNaN(attack)){
    return 'El Ataque debe ser un número'
  }else if(attack <= 0){
    return 'El Ataque debe ser mayor a cero'
  }else if(attack > 181){
    return 'El Ataque debe ser menor a 181 (kartana)'
  }

  // DEFENSE
  if(defense === ''){// *
    return 'La Defenza es obligatoria'
  }else 
  if(isNaN(defense)){
    return 'La Defenza debe ser un número'
  }else if(defense <= 0){
    return 'La Defenza debe ser mayor a cero'
  }else if(defense > 230){
    return 'La Defenza debe ser menor a 230 (shuckle)'
  }


  // SPEED
  if(isNaN(speed)){
    return 'La Velocidad debe ser un número'
  }else if(speed < 0){
    return 'La Velocidad no puede ser negativa'
  }else if(speed > 200){
    return 'La Velocidad debe ser menor a 200 (regieleki)'
  }

  // HEIGHT
  if(isNaN(height)){
    return 'La Altura debe ser un número'
  }else if(height < 0){
    return 'La Altura no puede ser negativa'
  }else if(height > 145){
    return 'La Altura debe ser menor a 145 (wailord)'
  }

  // WEIGHT
  if(isNaN(weight)){
    return 'El Peso debe ser un número'
  }else  if(weight < 0){
    return 'El Peso no puede ser negativa'
  }else if(weight > 9999){
    return 'El Peso debe ser menor a 9 999 (cosmoem)'
  }

  // TYPES
  if(types.length < 2){
     return 'Debes seleccionar 2 tipos como mínimo'
  }
  

  return null
}

module.exports = {
  validatePokemon,
}