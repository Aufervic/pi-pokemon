import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Cards, FilterBar} from '../../components'
import { getPokemons, getTypes } from '../../redux/actions'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    console.log("montando home")
    dispatch(getPokemons())
    dispatch(getTypes())
    
  }, [dispatch])

  return (
    <div>
      <FilterBar/>
      <Cards/>
    </div>
  )
}

export default Home