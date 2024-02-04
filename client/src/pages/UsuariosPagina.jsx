
import { useEffect } from 'react'
import ListaDeUsuarios from '../components/ListaDeUsuarios';/////
import { useTasks } from '../context/Consultas';
import '../css/UsuarioPagina.css'
import Menu2 from './Menu2';


function PaginaUsuarios() {
  const opcion1 = async () => {
    
    var x =document.getElementById('SelectOpciones').value;
    
    if(x=="policia"){
      console.log('policia');
      window.location.href = "/policias";
    }
    if(x=="paramedico"){
      console.log('policia');
      window.location.href = "/ambulancias";
    }
    
    
  }
  const { tasks, loadUsuarios} = useTasks();

  useEffect(() => {
    loadUsuarios();
    
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1><br></br>No hay Usuarios</h1>
    return tasks.map(task => (
      <ListaDeUsuarios task={task} user={task.id_Usuario} />
    ))
  }

  return (
    <>
    <select className='Selector' id="SelectOpciones" onClick={() => opcion1()} type="selection" name="tipo"  >
          <option value="Usuarios">Usuarios</option>
          <option value="policia">Policías</option>
          <option value="paramedico">Paramedicos</option>
        </select>
      <h1>Usuarios</h1>
            <div className="contenedo">

        <thead className='titulos'>

          <tr>
            <th className='nu'>Identificador</th>
            <th className='name'>Nombre</th>
            <th className='name'>Apellidos</th>
            <th className='nu'>Edad</th>
            <th className='name'>Curp</th>
            <th className='name'>Correo</th>
            <th className='Correo'></th>
            <th className='Correo'></th>
            

          </tr>
        </thead>
        <div id="Tabla_Scroll">
        {renderMain()}
        </div>
      </div>
      <Menu2></Menu2>
      
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
 
</>
    
  )
}

export default PaginaUsuarios;
