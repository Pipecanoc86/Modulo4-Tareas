import React from 'react'
import Location_Details from '../Location_Details/Location_Details'


const LocationCard = (props) => {
  return (
      <div className="Location_card">
        <Location_Details name={props.name} type={props.type} dimension={props.dimension}></Location_Details> 
      </div>
  )
}

export default LocationCard