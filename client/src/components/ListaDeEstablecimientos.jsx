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

function ListaDeEstablecimientos({ task, user }) {
  
  const [isOpen3, setIsOpen3] = useState(false);

  const { getestablecimiento, deleteestablecimiento, updateestablecimiento } = useTasks();

  const [tasks2, setTask2] = useState({
    Nombre: "",
    Direccion: "",
    Horario:"",
    Encargado: "",
    
  })

  const params = useParams();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id_Establecimiento  );

  };
  const Eliminar = async () => {
    deleteestablecimiento(task.id_Establecimiento  );
    window.location.href = "/establecimientos";
    
  };

  const Modal3 = async () => {
    navigate(`/editE/${task.id_Establecimiento  }`);
    setIsOpen3(true);
  };
  
  useEffect(() => {
    const loadUsuarios = async () => {
      if (params.id_Establecimiento  ) {
        const task = await getestablecimiento(params.id);

        setTask2({
          Nombre: task.Nombre,
          Direccion: task.Direccion,
          finalHorario: task.	finalHorario,
          InicioHorario: task.InicioHorario,
          Encargado: task.Encargado,
          
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
                await updateestablecimiento(params.id, values);
                window.location.href = "/establecimientos";
               
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
                  name="Nombre"
                  placeholder="Escribe el Nombre"
                  onChange={handleChange}
                  value={values.Nombre}
                />
                <div className="Espacio"></div>
                <label>Direccion</label>
                <input
                className="input_L"
                  type="text"
                  name="Direccion"
                  placeholder="Escribe los apellidos"
                  onChange={handleChange}
                  value={values.Direccion}
                />
                <div className="Espacio"></div>
                
                
                </div>
                <div className="section1">
                <label>Horario</label>
                <input
                className="input_L"
                  type="text"
                  name="Horario"
                  placeholder="Escribe la edad"
                  onChange={handleChange}
                  value={values.Horario}
                />
                <div className="Espacio"></div>
                <label>Encargado</label>
                <input
                className="input_L"
                  type="text"
                  name="Encargado"
                  placeholder="Escribe el Telefono"
                  onChange={handleChange}
                  value={values.Encargado}
                />
                <div className="Espacio"></div>
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
           
            <th className='nu'>{task.id_Establecimiento }</th>
            <th className='name'>{task.Nombre}</th>
            <th className='direccion'>{task.Direccion}</th>
            <th className='name'>{task.InicioHorario+ " :"}{	" "+task.finalHorario}</th>
            <th className='name'>{task.Encargado}</th>
            
            

            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Modal3(`/editE/${task.id_Establecimiento }`)}
              >
                <img src={imgEditar} className="img2" />
              </button>
            </td>
            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Eliminar(task.id_Establecimiento )}
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

export default ListaDeEstablecimientos;
