import React from "react"
import { Link }  from 'react-router-dom'

class Landing extends React.Component{
  
  render(){
    return (
      <div>
        <h1>Hola soy el Landing</h1>
        <Link to='/home'>HOME</Link>
      </div>
    )
  }

}

export default Landing