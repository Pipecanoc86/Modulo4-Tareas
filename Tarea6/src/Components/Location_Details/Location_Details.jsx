import React from 'react'
import './Location_Details.css'

const Location = (props) => {
  return ( 
 <div className="Contenedor_informacion">
      <div className="name"> {props.name}</div>
      <div className="type">{props.type}</div>
      <div className="dimension">Dimension : {props.dimension}</div>
 </div>   
    )
}

export default Location
