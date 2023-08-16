import React from 'react'

const Card = ({usuario, mostrar, error}) => {
  return (
    <div>{mostrar && 
    <>
    <h2>Datos del usuario: </h2>
    <h4>Nombre: {usuario.nombre}</h4>
    <h4>Apellido: {usuario.apellido}</h4>
    </>}
    {error && <h4 style={{color: "red"}}>Por favor chequea que la información sea correcta</h4>}
    </div>
  )
}

export default Card