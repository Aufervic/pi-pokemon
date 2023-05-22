import {useState} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import validate from './validation'
import style from './Form.module.css'
import Helper from '../../helpers/Helper'
import PokemonDefaultImage from '../../assets/whos-that-pokemon.png'
import {Modal} from '../../components'


const Form = () => {
  const types = useSelector(state => state.types)

  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: "",
    health: 1,
    attack: 1,
    defense: 1,
    speed: 0,
    height: 0,
    weight: 0,
    types: [0, 1],
  })

  const [errors, setErrors] = useState({})

  const clearPokemonDataState = () => {
    setPokemonData({
      name: "",
      image: "",
      health: 1,
      attack: 1,
      defense: 1,
      speed: 0,
      height: 0,
      weight: 0,
      types: [0, 1],
    })
  }

  const updateStates = (prop, value) => {
    setPokemonData({
      ...pokemonData,
      [prop]: value
    })
    setErrors(validate({
      ...pokemonData,
      [prop]: value
    }, errors.image))
  }

  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type:'fail',
    title: 'Oops!',
    message: 'No deberías ver este mensaje si todo va bien'
  })


  const updateModal = (isOpen, type='', title='', message='') => {
    setModalConfig({isOpen, type, title, message})
  }

  const handleChange = (event) => {
    let prop = ''
    let value = ''
    switch(event.target.name){
      case 'type':// ya no lo uso
        console.log("Cambio el tipo")
        prop = 'types'
        value = event.target.checked
          ? [...pokemonData.types, parseInt(event.target.value)]
          : pokemonData.types.filter( i => i !== parseInt(event.target.value))
        break
      case 'health': case 'attack': case 'defense':
      case 'speed': case 'height': case 'weight':
        prop = event.target.name
        value = event.target.value
        value = value!==''?parseInt(value):value
        break
      default:
        prop = event.target.name
        value = event.target.value
    }

    updateStates(prop, value)
  }

  const validateImg = (isOk)=>{

    if(!isOk){
      setErrors({
        ...errors,
        image: 'Ingrese una url de imagen válida'
      })
    }else if(pokemonData.name){
      setErrors({
        ...errors,
        image: ''
      })
    }
  }



  const handleClick = (event) => {
    const id = parseInt(event.target.id)
    const tempTypes = pokemonData.types.includes(id)? pokemonData.types.filter(i => i !== id): [...pokemonData.types, id]
    
    updateStates('types', tempTypes)
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    if(Object.keys(errors).length) {
      console.log("NO PODRAS CREAR PORQUE TIENES ERRORES", errors)
      updateModal(true, 'alert', 'Oops!', 'No se puede crear Pokemon, ingresa bien los datos')
      return;
    }
    
    pokemonData.name = pokemonData.name.toLowerCase()
    pokemonData.types.sort((a, b) => a-b)
    pokemonData.speed = pokemonData.speed===''?null: pokemonData.speed
    pokemonData.height = pokemonData.height===''?null: pokemonData.height
    pokemonData.weight = pokemonData.weight===''?null: pokemonData.weight
    console.log("PokemonData", pokemonData)

    axios.post('http://localhost:3001/pokemons', pokemonData)
    .then(res => {
      console.log("creado", res.data)
      clearPokemonDataState()
      updateModal(true, 'success', 'Great!', 'Pokemon creado con éxito')
    })
    .catch(err => {
      updateModal(true, 'fail', 'Oops!', 'No se pudo crear el pokemon')
    })

  }

  return (
    <div className={style.bg}>
      
      <form onSubmit={handleSubmit} className={style.form}>
        <h2>Create your pokemon</h2>

        <div className={style.propertyContainer}>
          <div className={style.property}>
          {/* <label htmlFor="name"></label> */}
          <img src  ={pokemonData.image?pokemonData.image:PokemonDefaultImage} alt='PokeImage' onLoad={()=>validateImg(true)} onError={()=>validateImg(false)}/>
            </div>
        </div>
        <div className={style.propertyContainer}>
          <div className={style.property}>
            <label htmlFor="name">Name*:</label>
            <input name='name' id="name" type="text" autoComplete="off" required value={pokemonData.name} onChange={handleChange}/>
          </div>
          <p className={style.propertyError}>{errors.name}</p>
        </div>
        
        
        <div className={style.propertyContainer}>
          <div className={style.property}>
            <label htmlFor="image">Image*:</label>
            <input name='image' id="image" type="text" autoComplete="off" required value={pokemonData.image} onChange={handleChange}/>
          </div>
          <p className={style.propertyError}>{errors.image}</p>
        </div>
        
        <div className={style.propertyContainer}>
          <div className={style.property}>
            <label htmlFor="health">Health*:</label>
            <input name='health' id="health" type="number" required value={pokemonData.health} onChange={handleChange}/>
          </div>
          <p className={style.propertyError}>{errors.health}</p>
        </div>

        <div className={style.propertyContainer}>
          <div className={style.property}>
            <label htmlFor="attack">Attack*:</label>
            <input name='attack' id="attack" type="number" required value={pokemonData.attack} onChange={handleChange}/>
          </div>
          <p className={style.propertyError}>{errors.attack}</p>
        </div>

        <div className={style.propertyContainer}>
          <div className={style.property}>
            <label htmlFor="defense">Defense*:</label>
            <input name='defense' id="defense" type="number" required value={pokemonData.defense} onChange={handleChange}/>
          </div>
          <p className={style.propertyError}>{errors.defense}</p>
        </div>

        <div className={style.propertyContainer}>
          <div className={style.property}>
            <label htmlFor="speed">Speed:</label>
            <input name='speed' id="speed" type="number" value={pokemonData.speed} onChange={handleChange}/>
          </div>
          <p className={style.propertyError}>{errors.speed}</p>
        </div>

        <div className={style.propertyContainer}>
          <div className={style.property}>
            <label htmlFor="height">Height:</label>
            <input name='height' id="height" type="number" value={pokemonData.height} onChange={handleChange}/>
          </div>
          <p className={style.propertyError}>{errors.height}</p>
        </div>

        <div className={style.propertyContainer}>
          <div className={style.property}>
            <label htmlFor="weight">Weight:</label>
            <input name='weight' id="weight" type="number" value={pokemonData.weight} onChange={handleChange}/>
          </div>
          <p className={style.propertyError}>{errors.weight}</p>
        </div>

        <div >
          <p className={style.typesTitle}>Select Types:</p>
          <p className={style.propertyError}>{errors.types}</p>
          <div className={style.typesContent}>
            {types.map((t) => {
              return (
                <div className={style.typeItem} key={t.id} >
                  <img
                    src={Helper.getImgType(t.id)}
                    alt={t.name}
                    title={Helper.capitalize(t.name)}
                    id={t.id}
                    onClick={handleClick}

                    className={pokemonData.types.includes(t.id)?style.imgSelected:style.imgUnselected}
                  />
                  <p>{Helper.capitalize(t.name)}</p>
                </div>
              );
            })}
          </div>
          <p className={style.propertyError}>{errors.types}</p>
        </div>

        <button type="submit" className={style.btn}>Create Pokemon</button>
      </form>
      <Modal modalConfig={modalConfig} onClose={()=>{updateModal(false)}}/>
    </div>
  )
}

export default Form