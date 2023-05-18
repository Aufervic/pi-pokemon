import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Helper from "../../helpers/Helper";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  let [pokemon, setPokemon] = useState({});

  useEffect(() => {
    console.log("Montando detail");
    axios.get(`http://localhost:3001/pokemons/${id}`).then(({ data }) => {
      console.log("Traje el pokemon por id");
      if (data.name) {
        setPokemon(data);
      }
    });
  }, [id]);


  if (!pokemon?.name) {
    return <div>No hay datos...</div>;
  }

  // Para los colores
  let shortTypes = pokemon.types.length > 4 ? pokemon.types.slice(0,4): pokemon.types
  const colors = Helper.getTypeColors(shortTypes, 1)
  const addStyle=(colors)=>{
    return {
      // background: `linear-gradient(to right, ${colors[0]} 20%, ${colors[1]} 80%)`,
      background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
    }
  }

  const styleBarContainer = (stat) => {
    switch(stat){
      case 'attack': return {
        boxShadow: `0 0 5px #e81319`,
      }
      case 'defense' : return{
        boxShadow: `0 0 5px #0a7abc`,
      }
      default: return {
        boxShadow: `0 0 5px #67f70a`,
        // backgroundColor: `rgb(126, 165, 125)`,
      }
    }
  }

  const styleBar = (stat) => {
    switch(stat){
      case 'attack': return {
        left: `-${getPercentageForStyle('attack')}%`,
        backgroundColor: '#e4373c',
      }
      case 'defense' : return{
        left: `-${getPercentageForStyle('defense')}%`,
        backgroundColor: '#0a7abc',
      }
      default: return {
        left: `-${getPercentageForStyle('health')}%`,
        backgroundColor: '#3e9709',
      }
    }
  }

  const getPercentageForStyle = (stat) =>{
    // el div debe recibir el porcentaje que no se usa
    // si quieres que muestre el 60% debes enviar el 40%
    
    switch(stat){
      case 'health': return 100 - ((pokemon.health/255)*100).toFixed(1)
      case 'attack': return 100 - ((pokemon.attack/181)*100).toFixed(1)
      case 'defense' : return 100 - ((pokemon.defense/230)*100).toFixed(1)
      default: return 40
    }
  }

  return (
    <div id={style.cardOverlay} style={addStyle(colors)}>
      <div id={style.card}>
        <div>
          <h2>{pokemon.name}</h2>
          <span id={style.number}>#{Helper.prettifyID(pokemon.id)}</span>
        </div>
        <img src={pokemon.image} alt={pokemon.name} />
        <div className={style.details}>
          <span>Health: {pokemon.health}</span>
          <div className={style.progressBarContainer} style={styleBarContainer('health')}>
            <div className={style.progressBar} style={styleBar('health')}>
            </div>
              <span className={style.progressBarText}>
                {`${pokemon.health}/255`}
              </span>
          </div>

          <span>Attack: {pokemon.attack}</span>
          <div className={style.progressBarContainer} style={styleBarContainer('attack')}>
            <div className={style.progressBar} style={styleBar('attack')}>
            </div>
              <span className={style.progressBarText}>
              {`${pokemon.attack}/181`}
              </span>
          </div>

          <span>Defense: {pokemon.defense}</span>
          <div className={style.progressBarContainer} style={styleBarContainer('defense')}>
            <div className={style.progressBar} style={styleBar('defense')}>
            </div>
              <span className={style.progressBarText}>
                {`${pokemon.defense}/230`}
              </span>
          </div>

          <div className={style.stats}>
            <div>
              <h3>{pokemon.speed ? pokemon.speed : "-"}</h3>
              <p>Speed</p>
            </div>
            <div>
              <h3>{pokemon.height ? `${pokemon.height/10} m`: "-"}</h3>
              <p>Height</p>
            </div>
            <div>
              <h3>{pokemon.weight ? `${pokemon.weight/10} kg` : "-"}</h3>
              <p>Weight</p>
            </div>
          </div>

          <span id={style.typesTitle}>Types:</span>
          <div className={style.typesContent}>
            {pokemon.types.map((t) => {
              return (
                <div className={style.typeItem} key={t.id}>
                  <img
                    src={Helper.getImgType(t.id)}
                    alt={t.name}
                    title={Helper.capitalize(t.name)}
                  />
                  <p>{Helper.capitalize(t.name)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
  

};

export default Detail;
