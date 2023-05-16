import {useState} from 'react'
import validate from './validation'

const Form = () => {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: "",
    health: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
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

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log("Nuevo pokemon",pokemonData)
    console.log("Erroes", errors)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="name">Name:</label>
          <input name='name' id="name" type="text" required value={pokemonData.name} onChange={handleChange}/>
          <p>{errors.name}</p>
        </div>

        <div >
          <label htmlFor="image">Image:</label>
          <input name='image' id="image" type="text" required value={pokemonData.image} onChange={handleChange}/>
          <p>{errors.image}</p>
        </div>

        <div >
          <label htmlFor="health">Health:</label>
          <input name='health' id="health" type="number" required value={pokemonData.health} onChange={handleChange}/>
          <p>{errors.health}</p>
        </div>

        <div >
          <label htmlFor="attack">Attack:</label>
          <input name='attack' id="attack" type="number" required value={pokemonData.attack} onChange={handleChange}/>
          <p>{errors.attack}</p>
        </div>

        <div >
          <label htmlFor="defense">Defense:</label>
          <input name='defense' id="defense" type="number" required value={pokemonData.defense} onChange={handleChange}/>
          <p>{errors.defense}</p>
        </div>

        <div >
          <label htmlFor="speed">Speed:</label>
          <input name='speed' id="speed" type="number" required value={pokemonData.speed} onChange={handleChange}/>
          <p>{errors.speed}</p>
        </div>

        <div >
          <label htmlFor="height">Height:</label>
          <input name='height' id="height" type="number" required value={pokemonData.height} onChange={handleChange}/>
          <p>{errors.height}</p>
        </div>

        <div >
          <label htmlFor="weight">Weight:</label>
          <input name='weight' id="weight" type="number" required value={pokemonData.weight} onChange={handleChange}/>
          <p>{errors.weight}</p>
        </div>

        <div >
          <div>
            <label>Types:</label>

          </div>
          <div>
            <input type="checkbox" name='type' id="cbox0" value="0" onChange={handleChange}/>
            <label htmlFor="cbox0">Type 0</label>
          </div>

          <div>
            <input type="checkbox" name='type' id="cbox1" value="1" onChange={handleChange}/>
            <label htmlFor="cbox1">Type 1</label>
          </div>

          <div>
            <input type="checkbox" name='type' id="cbox2" value="2" onChange={handleChange}/>
            <label htmlFor="cbox2">Type 2</label>
          </div>

          <div>
            <input type="checkbox" name='type' id="cbox3" value="3" onChange={handleChange}/>
            <label htmlFor="cbox3">Type 3</label>
          </div>

          
          <p>{errors.types}</p>
        </div>

        <button type="submit">Create Pokemon</button>
      </form>
    </div>
  )
}

export default Form