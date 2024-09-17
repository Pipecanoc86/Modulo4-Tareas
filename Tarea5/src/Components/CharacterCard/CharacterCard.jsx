import React from 'react'
import Title from '../Title/Title'
import Image from '../Image/Image'
import Details from '../Details/Details'

const CharacterCard = (props) => {
  return (
      <div className="Contenedor_card">
        <Image img={props.img}></Image>
        <Title name={props.name}></Title>
        <Details status={props.status} species={props.species}></Details>

      </div>
  )
}

export default CharacterCard
