import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";
import style from "./Landing.module.css";
import PokemonImage from "../../assets/pikachu.png";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Landing");
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.text}>
          <h1>
            Be Young, Have Fun, <br /> <span>PI-Pokemon!</span>
          </h1>
          <p>
            Pokemons Catalog <br />
            You can find them all!
            <br /> You can create your own Pokémon!
          </p>
          <NavLink to="/home" className={style.btn}>
            Enter
          </NavLink>
        </div>
        <div className={style.imageContainer}>
          <img src={PokemonImage} alt="" />
        </div>
      </div>
      <p className={style.by}>by Aufer Victoriano</p>
    </div>
  );
};

export default Landing;
