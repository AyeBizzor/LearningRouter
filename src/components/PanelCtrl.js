import React from 'react'
import { Outlet } from 'react-router-dom'

export const PanelCtrl = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <p>Elige una opción</p>
        <nav>
         <ul>
            <li><a href='/panelctrl/inicio' >Inicio</a></li>
            <li><a href='/panelctrl/crear-articulos' >Crear artículos</a></li>
            <li><a href='/panelctrl/gestion-usuarios' >Gestión de usuarios</a></li>
            <li> <a href='/panelctrl/acerca-de'> Acerca de... </a> </li>
         </ul>
        </nav>
    <div>

    {/*cargo aca los componentes*/}

   
    </div>


<Outlet/>

    </div>
  )
}
