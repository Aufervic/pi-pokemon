import {NavLink} from 'react-router-dom'
import style from './Card.module.css'
import Helper from '../../helpers/Helper'
import IconAttack from '../../assets/icon-attack-5.png'

const Card = ({id, name, image, attack, types}) =>{

  // const imgsTypes = Helper.getImgType()
  let shortTypes = types.length > 4 ? types.slice(0,4): types
  const colors = Helper.getTypeColors(shortTypes)
  const addStyle=(colors)=>{
    return {
      background: `linear-gradient(${colors[0]}, ${colors[1]})`,
      // backgroundColor: color,
    }
  }

  return (
    
    <div className={style.Card} style={addStyle(colors)}>
      <NavLink to={`/detail/${id}`} className={style.navLink}>
      <div className={style.headContainer}>
        <p className={style.statAttack}>
          <img src={IconAttack} alt='attack'/>
          {attack}
        </p>
        <p className={style.idPokemon}>
              <span>#</span>
              {Helper.prettifyID(id)}
        </p>
      
      </div>
      
      <span className={style.name}>{Helper.capitalize(name)}</span>
      
      <img src={image} alt={name} className={style.img}/>
      <div className={style.typesContent}>
        {shortTypes.map( t => {
          return (
            <div className={style.typeItem} key={t.id}>
              <img src={Helper.getImgType(t.id)} alt={t.name} title={Helper.capitalize(t.name)} />
              {/* <p>{Helper.capitalize(t.name)}</p> */}
            </div>
          )
        })}
      </div>
      
      {/* <NavLink to={`/detail/${id}`}>DETALLE</NavLink> */}
    </NavLink>
    </div>
  )
}

export default Card