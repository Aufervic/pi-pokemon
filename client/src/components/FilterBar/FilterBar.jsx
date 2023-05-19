import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterPokemonsAPIOrDB,
  filterPokemonsByType,
  getPokemonByName,
  orderPokemons,
} from "../../redux/actions";

const FilterBar = () => {
  const types = useSelector(state => state.types)
  let [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChangeSearch = (event) => {
    setName(event.target.value);
  };

  const onSearch = (_name) => {
    dispatch(getPokemonByName(_name.toLowerCase()));
  };

  // en fav
  const handleOrder = (event) => {
    dispatch(orderPokemons(event.target.value));
    // setAux(!aux)
  };

  const handleFilter = (event) => {
    switch (event.target.name) {
      case "filterDBAPI":
        dispatch(filterPokemonsAPIOrDB(event.target.value));
        break;
      case "filterByTypes":
        console.log("click", event.target.name);
        dispatch(filterPokemonsByType(event.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div>
        <input type="search" onChange={handleChangeSearch} value={name} />
        <button onClick={() => onSearch(name)}>Search</button>
      </div>
      <div>
        {/* Filtrar por tipo*/}
        <select name="filterByTypes" id="1" onChange={handleFilter}>
          <option value="default">Default</option>
          {types.map(t =>{ return (
            <option value={t.name} key={t.id}>{t.name}</option>
          )})}
          {/* <option value="default">Default</option>
          <option value="normal">normal</option>
          <option value="fighting">Fighting</option>
          <option value="grass">grass</option>
          <option value="fire">fire</option>
          <option value="poison">poison</option> */}
        </select>

        {/* Filtrar por origen API/BD */}
        <select name="filterDBAPI" id="2" onChange={handleFilter}>
          <option value="all">All</option>
          <option value="db">Database</option>
          <option value="api">API</option>
        </select>

        {/* FALTA Ordenar Ascendente/Descendente por orden alfabético y por ataque*/}
        <select name="order" id="3" onChange={handleOrder}>
          <option value="default">Default</option>
          <option value="ascName">A-Z by Name</option>
          <option value="desName">Z-A by Name</option>
          <option value="ascAttack">Asc by Attack</option>
          <option value="desAttack">Des by Attack</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
