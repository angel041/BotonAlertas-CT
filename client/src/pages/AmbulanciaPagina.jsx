
import { useEffect } from 'react'
import ListaDeAmbulancia from '../components/ListaDeAmbulancia';/////
import { useTasks } from '../context/Consultas';
import '../css/UsuarioPagina.css'
import Menu2 from './Menu2';
import "../css/listaDeAlertas.css";

function PaginaAmbulancias() {
  const opcion1 = async () => {
    
    var x =document.getElementById('SelectOpciones').value;
    
    if(x=="Usuarios"){
      console.log('Usuarios');
      window.location.href = "/usuarios";
    }
    if(x=="policias"){
      console.log('policia');
      window.location.href = "/policias";
    }
    
    
  }
  const { tasks, loadAmbulancia} = useTasks();

  useEffect(() => {
    loadAmbulancia();
    
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1><br></br>No hay Paramedicos</h1>
    return tasks.map(task => (
      <ListaDeAmbulancia task={task} user={task.id_Usuario} />
    ))
  }

  return (
    <>
    <select className='Selector' id="SelectOpciones" onClick={() => opcion1()} type="selection" name="tipo"  >
          <option value="">Paramedicos</option>
          <option value="Usuarios">Usuarios</option>
          <option value="policias">Policias</option>
        </select>
      <h1>Paramedicos</h1>
            <div className="contenedo">

        <thead className='titulos'>

          <tr>
            <th className='nu'>Identificador</th>
            <th className='name'>Nombre</th>
            <th className='name'>Apellidos</th>
            <th className='name'>Telefono</th>
            <th className=''> Turno</th>
            
            <th className=''>No.Patrulla</th>
            <th className=''>Estado</th>
            <th className='nu'></th>
            <th className='nu'></th>

            

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

export default PaginaAmbulancias;
