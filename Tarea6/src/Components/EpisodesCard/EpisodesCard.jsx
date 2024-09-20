import React from 'react'
import Episodes_Details from '../Episodes_Details/Episodes_Details'

const EpisodesCard = (props) => {
  return (
      <div className="Episodes_card">
        <Episodes_Details name={props.name} episode={props.episode}date={props.date}></Episodes_Details> 
      </div>
  )
}

export default EpisodesCard