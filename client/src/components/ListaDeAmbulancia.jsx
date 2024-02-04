import React from "react";
import { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import { useTasks } from "../context/Consultas";
import { useParams, useNavigate } from "react-router-dom";
import "../css/listaDeAlertas.css";
import Modal from "./Modal2";
import imgBorrar from "../media/boton-eliminar.png";
import imgEditar from "../media/editar.png";
import '../css/Modal_LP.css';

function ListaDeAmbulancia({ task, user }) {
  
  const [isOpen3, setIsOpen3] = useState(false);

  const { getambulancia, deleteAmbulancia, updateambulancia } = useTasks();

  const [tasks2, setTask2] = useState({
    NombresP: "",
    ApellidosP: "",
    EdadP:"",
    TelefonoP: "",
    CorreoP: "",
    Turno: "",
    Numero_Ambulancia: "",
    ubicacionP: "",
  })

  const params = useParams();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id_Ambulacia );

  };
  const Eliminar = async () => {
    deleteAmbulancia(task.id_Ambulacia );
    window.location.href = "/ambulancias";
    
  };

  const Modal3 = async () => {
    navigate(`/editA/${task.id_Ambulacia }`);
    setIsOpen3(true);
  };
  
  useEffect(() => {
    const loadUsuarios = async () => {
      if (params.id_Ambulacia ) {
        const task = await getambulancia(params.id);

        setTask2({
          NombresP: task.NombresP,
          ApellidosP: task.ApellidosP,
          EdadP: task.EdadP,
          TelefonoP: task.TelefonoP,
          CorreoP: task.CorreoP,
          Turno: task.Turno,
          Numero_Ambulancia: task.Numero_Ambulancia,
          ubicacionP: task.ubicacionP,
        })
      }
    };
    loadUsuarios();
  }, []);

  return (
    <>
      
      <Modal open={isOpen3} close={() => setIsOpen3(false)}>
        <div className="titulos">
          <h1>{params.id ? "Editar Policia" : "Nueva Tarea"}</h1>
          
          <Formik
            initialValues={task}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              console.log(values);
              console.log(params.id);

              if (params.id) {
                console.log("actualizacion");
                await updateambulancia(params.id, values);
                window.location.href = "/ambulancias";
               
              } else {
                
                await createUser(values);
                actions.resetForm();
              }
              

              navigate("/usuarios");
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
       

               {console.log(values)} 
              {console.log(params.id)}
              {console.log(tasks2)}
              <div className="contenedorA">
              <div className="section1">
                <label>Nombre</label>
                <input
                className="input_L"
                  type="text"
                  name="NombresP"
                  placeholder="Escribe el Nombre"
                  onChange={handleChange}
                  value={values.NombresP}
                />
                <div className="Espacio"></div>
                <label>Apellidos</label>
                <input
                className="input_L"
                  type="text"
                  name="ApellidosP"
                  placeholder="Escribe los apellidos"
                  onChange={handleChange}
                  value={values.ApellidosP}
                />
                <div className="Espacio"></div>
                <label>Edad</label>
                <input
                className="input_L"
                  type="number"
                  name="EdadP"
                  placeholder="Escribe la edad"
                  onChange={handleChange}
                  value={values.EdadP}
                />
                <div className="Espacio"></div>
                <label>Telefono</label>
                <input
                className="input_L"
                  type="number"
                  name="TelefonoP"
                  placeholder="Escribe el Telefono"
                  onChange={handleChange}
                  value={values.TelefonoP}
                />
                <div className="Espacio"></div>
                <label>Correo</label>
                <input
                className="input_L"
                  type="email"
                  name="CorreoP"
                  placeholder="Escribe el Correo"
                  onChange={handleChange}
                  value={values.CorreoP}
                />
                </div>
                <div className="section1">
                <label>Turno</label>
                <input
                className="input_L"
                  type="text"
                  name="Turno"
                  placeholder="Escribe el Turno"
                  onChange={handleChange}
                  value={values.Turno}
                />
                <div className="Espacio"></div>
                <label>Numero de Ambulancia</label>
                <input
                className="input_L"
                  type="text"
                  name="Numero_Ambulancia"
                  placeholder="Escribe el Numero de Patrulla"
                  onChange={handleChange}
                  value={values.Numero_Ambulancia}
                />
                <div className="Espacio"></div>
                <label>Ubicacion</label>
                <input
                className="input_L"
                  type="text"
                  name="UbicacionP"
                  placeholder="Escribe la Ubicacion"
                  onChange={handleChange}
                  value={values.ubicacionP}
                />
                
                <label>Estado</label>
                <input
                className="input_L"
                  type="text"
                  name="Estado"
                  placeholder="Escribe el Estado"
                  onChange={handleChange}
                  value={values.Estado}
                />
                </div>
                </div>
                <button className="btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Guardar"}
                </button>
                
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      

      
      <table className="conte">
        <tbody>
          <tr className="lista">
           
            <th className='nu'>{task.id_Ambulacia }</th>
            <th className='name'>{task.NombresP}</th>
            <th className='name'>{task.ApellidosP}</th>
            
            <th className='name'>{task.TelefonoP}</th>
            <th className='name'>{task.Turno}</th>
            <th className='nu'>{task.Numero_Ambulancia}</th>
            <th className='name'>{task.Estado}</th>

            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Modal3(`/editA/${task.id_Ambulacia}`)}
              >
                <img src={imgEditar} className="img2" />
              </button>
            </td>
            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Eliminar(task.id_Ambulacia)}
              >
                <img src={imgBorrar} className="img1" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      
    </>
  );
}

/*

        <span>{task.createAt}</span>

        
 */

export default ListaDeAmbulancia;
