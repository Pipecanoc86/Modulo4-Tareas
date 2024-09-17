import React from 'react'
import './Image.css'

const Image = (props) => {
  return (
    <div>
      <img src={props.img} alt="Imagen" className="img"/>
    </div>
  )
}

export default Image
