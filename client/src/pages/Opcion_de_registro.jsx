import React from "react"
import { BrowserRouter as Router , Route,Routes, Link , NavLink  } from 'react-router-dom';
import Menu2 from './Menu2';
import '../css/Opciones.css'
import Img1 from '../media/ambulancia.png'
import Img2 from '../media/comercio-electronico.png'
import Img3 from '../media/sirena.png'
function OpcionesA() {
    return(
        <>
        <div className="TituloA">
        <p >Elegi una opcion de que vas a dar de alta</p>

        </div>
       
        <ul className='lista_de_opciones'>
        
        <li >
        
        
            < Link className='opciones' to="/alta_ambulancia">
            <img src={Img1} className="Img" />
                
                Ambulancia
            
            </ Link >
        </li>
        
            <li>
            
                <Link className='opciones' to="/alta_establecimiento">
                <img src={Img2} className="Img" />
            <br></br>
            Establecimiento </Link>
            </li>
            <li >
            
            < Link className='opciones' to="/alta_policia">
            <img src={Img3} className="Img" />
            <br></br>Policia </ Link> 
            </li>
        </ul>
        
        <Menu2></Menu2>
        </>
        
    )
}
export default OpcionesA