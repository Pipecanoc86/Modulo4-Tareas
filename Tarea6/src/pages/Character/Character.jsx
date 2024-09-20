import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import './Character.css'

const Character = () => {
  const [personajes, setPersonajes] = useState([]);
  const param = useParams();
  
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

export default Character