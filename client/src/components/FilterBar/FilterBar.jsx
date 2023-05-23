import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterData,
  getPokemonByName,
} from "../../redux/actions";
import style from './FilterBar.module.css'


const FilterBar = ({setPage}) => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  let [name, setName] = useState("");
  const [filters, setFilters] = useState({
    order: 'default',
    origin: 'all',
    type: 'default'
  })

  const handleChangeSearch = (event) => {
    setName(event.target.value);
  };

  const onSearch = (_name) => {
    dispatch(getPokemonByName(_name.toLowerCase()));
  };

  const handleChange = (event) => {
    setFilters({...filters, [event.target.name]: event.target.value})

    dispatch(filterData({...filters, [event.target.name]: event.target.value}))
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
        <select name="order" id="3" onChange={handleChange}>
          <option value="default">Default</option>
          <option value="ascName">A-Z</option>
          <option value="desName">Z-A</option>
          <option value="ascAttack">Weakest</option>
          <option value="desAttack">Strongest</option>
        </select>

        {/* Filtrar por origen API/BD */}
        <label htmlFor="origin">By Origin:</label>
        <select name="origin" id="2" onChange={handleChange}>
          <option value="all">All</option>
          <option value="db">Database</option>
          <option value="api">API</option>
        </select>

        {/* Filtrar por tipo*/}
        <label htmlFor="type">By type:</label>
        <select name="type" id="1" onChange={handleChange}>
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
