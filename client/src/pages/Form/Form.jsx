import {useState} from 'react'
import { useSelector } from 'react-redux'
import validate from './validation'
import style from './Form.module.css'
import Helper from '../../helpers/Helper'

const Form = () => {
  const types = useSelector(state => state.types)

  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: "",
    health: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [0, 1],
  })

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    let prop = ''
    let value = ''
    switch(event.target.name){
      case 'type':
        prop = 'types'
        value = event.target.checked
          ? [...pokemonData.types, parseInt(event.target.value)]
          : pokemonData.types.filter( i => i !== parseInt(event.target.value))
        break
      case 'health': case 'attack': case 'defense':
      case 'speed': case 'height': case 'weight':
        prop = event.target.name
        value = parseInt(event.target.value)
        break
      default:
        prop = event.target.name
        value = event.target.value
    }

    setPokemonData({
      ...pokemonData,
      [prop]: value
    })

    setErrors(validate({
      ...pokemonData,
      [prop]: value
    }))
    
  }

  const handleClick = (event) => {
    const id = parseInt(event.target.id)
    setPokemonData({
      ...pokemonData,
      types: pokemonData.types.includes(id)? pokemonData.types.filter(i => i !== id): [...pokemonData.types, id]
    })
    
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    pokemonData.name = pokemonData.name.toLowerCase()
    console.log("Nuevo pokemon",pokemonData)
    console.log("Errores", errors)
  }

  return (
    <div className={style.bg}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2>Create your pokemon</h2>
        <div className={style.property}>
          <label htmlFor="name">Name:</label>
          <input name='name' id="name" type="text" autoComplete="off" required value={pokemonData.name} onChange={handleChange}/>
          <p>{errors.name}</p>
        </div>

        <div className={style.property}>
          <label htmlFor="image">Image:</label>
          <input name='image' id="image" type="text" autoComplete="off" required value={pokemonData.image} onChange={handleChange}/>
          <p>{errors.image}</p>
        </div>

        <div className={style.property}>
          <label htmlFor="health">Health:</label>
          <input name='health' id="health" type="number" required value={pokemonData.health} onChange={handleChange}/>
          <p>{errors.health}</p>
        </div>

        <div className={style.property}>
          <label htmlFor="attack">Attack:</label>
          <input name='attack' id="attack" type="number" required value={pokemonData.attack} onChange={handleChange}/>
          <p>{errors.attack}</p>
        </div>

        <div className={style.property}>
          <label htmlFor="defense">Defense:</label>
          <input name='defense' id="defense" type="number" required value={pokemonData.defense} onChange={handleChange}/>
          <p>{errors.defense}</p>
        </div>

        <div className={style.property}>
          <label htmlFor="speed">Speed:</label>
          <input name='speed' id="speed" type="number" required value={pokemonData.speed} onChange={handleChange}/>
          <p>{errors.speed}</p>
        </div>

        <div className={style.property}>
          <label htmlFor="height">Height:</label>
          <input name='height' id="height" type="number" required value={pokemonData.height} onChange={handleChange}/>
          <p>{errors.height}</p>
        </div>

        <div className={style.property}>
          <label htmlFor="weight">Weight:</label>
          <input name='weight' id="weight" type="number" required value={pokemonData.weight} onChange={handleChange}/>
          <p>{errors.weight}</p>
        </div>

        <div >
          <p className={style.typesTitle}>Select Types:</p>
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
        </div>

        <button type="submit" id={style.btn}>Create Pokemon</button>
      </form>
    </div>
  )
}

export default Form