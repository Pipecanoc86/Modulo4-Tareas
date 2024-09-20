import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Location.css'
import LocationCard from '../../Components/LocationCard/LocationCard';

const Location = () => {

  const [location, setLocation] = useState([]);
  const param = useParams();

  useEffect(() => {
    const fetchLocation= async () =>{
      const url = 'https://rickandmortyapi.com/api/location';

      try{
        const res = await fetch(url)
        const data = await res.json();
        const dataApi = data.results;

        setLocation(dataApi)

        console.log(data.results,'data <----');  
      }catch(error){
        console.error(error, 'Error en el fetch');
      }
    }

    fetchLocation();
  },[])
    
  return (
    <div>
      <div className='Contenedor_logo'><img className="logoR_M" src='./Rick&Morty.jpg'></img></div>
      <div className="Container_Location">
      {
        location.map((item) => {
        return <LocationCard name={item.name} type={item.type} dimension={item.dimension}/>
      })
      }
      </div>
    </div>
  )
}

export default Location