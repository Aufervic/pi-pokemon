export default function validate(pokemonData) {
  // const regesImageURL = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
  // const regesImageURL = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/
  const regexpName = /^[A-Z]+$/i
  
  let errors = {}

  // NAME
  if(!pokemonData.name){// *
    errors.name = 'El nombre es obligatorio'
  }else if(pokemonData.name.indexOf(' ')>=0){
    errors.name = 'El nombre no debe contener espacios'
  }else if(!regexpName.test(pokemonData.name)){// FALTA, caracteres especiales
    errors.name = 'El nombre no debe contener caracteres especiales ni números'
  }else if(pokemonData.name.length > 11){
    errors.name = 'El nombre supera los 11 caracteres'
  }

  // IMAGE
  if(!pokemonData.image){// *
    errors.image = 'Ingrese url de imagen'
  }// Tambien se valida en el form


  // HEALTH
  if(pokemonData.health === ''){// *
    errors.health = 'La Vida es obligatoria'
  }else if(isNaN(pokemonData.health)){
    errors.health = 'La Vida debe ser un número'
  }else if(pokemonData.health <= 0){
    errors.health = 'La Vida debe ser mayor a cero'
  }else if(pokemonData.health > 255){
    errors.health = 'La Vida debe ser menor a 255  (blissey)'
  }

  // ATTACK
  if(pokemonData.attack === ''){// *
    errors.attack = 'El Ataque es obligatorio'
  }else if(isNaN(pokemonData.attack)){
    errors.attack = 'El Ataque debe ser un número'
  }else if(pokemonData.attack <= 0){
    errors.attack = 'El Ataque debe ser mayor a cero'
  }else if(pokemonData.attack > 181){
    errors.attack = 'El Ataque debe ser menor a 181 (kartana)'
  }

  // DEFENSE
  if(pokemonData.defense === ''){// *
    errors.defense = 'La Defenza es obligatoria'
  }else 
  if(isNaN(pokemonData.defense)){
    errors.defense = 'La Defenza debe ser un número'
  }else if(pokemonData.defense <= 0){
    errors.defense = 'La Defenza debe ser mayor a cero'
  }else if(pokemonData.defense > 230){
    errors.defense = 'La Defenza debe ser menor a 230 (shuckle)'
  }


  // SPEED
  if(isNaN(pokemonData.speed)){
    errors.speed = 'La Velocidad debe ser un número'
  }else if(pokemonData.speed < 0){
    errors.speed = 'La Velocidad no puede ser negativa'
  }else if(pokemonData.speed > 200){
    errors.speed = 'La Velocidad debe ser menor a 200 (regieleki)'
  }

  // HEIGHT
  if(isNaN(pokemonData.height)){
    errors.height = 'La Altura debe ser un número'
  }else if(pokemonData.height < 0){
    errors.height = 'La Altura no puede ser negativa'
  }else if(pokemonData.height > 145){
    errors.height = 'La Altura debe ser menor a 145 (wailord)'
  }

  // WEIGHT
  if(isNaN(pokemonData.weight)){
    errors.weight = 'El Peso debe ser un número'
  }else  if(pokemonData.weight < 0){
    errors.weight = 'El Peso no puede ser negativa'
  }else if(pokemonData.weight > 9999){
    errors.weight = 'El Peso debe ser menor a 9 999 (cosmoem)'
  }

  // TYPES
  if(pokemonData.types.length < 2){
     errors.types = 'Debes seleccionar 2 tipos como mínimo'
  }
  
  return errors
}