import React from 'react'
import './Details.css'

const Details = (props) => {
  return ( 
  <div>
      <div class="Contenedor_informacion">
      <div class="title_details">Posicion: </div>
      <div class="text_details">{props.posicion}</div>
      </div>
  
  <div class="Contenedor_informacion">
      <div class="title_details">Nacionalidad: </div>
      <div class="text_details">{props.nacionalidad}</div>
    </div>

    <div class="Contenedor_informacion">
      <div class="title_details">Edad: </div>
      <div class="text_details">{props.edad}</div>
    </div>
 </div>   
    )
}

export default Details
