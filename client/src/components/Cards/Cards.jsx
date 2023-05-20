import Card from '../Card/Card'
import style  from './Cards.module.css'

const Cards = ({pokemons}) => {
  
  return (
    <div className= {style.Cards}>
      {pokemons.map((p, i) => {
        return (
          <Card key = {i}
            id = {p.id}
            name = {p.name}
            image = {p.image}
            attack= {p.attack}
            types = {p.types}
          />
        )
      })}
    </div>
  )
}


export default Cards

