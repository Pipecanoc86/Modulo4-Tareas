import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div className="title_name">
     {props.name}
    </div>
  )
}

export default Title
