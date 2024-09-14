import './App.css'
import Form_login from './Components/Form_Component/Form_login'
import Home from './Components/Home/Home'
import React, {useState} from 'react'

function App() {

  const [user, setUser] = useState([]);

  return (
    <div>
    {
      !user.length > 0 
      ? <Form_login setUser={setUser}/>
      : <Home user={user} setUser={setUser}/>
    }
  </div>
  )
}

export default App
