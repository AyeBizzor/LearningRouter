import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
<h1>Error en el enlace</h1>
<p>Vuelve al Inicio</p>
<Link to="/inicio">Click aquí para regresar</Link>        
 </div>
  )
}
