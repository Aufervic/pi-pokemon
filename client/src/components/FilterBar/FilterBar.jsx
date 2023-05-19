import { useState } from "react"
import {useDispatch} from 'react-redux'
import { getPokemonByName } from "../../redux/actions"

const FilterBar = () => {
  let [name, setName] = useState('')
  const dispatch = useDispatch()

   const handleChangeSearch = (event) => {
      setName(event.target.value)
   }

   const onSearch = (_name) => {
    dispatch(getPokemonByName(_name.toLowerCase()))
  }

   // en fav
   const handleOrder = (event) => {
    // dispatch(orderCards(event.target.value))
    // setAux(!aux)
  }

  const handleFilter = (event) => {
    // dispatch(filterCards(event.target.value))
  }
  


  return (
    <div>
      {/* Search Bar */}
      <div>
         <input type='search' onChange={handleChangeSearch} value={name}/>
         <button onClick={()=>onSearch(name)}>Search</button>
      </div>
      <div>
      

      {/* Filtrar por tipo */}
      {/* Filtrar por origen API/BD */}
      {/* Ordenar Ascendente/Descendente por orden alfabético y por ataque*/}
      <select name="order" id="1" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select name="filter" id="2" onChange={handleFilter}>
        <option value="all">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>

      </select>
      </div>
    </div>
  )
}


export default FilterBar