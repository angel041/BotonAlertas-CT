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

function  ListaDePolicias({ task, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const { getusuario, deletePolicia, updatePolicia } = useTasks();

  const [tasks2, setTask2] = useState({
    NombresPo: "",
    ApellidosPo: "",
    EdadPo: "",
    TelefonoPo: "",
    CorreoPo: "",
    TurnoPo: "",
    Numero_Patrulla: "",
    UbicacionPo: "",
    Estado:"",
  })

  const params = useParams();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id_Usuario);
    setIsOpen2(false);
  };
  const Eliminar = async () => {
    deletePolicia(task.id_Policia);
    window.location.href = "/policias";
  };

  const Modal1 = async () => {
    setIsOpen(true);
  };
  const Modal2 = async () => {
    setIsOpen(false);
    setIsOpen2(true);
  };
  const Modal3 = async () => {
    navigate(`/editP/${task.id_Policia}`);
    
    setIsOpen3(true);
    
    
      
    

    
  };
  const Modal4 = async () => {
    setIsOpen3(false);
  };
  useEffect(() => {
    const loadUsuarios = async () => {
      if (params.id_Usuario) {
        const task = await getusuario(params.id);

        setTask2({
          NombresPo: task.NombresPo,
          ApellidosPo: task.ApellidosPo,
          EdadPo: task.EdadPo,
          TelefonoPo: task.TelefonoPo,
          CorreoPo: task.CorreoPo,
          TurnoPo: task.TurnoPo,
          Numero_Patrulla: task.Numero_Patrulla,
          UbicacionPo: task.UbicacionPo,
          Estado: task.Estado,
        })
      }
    };
    loadUsuarios();
  }, []);

  return (
    <>
      <Modal open={isOpen} close={() => setIsOpen(false)}>
        <div className="contenido">
          <h1>Asignar ayuda</h1>
          <label>Numero de placa</label>
          <input type="text" className="btnM" />
          <br></br>
          <label>Numero de patrulla</label>
          <input type="text" className="btnM" />
          <br></br>
          <button className="BtnContinuar" onClick={() => Modal2(true)}>
            continuar
          </button>
        </div>
      </Modal>
      <Modal open={isOpen2} close={() => setIsOpen2(false)}>
        <div className="contenido">
          <h1>Asignar ayuda</h1>
          <label>Numero de Ambulacion</label>
          <input type="text" className="btnM" />
          <br></br>

          <br></br>
          <button
            className="BtnContinuar"
            onClick={() => handleDone(task.done)}
          >
            Confirmar
          </button>
        </div>
      </Modal>
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
                await updatePolicia(params.id, values);
                window.location.href = "/policias";

               
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
                  name="NombresPo"
                  placeholder="Escribe el Nombre"
                  onChange={handleChange}
                  value={values.NombresPo}
                />
                <div className="Espacio"></div>
                <label>Apellidos</label>
                <input
                className="input_L"
                  type="text"
                  name="ApellidosPo"
                  placeholder="Escribe los apellidos"
                  onChange={handleChange}
                  value={values.ApellidosPo}
                />
                <div className="Espacio"></div>
                <label>Edad</label>
                <input
                className="input_L"
                  type="text"
                  name="EdadPo"
                  placeholder="Escribe la edad"
                  onChange={handleChange}
                  value={values.EdadPo}
                />
                <div className="Espacio"></div>
                <label>Curp</label>
                <input
                className="input_L"
                  type="text"
                  name="TelefonoPo"
                  placeholder="Escribe el CURP"
                  onChange={handleChange}
                  value={values.TelefonoPo}
                />
                <div className="Espacio"></div>
                <label>CorreoU</label>
                <input
                className="input_L"
                  type="text"
                  name="CorreoPo"
                  placeholder="Escribe el Correo"
                  onChange={handleChange}
                  value={values.CorreoPo}
                />
                </div>
                <div className="section1">
                <label>Turno</label>
                <input
                className="input_L"
                  type="text"
                  name="TurnoPo"
                  placeholder="Escribe el Turno"
                  onChange={handleChange}
                  value={values.TurnoPo}
                />
                <div className="Espacio"></div>
                <label>Numero de Patrulla</label>
                <input
                className="input_L"
                  type="text"
                  name="Numero_Patrulla"
                  placeholder="Escribe el Numero de Patrulla"
                  onChange={handleChange}
                  value={values.Numero_Patrulla}
                />
                <div className="Espacio"></div>
                <label>Ubicacion</label>
                <input
                className="input_L"
                  type="text"
                  name="UbicacionPo"
                  placeholder="Escribe la Ubicacion"
                  onChange={handleChange}
                  value={values.UbicacionPo}
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
           
            <th className='nu'>{task.id_Policia }</th>
            <th className='name'>{task.NombresPo}</th>
            <th className='name'>{task.ApellidosPo}</th>
            <th className='nu'>{task.EdadPo}</th>
            <th className='name'>{task.TelefonoPo}</th>
            <th className='name'>{task.TurnoPo}</th>
            <th className='nu'>{task.Numero_Patrulla}</th>
            <th className='name'>{task.Estado}</th>

            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Modal3(`/editP/${task.id_Policia}`)}
              >
                <img src={imgEditar} className="img2" />
              </button>
            </td>
            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Eliminar(task.id_Policia)}
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

export default ListaDePolicias;
