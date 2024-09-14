import { useState } from 'react'
import './Form_login.css'

const Form_login = (props) => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('false');

const handleSubmit = (e) =>{
    e.preventDefault();
    if(name==="" || password===""){
    setError(true)
    }
    else{
    setError(false)
    props.setUser([name])
    }
}
  
const handleChange = (e) =>{
  setName(e.target.value)
  console.log(e.target.value,'setname');
}

  return (
    <section className="Contenedor_Formulario">
      <p className="Titulo_Login">Formulario Login</p>
       <form className="form" action="" onSubmit={handleSubmit}>
        <input className="inputs" type='text' placeholder='Usuario' value={name} onChange={handleChange}/>
        {error && <p className='error-message'>El usuario es requerido</p>}
        <input className="inputs" type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
        {error && <p className='error-message'>El password es requerido</p>}
        <button type="submit" className="button">Iniciar Sesion</button>
      </form>
    </section>
  )
}


export default Form_login
