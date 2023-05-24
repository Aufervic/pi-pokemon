import style from './About.module.css'

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.info}>

        <h2  className={style.prop}>Autor</h2>
        <h3 className={style.detail}>Aufer Victoriano Contreras Cáceres</h3>

        <h2  className={style.prop}>PI project</h2>
        <h3 className={style.detail}>Pokemons Catalog</h3>
        <h3 className={style.detail}>You can find them all</h3>
        <h3 className={style.detail}>You can create your own Pokémon</h3>
      </div>
    </div>
  )
}

export default About