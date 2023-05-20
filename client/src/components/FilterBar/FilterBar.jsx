import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterPokemonsAPIOrDB,
  filterPokemonsByType,
  getPokemonByName,
  orderPokemons,
} from "../../redux/actions";
import style from './FilterBar.module.css'


const FilterBar = () => {
  const types = useSelector((state) => state.types);
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
    <div className={style.container}>
      {/* Search Bar */}
      <div className={style.searchBar}>
        <input type="search" onChange={handleChangeSearch} value={name} />
        <button onClick={() => onSearch(name)}>Search</button>
      </div>
      <div className={style.filterBar}>
        {/* FALTA Ordenar Ascendente/Descendente por orden alfabético y por ataque*/}
        <label htmlFor="order">Order:</label>
        <select name="order" id="3" onChange={handleOrder}>
          <option value="default">Default</option>
          <option value="ascName">A-Z</option>
          <option value="desName">Z-A</option>
          <option value="ascAttack">Weakest</option>
          <option value="desAttack">Strongest</option>
        </select>

        {/* Filtrar por origen API/BD */}
        <label htmlFor="filterDBAPI">By Origin:</label>
        <select name="filterDBAPI" id="2" onChange={handleFilter}>
          <option value="all">All</option>
          <option value="db">Database</option>
          <option value="api">API</option>
        </select>

        {/* Filtrar por tipo*/}
        <label htmlFor="filterByTypes">By type:</label>
        <select name="filterByTypes" id="1" onChange={handleFilter}>
          <option value="default">Default</option>
          {types.map((t) => {
            return (
              <option value={t.name} key={t.id}>
                {t.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
