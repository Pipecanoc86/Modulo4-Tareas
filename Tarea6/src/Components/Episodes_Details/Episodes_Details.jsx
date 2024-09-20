import React from 'react'
import './Episodes_Details.css'

const Details = (props) => {
  return ( 
 <div className="Contenedor_informacion">
      <div className="name"> {props.name}</div>
      <div className="episodes">{props.episode}</div>
      <div className="date">Date : {props.date}</div>
 </div>   
    )
}

export default Details
