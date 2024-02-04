import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTasks } from "../context/Consultas";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../css/listaDeAlertas.css";
import Modal from "./Modal3";
import Modal33 from "./Modal2";
import { Form, Formik } from "formik";
import imgBorrar from "../media/boton-eliminar.png";
import imgEditar from "../media/editar.png";
import ImgPoli from "../media/patrulla.png";
import ImgAmbu from "../media/ambulanciaIMG.png";
import { getpoliciasRequest, getpoliciaRequest } from "../api/Policia.api";
import { getambulanciasRequest } from "../api/Ambulancia.api";
import { getEmergenciaRequest } from "../api/Emergencias.api";

function ListaDeAlertas({ task, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const Eliminar = async () => {
    deleteEmergencias(task.id_Emergencia);
    window.location.href = "/alerta";
  };

  const params = useParams();

  const [policias, setPolicias] = useState([]);
  const [ambulancias, setAmbulancias] = useState([]);

  const {
    toggleTaskDone,
    deleteEmergencias,
    getEmergenciasDatos,
    updateEmergencias,
    getAlertas,
    updateAlertas,
  } = useTasks();
  const navigate = useNavigate();
  useEffect(() => {
    async function cargarTarea() {
      const response = await getpoliciasRequest();
      setPolicias(response.data);
    }
    async function cargarTarea2() {
      const response = await getambulanciasRequest();
      setAmbulancias(response.data);
    }
    const loadEmergencias = async () => {};
    cargarTarea(), cargarTarea2(), loadEmergencias();
  }, []);

  const handleDone = async () => {
    await toggleTaskDone(task.id);
    setIsOpen2(false);
  };
  const Modal1 = async () => {
    let IdEmergencia = task.id_Emergencia;
    console.log(IdEmergencia);

    setIsOpen(true);
  };
  const Modal2 = async () => {
    let IdEmergencia = task.id_Emergencia;
    console.log(IdEmergencia);

    setIsOpen2(true, IdEmergencia);
  };
  function AgregacionPolicia(IdEmergencia) {
    var Idpolicia = document.getElementById("listapolicia").value;
    var Objeto_Emergencia = getEmergenciasDatos(IdEmergencia);
    Objeto_Emergencia.id_Policia = Idpolicia;
    Objeto_Emergencia.Visto='visto';
    Objeto_Emergencia.EstadoE=2
    updateEmergencias(IdEmergencia, Objeto_Emergencia);
    window.location.href = "/alerta";
    
  }
  function AgregacionAmbulancia(IdEmergencia) {
    var Idambulancia = document.getElementById("listaambulancia").value;
    var Objeto_Emergencia = getEmergenciasDatos(IdEmergencia);
    Objeto_Emergencia.id_Ambulacia = Idambulancia;
    Objeto_Emergencia.Visto='visto';
    Objeto_Emergencia.EstadoE=2
    updateEmergencias(IdEmergencia, Objeto_Emergencia);
    window.location.href = "/alerta";
    
    
  }
  const Modal3 = async () => {
    if (task.id_Policia == 16 && task.id_Ambulacia == 16) {
      console.log("No Asido Asignado");
      setIsOpen5(true);
    }

    if (task.id_Ambulacia != 16 && task.EstadoE == 3) {
      setIsOpen6(true);
    } else {
      if (task.id_Ambulacia != 16) {
        navigate(`/editAlerta/${task.id_Emergencia}`);
        console.log("Eres una Ambulancias");
        setIsOpen4(true);
      }
    }
    if (task.id_Policia != 16 && task.EstadoE == 3) {
      setIsOpen6(true);
    } else {
      if (task.id_Policia != 16) {
        navigate(`/editAlerta/${task.id_Usuario_E}`);
        console.log("Eres una Policias");

        setIsOpen3(true);
      }
    }
  };

  return (
    <>
      <Modal open={isOpen} close={() => setIsOpen(false)}>
        <div className="contenido">
          <label for="emails">
            <h1>Asignar ayuda Policia {task.id_Emergencia}</h1>
          </label>
          <p>Numero de usuario</p>
          <input
            className="btnM"
            list="policias"
            required
            size="64"
            name="listapolicia"
            id="listapolicia"
          />

          <datalist className="ContenedorDeLista" id="policias">
            {policias.map((policia) => (
              <div key={policia.id_Policia}>
                <option value={policia.id_Policia}>
                  <div>
                    <p> </p>Numero_Patrulla: {policia.Numero_Patrulla}
                    <br></br>
                    <p> </p>Ubicacion: {policia.UbicacionPo}
                    <br></br>
                    <p> </p>Estado: {policia.Estado}
                  </div>
                </option>
              </div>
            ))}
          </datalist>

          <button
            className="BtnContinuar"
            onClick={() =>
              AgregacionPolicia(task.id_Emergencia)
            }
          >
            continuar
          </button>
        </div>
      </Modal>
      <Modal open={isOpen2} close={() => setIsOpen2(false)}>
        <div className="contenido">
          <label for="emails">
            <h1>Asignar ayuda Ambulancia</h1>
          </label>
          <p>Numero de usuario</p>
          <input
            className="btnM"
            list="ambulancias"
            required
            size="64"
            name="listaambulancia"
            id="listaambulancia"
          />

          <datalist className="ContenedorDeLista" id="ambulancias">
            {ambulancias.map((ambulancias) => (
              <div key={ambulancias.id_Ambulacia}>
                <option value={ambulancias.id_Ambulacia}>
                  <div>
                    <p> </p>Numero_Ambulancia: {ambulancias.Numero_Ambulancia}
                    <br></br>
                    <p> </p>Ubicacion: {ambulancias.ubicacionP}
                    <br></br>
                    <p> </p>Estado: {ambulancias.Estado}
                  </div>
                </option>
              </div>
            ))}
          </datalist>
          <button
            className="BtnContinuar"
            onClick={() =>
              AgregacionAmbulancia(task.id_Emergencia)
            }
          >
            continuar
          </button>
        </div>
      </Modal>

      <Modal open={isOpen5} close={() => setIsOpen5(false)}>
        <div className="titulos">
          <p className="Asignado">No asido Asignado la ayuda</p>
          <button className="BtnContinuar" onClick={() => setIsOpen5(false)}>
            Continuar
          </button>
        </div>
      </Modal>
      <Modal open={isOpen6} close={() => setIsOpen6(false)}>
        <div className="titulos">
          <p className="Asignado">Ya se Finalizo</p>
          <button className="BtnContinuar" onClick={() => setIsOpen6(false)}>
            Continuar
          </button>
        </div>
      </Modal>

      <Modal33 open={isOpen4} close={() => setIsOpen4(false)}>
        <div className="titulos">
          <h1>"Se esta atendiendo la emergencia de Ambulancias"</h1>
          <br></br>
          <br></br>
          <Formik
            initialValues={task}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              if (params.id) {
                console.log("actualizacion");
                var Idambulancia =
                  document.getElementById("id_Ambulacia").value;
                var Objeto_Emergencia = getEmergenciasDatos(params.id);

                Objeto_Emergencia.id_Ambulacia = Idambulancia;
                console.log(Idambulancia);
                console.log(Objeto_Emergencia);
                await updateEmergencias(params.id, Objeto_Emergencia);
                window.location.href = "/alerta";
              } else {
                await createUser(values);
                actions.resetForm();
              }

              navigate("/alerta");
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                {console.log(values)}
                {console.log(params.id)}

                <div className="contenedorA">
                  <div className="section1">
                    <label className="nomm">Numero de Emergencia</label>
                    <br></br>
                    <input
                      className="input_L"
                      type="text"
                      name="id_Usuario_E"
                      placeholder="Escribe el titulo"
                      onChange={handleChange}
                      value={values.id_Emergencia}
                      disabled
                    />
                    <div className="Espacio"></div>

                    <label className="nomm">Nombre del Usuario</label>
                    <br></br>
                    <input
                      className="input_L"
                      type="text"
                      name="NombreU"
                      placeholder="Escribe el titulo"
                      onChange={handleChange}
                      value={values.NombreU}
                      disabled
                    />
                    <div className="Espacio"></div>
                    <label className="nomm">Edad del Usuario</label>
                    <br></br>
                    <input
                      className="input_L"
                      type="text"
                      name="EdadU"
                      placeholder="Escribe el titulo"
                      onChange={handleChange}
                      value={values.EdadU}
                      disabled
                    />
                  </div>
                  <div className="section1">
                    <label className="nomm">Numero de Ambulancia</label>
                    <br></br>
                    <input
                      className="btnM"
                      list="listaambulancia"
                      required
                      size="64"
                      name="id_Ambulacia"
                      id="id_Ambulacia"
                      onChange={handleChange}
                      value={values.id_Ambulacia}
                    />

                    <datalist
                      className="ContenedorDeLista"
                      id="listaambulancia"
                    >
                      {ambulancias.map((ambulancias) => (
                        <div key={ambulancias.id_Ambulacia}>
                          <option value={ambulancias.id_Ambulacia}>
                            <div>
                              <p> </p>Numero_Ambulancia:{" "}
                              {ambulancias.Numero_Ambulancia}
                              <br></br>
                              <p> </p>Ubicacion: {ambulancias.ubicacionP}
                              <br></br>
                              <p> </p>Estado: {ambulancias.Estado}
                            </div>
                          </option>
                        </div>
                      ))}
                    </datalist>
                    <div className="Espacio"></div>
                    <label className="nomm">Nombre del Paramedico</label>
                    <br></br>
                    <input
                      className="input_L"
                      type="text"
                      name="NombresP	 "
                      placeholder="Escribe el titulo"
                      onChange={handleChange}
                      value={values.NombresP}
                      disabled
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
      </Modal33>

      <Modal33 open={isOpen3} close={() => setIsOpen3(false)}>
        <div className="titulos">
          <h1>{params.id ? "Editar Emergencia Policias" : "Nueva Tarea"}</h1>
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
                var Idpolicia = document.getElementById("id_Policias").value;
                var Objeto_Emergencia = getEmergenciasDatos(params.id);

                Objeto_Emergencia.id_Policia = Idpolicia;
                console.log(Idpolicia);
                console.log(Objeto_Emergencia);
                await updateEmergencias(params.id, Objeto_Emergencia);
                window.location.href = "/alerta";
              } else {
                await createUser(values);
                actions.resetForm();
              }

              navigate("/alerta");
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                {console.log(values)}
                {console.log(params.id)}
                {console.log(task)}

                <div className="contenedorA">
                  <div className="section1">
                    <label className="nomm">Numero de Emergencia</label>
                    <br></br>
                    <input
                      className="input_L"
                      type="text"
                      name="id_Usuario_E"
                      placeholder="Escribe el titulo"
                      onChange={handleChange}
                      value={values.id_Emergencia}
                      disabled
                    />
                    <div className="Espacio"></div>
                    <label className="nomm">Nombre del Usuario</label>
                    <br></br>
                    <input
                      className="input_L"
                      type="text"
                      name="NombreU"
                      placeholder="Escribe el titulo"
                      onChange={handleChange}
                      value={values.NombreU}
                      disabled
                    />
                    <div className="Espacio"></div>
                    <label className="nomm">Edad del Usuario</label>
                    <br></br>
                    <input
                      className="input_L"
                      type="text"
                      name="EdadU"
                      placeholder="Escribe el titulo"
                      onChange={handleChange}
                      value={values.EdadU}
                      disabled
                    />
                    
                  </div>
                  <div className="section1">
                    <label className="nomm">Numero de Policia</label>
                    <br></br>
                    <input
                      className="btnM"
                      list="listapolicias1"
                      required
                      size="64"
                      name="id_Policia"
                      id="id_Policias"
                      onChange={handleChange}
                      value={values.id_Policia}
                    />

                    <datalist className="ContenedorDeLista" id="listapolicias1">
                      {policias.map((policia) => (
                        <div key={policia.id_Policia}>
                          <option value={policia.id_Policia}>
                            <div>
                              <p> </p>Numero_Patrulla: {policia.Numero_Patrulla}
                              <br></br>
                              <p> </p>Ubicacion: {policia.UbicacionPo}
                              <br></br>
                              <p> </p>Estado: {policia.Estado}
                            </div>
                          </option>
                        </div>
                      ))}
                    </datalist>
                    <div className="Espacio"></div>
                    <label className="nomm">Nombre del Policias</label>
                    <br></br>
                    <input
                      className="input_L"
                      type="text"
                      name="NombresPo	"
                      placeholder="Escribe el titulo"
                      onChange={handleChange}
                      value={values.NombresPo}
                      disabled
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
      </Modal33>
      <table className="conte">
        <tbody>
          <tr className="lista">
            <td className="name">Numero de Emergencia </td>
            <td className="name">{task.id_Emergencia}</td>
            <td className="ususL">Atendida por el usuario </td>

            <td className="nu">
              {
                <span className="simbolo">
                  {task.id_Ambulacia != 16
                    ? task.id_Ambulacia
                    : task.id_Policia != 16
                    ? task.id_Policia
                    : "no se atiende"}
                </span>
              }
            </td>
            <td className="estaC">
              <span className="simbolo">
                {task.Tipo != 1 ? (
                  <img src={ImgAmbu} className="imgIcono2" />
                ) : (
                  <img src={ImgPoli} className="imgIcono" />
                )}
              </span>
            </td>
            <td className="estaL">
              <span className="simbolo">
                {" "}
                {task.EstadoE == 1 ? (
                  <div className="RBL"></div>
                ) : task.EstadoE == 2 ? (
                  <div className="RAL"></div>
                ) : task.EstadoE == 3 ? (
                  <div className="RVL"></div>
                ) : (
                  ""
                )}
              </span>
            </td>
            <td className="btnL">
              <span className="simbolo">
                {task.Tipo == 1 && task.id_Policia == 16 ? (
                  <button
                    className="btnLA"
                    id="abrirModal"
                    onClick={() => Modal1(task.Idpolicia)}
                  >
                    Policia
                  </button>
                ) : task.Tipo == 2 && task.id_Ambulacia == 16 ? (
                  <button
                    className="btnLA"
                    id="abrirModal"
                    onClick={() => Modal2(task.id_Ambulacia)}
                  >
                    Ambulancia
                  </button>
                ) : task.EstadoE == 2 ? (
                  "Se esta atendiendo"
                ) : task.EstadoE == 3 ? (
                  "Se finalizo"
                ) : (
                  ""
                )}
              </span>
            </td>

            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Modal3(`/editAlerta/${task.id_Emergencia}`)}
              >
                <img src={imgEditar} className="img2" />
              </button>
            </td>
            <td className="btnimg">
              <button
                className="btnimg"
                onClick={() => Eliminar(task.id_Emergencia)}
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

export default ListaDeAlertas;
