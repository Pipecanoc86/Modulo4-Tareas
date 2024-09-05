import React from 'react'
import Title from '../Title/Title'
import Image from '../Image/Image'
import Details from '../Details/Details'

const CharacterCard = (props) => {
  return (
      <div class="Contenedor_card">
        <Image img={props.img}></Image>
        <Title name={props.name}></Title>
        <Details posicion={props.posicion} nacionalidad={props.nacionalidad} edad={props.edad}></Details>
      </div>
  )
}

export default CharacterCard
