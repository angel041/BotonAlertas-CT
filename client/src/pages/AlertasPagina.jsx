
import { useEffect } from 'react'
import ListaDeAlertas from '../components/ListaDeAlertas';/////
import { useTasks } from '../context/Consultas';
import '../css/AlertasPagina.css'
import Menu2 from './Menu2Alerta';
import imgIcono from '../media/editar.png'
import ImgPoli from '../media/patrulla.png'
import ImgAmbu from '../media/ambulanciaIMG.png'
function Recarga(){
  setInterval(() => {
    window.location.href = "/alerta";
  }, 30000)
}

function AlertasPagina() {

  const { tasks, loadTasks} = useTasks();

  useEffect(() => {
    loadTasks();
    
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1><br></br>No hay alertas</h1>
    return tasks.map(task => (
      <ListaDeAlertas task={task} key={task.id} />
    ))
  }

  return (
    <>
      <div className="icon">
        <ul>
          <li><div className='ContenedorLi'><img src={ImgPoli} className="imgIcono" /><p id='MensajeP'>Policia</p></div></li>
          <li><div className='ContenedorLi'><img src={ImgAmbu} className="imgIcono2" /><p id='MensajeP'>Ambulanica</p></div></li>
          <li><div className='ContenedorLi'><div className='RV'></div><p id='MensajeP'>Atendido</p></div></li>
          <li><div className='ContenedorLi'><div className='RA'></div><p id='MensajeP'>Atendiendo</p></div></li>
          <li><div className='ContenedorLi'><div className='RB'></div><p id='MensajeP'>Sin atender</p></div></li>
        </ul>
      </div>
      <div className="contenedo">

        <thead className='titulos'>

          <tr>
            <th className='nu'></th>
            <th className='nu'></th>
            <th className=''></th>
            <th className='nuA'>Alerta</th>
            <th className='usus'></th>

            <th className='nuA'>Atencion</th>
            <th className='esta'>Tipo</th>
            <th className='esta'> Estado </th>
            

          </tr>
        </thead>
        <div id="Tabla_Scroll">
        {renderMain()}
        </div>
        {Recarga()}
      </div>
      <Menu2></Menu2>
      
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
 
</>
    
  )
}

export default AlertasPagina;
