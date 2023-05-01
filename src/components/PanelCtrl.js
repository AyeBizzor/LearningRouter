import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelCtrl = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <p>Elige una opción</p>
        <nav>
         <ul>
            <li><NavLink to='/panelctrl/inicio' >Inicio</NavLink></li>
            <li><NavLink to='/panelctrl/crear-articulos' >Crear artículos</NavLink></li>
            <li><NavLink to='/panelctrl/gestion-usuarios' >Gestión de usuarios</NavLink></li>
            <li> <NavLink to='/panelctrl/acerca-de'> Acerca de... </NavLink> </li>
         </ul>
        </nav>
    <div>

    {/*cargo aca los componentes*/}

   
    </div>


<Outlet/>

    </div>
  )
}
