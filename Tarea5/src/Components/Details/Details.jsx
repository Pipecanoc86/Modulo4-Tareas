import React from 'react'
import './Details.css'

const Details = (props) => {
  return ( 
 <div className="Contenedor_informacion">
      <div className="status">{props.status}</div>
      <div className="species">{props.species}</div>
 </div>   
    )
}

export default Details
