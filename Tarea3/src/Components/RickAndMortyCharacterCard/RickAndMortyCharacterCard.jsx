import React from 'react'
import CharacterCard from '../CharacterCard/CharacterCard';
import { useState,useEffect } from 'react';

const RickAndMortyCharacterCard = (props) =>{

    const rickAndMortyCharacterId = props.id;
    const [img,setImage] = useState("");
    const [name,setName] = useState("");
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const url = 'https://rickandmortyapi.com/api/character/'+ rickAndMortyCharacterId;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data,'data');
            setImage(data.image)
            setName(data.name)
            setGenre(data.gender)
            setStatus(data.status)
            }).catch((error) => {
            console.log(error)
        })
 },[])

 return (
    <div>
      <CharacterCard
        img={img}
        name={name}
        genre={genre}
        status={status}
      />
    </div>
  )
}

export default RickAndMortyCharacterCard
