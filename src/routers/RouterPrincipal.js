import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { PanelCtrl } from '../components/PanelCtrl';
import { InicioPanel } from '../components/panel/InicioPanel';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';

export const RouterPrincipal = () => {
  return (
   <BrowserRouter>
  
    <h1>Cabecera</h1>
    <hr/>

    <nav> <ul>

       <li>
        <NavLink to="/Inicio"
                className={({isActive}) => isActive ?  "activado" : ""} 
        >Inicio</NavLink>
        </li> 
       <li>
       <NavLink to="/articulos"
        className={({isActive}) => isActive ?  "activado" : ""}
       >Articulos</NavLink>
        </li> 
       <li>
       <NavLink to="/Contacto"
        className={({isActive}) => isActive ?  "activado" : ""}
       >Contacto</NavLink>
        </li> 
        <li>
       <NavLink to="/PanelCtrl"
        className={({isActive}) => isActive ?  "activado" : ""}
       >Panel de control</NavLink>
        </li> 

  </ul> </nav>


   <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/inicio' element={<Inicio/>}/>
    <Route path='/articulos' element={<Articulos/>}/>
    <Route path='/contacto' element={<Contacto/>}/>
    <Route path='/persona/:nombre/:apellido' element={<Persona/>}/>
    <Route path='/persona/:nombre' element={<Persona/>}/>
    <Route path='/redirigir' element={<Navigate to="/persona/victor/robles"/>}/>

  <Route path='/panelctrl' element={<PanelCtrl/>}>

          <Route path='inicio' element={<InicioPanel/>}/>
          <Route path='crear-articulos' element={<Crear/>}/>
          <Route path='gestion-usuarios' element={<Gestion/>}/>
          <Route path='acerca-de' element={<Acerca/>}/>
  
   </Route>

    <Route path='*' element={<Error/> }/>
   </Routes> 
   </BrowserRouter>
  )
}
