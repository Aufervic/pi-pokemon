import {useSelector} from 'react-redux'
import Card from '../Card/Card'
import style  from './Cards.module.css'

const Cards = () => {
  const pokemons = useSelector(state => state.allPokemons)
  // const pokemons = []
  return (
    <div className= {style.Cards}>
      {pokemons.map(p => {
        return (
          <Card key = {p.id}
            id = {p.id}
            name = {p.name}
            image = {p.image}
            types = {p.types}
          />
        )
      })}
    </div>
  )
}


export default Cards