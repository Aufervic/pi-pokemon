import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Cards} from '../../components'
import { getPokemons } from '../../redux/actions'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    console.log("montando home")
    dispatch(getPokemons())
  }, [dispatch])

  return (
    <div>
      <h2>HOME</h2>
      <Cards/>
    </div>
  )
}

export default Home