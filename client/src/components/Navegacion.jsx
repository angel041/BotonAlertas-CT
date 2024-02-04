import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
  return (
    <div className="header">
      <ul className='listaul'>
        <li className='listali'>
          <Link className='an' to="/">Inicio</Link>
        </li>
        <li className='listali'>
          <Link className='an' to="/alerta">Alerta</Link>
        </li>
        <li className='listali'>
          <Link className='an' to="/new">crear</Link>
        </li>
        <li className='listali'>
          <Link className='an' to="/graficos">Gráficos</Link>
        </li>
        <li className='listali'>
          <Link className='an' to="/alta">Alta</Link>
        </li>
        <li className='listali'>
          <Link className='an' to="/usuarios">Usuarios</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar