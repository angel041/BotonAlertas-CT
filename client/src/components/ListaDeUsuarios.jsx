import React from "react";
import { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import { useTasks } from "../context/Consultas";
import { useParams, useNavigate } from "react-router-dom";
import "../css/listaDeAlertas.css";
import Modal from "./Modal2";
import imgBorrar from "../media/boton-eliminar.png";
import imgEditar from "../media/editar.png";
import '../css/Modal_LU.css';

function ListaDeUsuarios({ task, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const { getusuario, deleteusuarios, createUser, updateusuarios } = useTasks();

  const [tasks2, setTask2] = useState({
    NombreU: "",
    ApellidosU: "",
    EdadU: "",
    CurpU: "",
    CorreoU: "",
    password: "",
    Registro_Facial: "",
    Fecha_NaU: "",
  })

  const params = useParams();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id_Usuario);
    setIsOpen2(false);
  };
  const Eliminar = async () => {
    deleteusuarios(task.id_Usuario);
    window.location.href = "/usuarios";
  };

  const Modal1 = async () => {
    setIsOpen(true);
  };
  const Modal2 = async () => {
    setIsOpen(false);
    setIsOpen2(true);
  };
  const Modal3 = async () => {
    navigate(`/editU/${task.id_Usuario}`);
    
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
          NombreU: task.NombreU,
          ApellidosU: task.ApellidosU,
          EdadU: task.EdadU,
          CurpU: task.CurpU,
          CorreoU: task.CorreoU,
          password: task.password,
          Registro_Facial: task.Registro_Facial,
          Fecha_NaU: task.Fecha_NaU,
        })
      }
    };
    loadUsuarios();
  }, []);

  return (
    <>
      
      <Modal open={isOpen3} close={() => setIsOpen3(false)}>
        <div className="titulos">
          <h1>{params.id ? "Editar Usuario" : "Nueva Tarea"}</h1>
          <br></br>
          <br></br>
          <Formik
            initialValues={task}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              console.log(values);
              console.log(params.id);

              if (params.id) {
                console.log("actualizacion");
                await updateusuarios(params.id, values);

                window.location.href = "/usuarios";
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
                <label className="nomm">Nombre</label>
                <br></br>
                <input
                className="input_L"
                  type="text"
                  name="NombreU"
                  placeholder="Escribe el titulo"
                  onChange={handleChange}
                  value={values.NombreU}
                />
                <div className="Espacio">

                </div>
                <br></br>
                <label className="nomm">Apellidos</label>
                <br></br>
                <input
                className="input_L"
                  type="text"
                  name="ApellidosU"
                  placeholder="Escribe el titulo"
                  onChange={handleChange}
                  value={values.ApellidosU}
                />
                <div className="Espacio">

                </div>  
                <label className="nomm">EdadU</label>
                <br></br>
                <input
                className="input_L"
                  type="text"
                  name="EdadU"
                  placeholder="Escribe el titulo"
                  onChange={handleChange}
                  value={values.EdadU}
                />
                <div className="Espacio">

                </div>

                </div>
                <div className="section1">


                <label className="nomm">CurpU</label>
                <br></br>
                <input
                className="input_L"
                  type="text"
                  name="CurpU"
                  placeholder="Escribe el titulo"
                  onChange={handleChange}
                  value={values.CurpU}
                />
                <div className="Espacio">

                </div>
                <label className="nomm">CorreoU</label>
                <br></br>
                <input
                className="input_L"
                  type="text"
                  name="CorreoU"
                  placeholder="Escribe el titulo"
                  onChange={handleChange}
                  value={values.CorreoU}
                />
                <div className="Espacio">

                </div>
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
            <td className="nu">{task.id_Usuario}</td>
            <td className="name">{task.NombreU}</td>
            <td className="name">{task.ApellidosU}</td>
            <td className="nu">{task.EdadU}</td>
            <td className="CURP">{task.CurpU}</td>
            <td className="Correo">{task.CorreoU}</td>

            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Modal3(`/editU/${task.id_Usuario}`)}
              >
                <img src={imgEditar} className="img2" />
              </button>
            </td>
            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Eliminar(task.id_Usuario)}
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

export default ListaDeUsuarios;
