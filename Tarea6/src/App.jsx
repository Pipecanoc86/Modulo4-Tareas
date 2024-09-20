import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Navbar from './Components/Navbar/navbar'
import Character from './pages/Character/Character'
import Episode from './pages/Episode/Episodes'
import Location from './pages/Location/Location'
import NotFound from './pages/notFound/notFound'


function App() {
  
  return (
    <div>
      
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Character/' element={<Character/>}/>
          <Route path='/Location/' element={<Location/>}/>
          <Route path='/Episode/' element={<Episode/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}


export default App
