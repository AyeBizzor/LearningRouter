import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
    let {nombre="Aye", apellido="Bikosd"} = useParams();
    const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    let nombre= e.target.nombre.value
    let apellido= e.target.apellido.value

  let url = `/persona/${nombre}/${apellido}`;
  console.log(url)
  navegar(url);
  }


  return (
    <div>
        <h1>Página de persona: {nombre} {apellido} </h1>

<form onSubmit={enviar}>
  <input type='text' name='nombre' />
  <input type='text' name='apellido' />
  <input type='submit' name='enviar' value="enviar" />

</form>


    </div>
  )
}
