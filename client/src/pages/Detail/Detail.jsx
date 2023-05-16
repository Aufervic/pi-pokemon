import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Helper from '../../helpers/Helper'

const Detail = () => {
  const {id} = useParams()
  let [pokemon, setPokemon] = useState({})

  useEffect(()=>{
    console.log("Montando detail")
    axios.get(`http://localhost:3001/pokemons/${id}`)
      .then( ({data}) => {
        console.log("Traje el pokemon por id")
        if (data.name) {
          setPokemon(data);
        }
      })
  }, [id])


  if(!pokemon?.name){
    return (
      <div>No hay datos...</div>
    )
  }

  return (
    <div>
      <h3>Detalles del pokemon</h3>
      <p>{pokemon.id}</p>
      <p>{Helper.capitalize(pokemon.name)}</p>
      <img src={pokemon.image} alt={pokemon.name}/>
      <p>{pokemon.health}</p>
      <p>{pokemon.attack}</p>
      <p>{pokemon.defense}</p>
      <p>{pokemon.speed}</p>
      <p>{pokemon.height}</p>
      <p>{pokemon.weight}</p>
    </div>
  )
}

export default Detail