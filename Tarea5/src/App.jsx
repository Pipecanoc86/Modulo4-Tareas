import React, { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './Components/CharacterCard/CharacterCard';


function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchPersonajes = async () =>{
      const url = 'https://rickandmortyapi.com/api/character';

      try{
        const res = await fetch(url)
        const data = await res.json();
        const dataApi = data.results;

        setPersonajes(dataApi)

        console.log(data.results,'data <----');  
      }catch(error){
        console.error(error, 'Error en el fetch');
      }
    }

    fetchPersonajes();
  },[])

  return (
    <div>
      <div className='Contenedor_logo'><img className="logoR_M" src='./Rick&Morty.jpg'></img></div>
         <div className="Container_Personajes">
          {
            personajes.map((item) => {
            return <CharacterCard name={item.name} img={item.image} status={item.status} species={item.species}/>
          })
        }
     </div>
    </div>
  )
}


export default App
