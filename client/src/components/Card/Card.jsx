import {NavLink} from 'react-router-dom'
import style from './Card.module.css'
import Helper from '../../helpers/Helper'

const Card = ({id, name, image, types}) =>{

  

  return (
    <div className={style.Card}>
      <p>{id}</p>
      <p>{Helper.capitalize(name)}</p>
      <img src={image} alt={name} className={style.img}/>
      <div>
        <span>{types.map(t => {return Helper.capitalize(t.name)}).join(' ')}</span>
      </div>
      <NavLink to={`/detail/${id}`}>DETALLE</NavLink>
    </div>
  )
}

export default Card