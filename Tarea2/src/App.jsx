import './App.css'
import CharacterCard from './Components/CharacterCard/CharacterCard'

function App() {
  return (
      <div>
        <CharacterCard img='LionelMessi.jpeg' name='Lionel Messi' posicion='Volante Creativo' nacionalidad='Argentina' edad='37 años'></CharacterCard>
        <CharacterCard img='CristianoRonaldo.jpg' name='Cristiano Ronaldo' posicion='Delantero' nacionalidad='Portugal' edad='39 años'></CharacterCard>
        <CharacterCard img='Neymar.jpg' name='Neymar Junior' posicion='Media Punta' nacionalidad='Brasil' edad='32 años'></CharacterCard>
        <CharacterCard img='MarceloViera.jpg' name='Marcelo Viera' posicion='Lateral Izquierdo' nacionalidad='Brasil' edad='36 años'></CharacterCard>
      </div>
  ) 
}

export default App
