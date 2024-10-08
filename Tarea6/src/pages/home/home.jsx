import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = (props) => {

  return (
    <div className='Contenedor_Home'>
        <p className='Home_text'>Rick y Morty es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos. Dan Harmon, el cocreador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.

            La serie se originó por un cortometraje rudimentario animado por Roiland para el festival de cine Channel 101 llamado Doc and Mharti, una parodia de los principales protagonistas de Back to the Future. Cuando la cadena NBC despidió a Harmon en 2013 por discusiones entre él y los ejecutivos de la serie que había creado, Community, él y Roiland desarrollaron una serie basada en los personajes ya creados por Roiland.

            La sexta temporada se estrenó el 4 de septiembre de 2022 y consta de diez episodios. Se confirmó una séptima temporada como parte de un acuerdo a largo plazo con Cartoon Network que ordenó 70 nuevos episodios, que renovaron la serie hasta una décima temporada. Adult Swim cortó lazos con Justin Roiland en 2023 en medio de denuncias de violencia de género y anunció que volvería a contar sus roles. </p>
        <Link to='/Character'></Link>
        <p></p>
        <Link to='/Location'></Link>
        <p></p>
        <Link to='/Episode'></Link>
    </div>
  )
}

export default Home