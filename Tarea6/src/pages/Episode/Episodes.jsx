import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Episodes.css'
import EpisodesCard from '../../Components/EpisodesCard/EpisodesCard';

const Episode = () => {
  const [episodes, setEpisodes] = useState([]);
  const param = useParams();

  useEffect(() => {
    const fetchEpisodes= async () =>{
      const url = 'https://rickandmortyapi.com/api/episode?page=1';

      try{
        const res = await fetch(url)
        const data = await res.json();
        const dataApi = data.results;

        setEpisodes(dataApi)

        console.log(data.results,'data <----');  
      }catch(error){
        console.error(error, 'Error en el fetch');
      }
    }

    fetchEpisodes();
  },[])


  return (
    <div>
      <div className='Contenedor_logo'><img className="logoR_M" src='./Rick&Morty.jpg'></img></div>
      <div className="Container_Episodes">
      {
      episodes.map((item) => {
       return <EpisodesCard name={item.name} episode={item.episode} date={item.air_date}/>
      })
      }
      </div>
    </div>
  )
}

export default Episode