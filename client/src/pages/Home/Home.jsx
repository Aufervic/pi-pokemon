import { useState } from 'react'
import { connect } from 'react-redux'
import {Cards, FilterBar, Paginator} from '../../components'


const Home = ({pokemons}) => {
  
  // paginator
  const [page, setPage] = useState(1)
  // const [perPage, setPerPage] = useState(2) // datos por página
  const perPage = 2
  const pages = Math.ceil(pokemons.length / perPage) // si sale con decimal contar una página más
 
  

  return (
    <div>
      <FilterBar/>
      <Paginator page={page} setPage={setPage} pages={pages} perPage={perPage} total={pokemons.length}/>
      <Cards pokemons={pokemons.slice((page-1)*perPage, (page-1)*perPage +perPage)}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  }
}

export default connect(mapStateToProps, null)(Home)