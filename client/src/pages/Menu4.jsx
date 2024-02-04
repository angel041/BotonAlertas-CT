import React from 'react';
import { BrowserRouter as Router , Route,Routes,Link, NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import '../css/Menu3.css';
import Mapa from './mapa';



const cookies = new Cookies();

class Menu extends React.Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        
        console.log('id: '+ cookies.get('id'));
        console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        console.log('apellido_materno: '+cookies.get('apellido_materno'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        return (
            <>
            
            <div className=''>
          <ul className='listaul3'>
            <li >
            <Link className='annn' to="/menu">Inicio</Link>
            </li>
            <li>
                <Link className='an' to="/establecimientos">Establecimientos</Link>
            </li>
            <li >
            <Link className='annn'to="/alerta">alerta</Link> 
            </li>
            <li >
            <Link className='annn' to="/graficos">Gráficos</Link>
            </li>
            <li >
            <Link className='annn' to="/alta">Alta</Link> 
            
            </li>
            <li >
            <Link className='annn' to="/Usuarios">Usuarios</Link>  
            </li>
          </ul>
        </div>     
           
                
                
                <button className='boton_cerrar' onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            
            </>
            
        );
        
    }
}

export default Menu;