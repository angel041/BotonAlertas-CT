
import { useEffect } from 'react'
import ListaDeEstablecimientos from '../components/ListaDeEstablecimientos';/////
import { useTasks } from '../context/Consultas';
import '../css/UsuarioPagina.css'
import Menu2 from './Menu2';
import "../css/listaDeAlertas.css";

function PaginaEstablecimientos() {

  const { tasks, loadEstablecimientos} = useTasks();

  useEffect(() => {
    loadEstablecimientos();
    
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1><br></br>No hay Establecimientos</h1>
    return tasks.map(task => (
      <ListaDeEstablecimientos task={task} user={task.id_Usuario} />
    ))
  }

  return (
    <>
    
      <h1>Establecimientos</h1>
            <div className="contenedo">

        <thead className='titulos'>

          <tr>
            <th className='Id'>Identificador</th>
            <th className='name'>Nombre</th>
            <th className='Id'></th>
            <th className='direccion'>Direccion</th>
            <th className='name'>	Horario</th>
            <th className='name'>Encargado</th>
            <th className='Id'></th>
            
            
            

            

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

export default PaginaEstablecimientos;
