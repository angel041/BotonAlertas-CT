import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import Cookies from "universal-cookie";
import "../css/Menu.css";

import PaginaEmergencia12 from "./NotificacionesAlertas";
import { Toaster, toast } from "react-hot-toast";
import "../css/Ventana.css";
import usuario from '../media/user.png';
var Contador=0;
const cookies = new Cookies();


function OpcionesDelMenu() {
    Contador+=1;
    if(Contador==1){
      document.getElementById("CerrarSesion").style.visibility = "visible";
      console.log("Se ve")
  
    }else{
      document.getElementById("CerrarSesion").style.visibility = "hidden";
      Contador=0;
      console.log("No se ve")
  
    }
    
    console.log(Contador);
    
  }
class Menu extends React.Component {
  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("apellido_paterno", { path: "/" });
    cookies.remove("apellido_materno", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("username", { path: "/" });
    window.location.href = "./";
  };

  componentDidMount() {
    if (!cookies.get("username")) {
      window.location.href = "./";
    }
  }

  render() {
    return (
      <>
      <PaginaEmergencia12></PaginaEmergencia12>
        <div className="">
          <ul className="listaul1">
            <li>
              <Link className="an" to="/menu">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="an" to="/establecimientos">
                Establecimientos
              </Link>
            </li>
            <li>
              <Link className="an" to="/alerta">
                Alerta
              </Link>
            </li>
            <li>
              <Link className="an" to="/graficos">
                Gráficos
              </Link>
            </li>
            <li>
              <Link className="an" to="/alta">
                Alta
              </Link>
            </li>
            <li>
              <Link className="an" to="/Usuarios">
                Usuarios
              </Link>
            </li>
            <li>
              <div className="Opcionesmenu">
              
                  <button
                    className="Boton_Mostrar"
                    onClick={() => OpcionesDelMenu()}
                  >
                    <img src={usuario} className="iconoUser" />
                  </button>
               
              </div>

              <button id="CerrarSesion" onClick={() => this.cerrarSesion()}>Cerrar Sesion</button>
            </li>
          </ul>
        </div>
        
        <Toaster position="top-right" reverseOrder={false} />
      </>
    );
  }
}

export default Menu;
