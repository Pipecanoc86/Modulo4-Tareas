import React from 'react'
import './Home.css'


const Home = (props) => {

    const handleLogOut = () =>{
        props.setUser([])
    }

  return (
    <div className='Contenedor_Home'>
        <p className='Titulo_Home'>BIENVENIDO A HOME</p>
        <h2>{props.user}</h2>
        <button className="button"onClick={handleLogOut}>Cerrar sesion</button>
    </div>
    
  )
}

export default Home