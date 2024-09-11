import React from 'react';
import './App.css'
import RickAndMortyCharacterCard from './Components/RickAndMortyCharacterCard/RickAndMortyCharacterCard';


function App() {

  return (
    <div>
      <h1 class="Titulo1">Personajes de Rick and Morty</h1>
      <RickAndMortyCharacterCard id={1}/>
      <RickAndMortyCharacterCard id={2}/>
      <RickAndMortyCharacterCard id={3}/>
      <RickAndMortyCharacterCard id={4}/>
      <RickAndMortyCharacterCard id={8}/>
      </div>
  )
}

export default App
