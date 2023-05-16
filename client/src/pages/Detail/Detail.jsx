import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Helper from '../../helpers/Helper'
import style from './Detail.module.css'

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
  let bandera = true
  if(bandera){

    const objStyle1= {
      backgroundColor: '#26de81',
    }
    const objStyle2= {
      backgroundColor: '#ffeaa7',
    }
    const somePic = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    const cardStyle= {
      //background:  `linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%), url(${somePic})`
      background: `radial-gradient(circle at 50% 0%, orange 36%, #ffffff 36%)`
    }
    return (
      <div className={style.container}>
        <div id={style.card} style={cardStyle}>

          <p className={style.hp}>
            <span>HP</span>
              50
          </p>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
          <h2 className={style.pokeName}>Bolbasaur</h2>
          <div className={style.types}>
            <span style={objStyle1}>grass</span>
            <span style={objStyle2}>poison</span>
          </div>
          <div className={style.stats}>
            <div>
              <h3>10</h3>
              <p>Attack</p>
            </div>
            <div>
              <h3>20</h3>
              <p>Defense</p>
            </div>
            <div>
              <h3>30</h3>
              <p>Speed</p>
            </div>
          </div>
          <button id={style.btn}>Generate</button>
        </div>
      </div>
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