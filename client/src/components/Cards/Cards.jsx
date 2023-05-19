import { connect } from "react-redux"
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
            types = {p.types}
          />
        )
      })}
    </div>
  )
}


// export default Cards

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  }
}

export default connect(mapStateToProps, null)(Cards)