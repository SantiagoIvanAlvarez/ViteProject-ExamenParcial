import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    contraseña: "",
  });

  const [mostrar, setMostrar] = useState(false)
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();

    if (usuario.nombre.trim().length > 3 && usuario.apellido.trim().length > 6 && usuario.contraseña.trim().length > 6) {
      setMostrar(true);
      setError(false)
    } else {
      setMostrar(false)
      setError(true)
    }



  }
  return (
    <div className='App'>
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit} style={{marginBottom: 100, marginTop: 100}}>
        <label style={{marginRight: 20}}>Nombre</label>
        <input style={{marginRight: 20}} onChange={(e)=> setUsuario({...usuario, nombre: e.target.value})}/>
        <label style={{marginRight: 20}}>Apellido</label>
        <input style={{marginRight: 20}} onChange={(e)=> setUsuario({...usuario, apellido: e.target.value})}/>
        <label style={{marginRight: 20}}>Contraseña</label>
        <input type='password' style={{marginRight: 20}} onChange={(e)=> setUsuario({...usuario, contraseña: e.target.value})}/>
        <button>Enviar</button>
      </form>
    <Card usuario={usuario} mostrar={mostrar} error={error}/>
    </div>
  )
}

export default App