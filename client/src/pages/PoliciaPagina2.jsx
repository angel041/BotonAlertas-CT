
import { useEffect, useState } from 'react'
import { getUsuariosRequest } from '../api/usuarios.api'
import Menu2 from './Menu2';

import { useParams, useNavigate } from 'react-router-dom';
import '../css/UsuarioPagina.css'


function PaginaUsuarios() {
  
  const opcion1 = async () => {
    
    var x =document.getElementById('SelectOpciones').value;
    
    if(x=="Usuarios"){
      console.log('policia');
      window.location.href = "/usuarios";
    }
    if(x=="paramedico"){
      console.log('policia');
      window.location.href = "/ambulancias";
    }
    
    
  }

  const [users, setUsuarios] = useState([])
  

  useEffect(() => {
    async function cargarTarea() {
      const response = await getUsuariosRequest()
      setUsuarios(response.data)
    }
    cargarTarea()
  }, []);


  return (
    <>
    <div className='cont'>
        <h1>Usuarios de la Policia</h1>
        
        <select className='Selector' id="SelectOpciones" onClick={() => opcion1()} type="selection" name="tipo"  >
        <option value="policia">Policías</option>
          <option value="Usuarios">Usuarios</option>
          <option value="paramedico">Paramedicos</option>
        </select>

        <thead>
          <tr className='tituloT'>
            <th className='titu'>No. Usuario</th>
            <th className='titu'>Nombre</th>
            <th className='titu'>Tipo de Usuario</th>
          </tr>
        </thead>


        {
          users.map(usuario => (
            <div key={usuario.id}>
              <tr className='ulli'>
                <td className='usu' id='i'>{usuario.id_Usuario }</td>
                <td className='usu'>{usuario.NombreU}</td>
                <td className='usu' id='f'>{usuario.EdadU}</td>
              </tr>
            </div>

          ))
        }
    </div>
    
    
    <Menu2></Menu2>
    </>
    
    

  )

}

export default PaginaUsuarios;
