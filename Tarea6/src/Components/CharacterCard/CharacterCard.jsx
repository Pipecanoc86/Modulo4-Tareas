import React from 'react'
import Title from '../Title/Title'
import Image from '../Image/Image'
import Character_Details from '../Character_Details/Character_Details'

const CharacterCard = (props) => {
  return (
      <div className="Contenedor_card">
        <Image img={props.img}></Image>
        <Title name={props.name}></Title>
        <Character_Details status={props.status} species={props.species}></Character_Details>

      </div>
  )
}

export default CharacterCard
