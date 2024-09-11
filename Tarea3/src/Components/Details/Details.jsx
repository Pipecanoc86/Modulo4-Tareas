import React from 'react'
import './Details.css'

const Details = (props) => {
  return ( 
  <div>
      <div class="Contenedor_informacion">
      <div class="title_details">Genero: </div>
      <div class="text_details">{props.genre}</div>
      </div>
  
  <div class="Contenedor_informacion">
      <div class="title_details">Status: </div>
      <div class="text_details">{props.status}</div>
    </div>
 </div>   
    )
}

export default Details
