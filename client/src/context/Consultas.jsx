import { createContext, useContext, useState } from "react";
import {
  getEmergenciasRequest,
  getEmergenciaRequest,
  deleteEmergenciaRequest,
  updateEmergenciaRequest,
  getEmergenciaDatosRequest,
  getEmergenciasContaRequest

} from "../api/Emergencias.api";

import {
  createUserRequest,
  getUsuariosRequest,
  toggleUsuariosRequest,
  deleteUsuariosRequest,
  getUsuarioRequest,
  updateUserRequest,
} from "../api/usuarios.api";
import { TaskContext } from "./TaskContext";
import {
  getestablecimientosRequest,
  createestablecimientoRequest,
  getestablecimientoRequest,
  updateestablecimientosRequest,
  deleteestablecimientosRequest,
} from "../api/Establecimientos.api";
import {
  createpoliciaRequest,
  getpoliciaRequest,
  togglepoliciasRequest,
  deletepoliciasRequest,
  getpoliciasRequest,
  updatepoliciasRequest,
} from "../api/Policia.api";
import {
  getambulanciasRequest,
  getambulanciaRequest,
  createambulanciasRequest,
  updateambulanciasRequest,
  deleteambulanciasRequest,
} from "../api/Ambulancia.api";
import {
  getAlertaRequest,
  deleteAlertasRequest,
  updateAlertasRequest
} from "../api/Alertas.api"

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("UseTasks must be used");
  }
  return context;
};

export const TaskContextProvite = ({ children }) => {
  //agrupa
  const [tasks, setTasks, tasks2, setTasks2] = useState([]); //recorer arreglo

  async function loadTasks() {
    const response = await getEmergenciasRequest();
    setTasks(response.data);
  }

  async function loadUsuarios() {
    const response = await getUsuariosRequest();
    setTasks(response.data);
  }
  async function loadUsuarios2() {
    const response = await getUsuariosRequest();
    setTasks2(response.data);
  }
  async function loadPolicia() {
    const response = await getpoliciasRequest();
    setTasks(response.data);
  }
  async function loadEstablecimientos() {
    const response = await getestablecimientosRequest();
    setTasks(response.data);
  }
  async function loadAmbulancia() {
    const response = await getambulanciasRequest();
    setTasks(response.data);
  }
  async function loadEmergencia() {
    const response = await getEmergenciasRequest();
    setTasks(response.data);
  }
  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
      tasks.map((task) =>
        task.id === id ? (task.done = task.done === 0 ? 1 : 0) : task.done
      );
      setTasks([...tasks]);
    } catch (error) {
      console.error(error);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////
    //EMERGENCIA

  ////////////////////////////////////////////////////////////////////////////////////////////////
  const deleteEmergencias = async (id) => {
    try {
      const response = await deleteEmergenciaRequest(id);
      setTasks(tasks.filter((task) => task.id !== id)); //buscar el que sea diferente
    } catch (error) {
      console.error(error);
    }
  };
  const getEmergenciasDatos =async(id) =>{
    try {
      const response = await getEmergenciaDatosRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }

  }
  const getEmergenciasContar =async(id) =>{
    try {
      const response = await getEmergenciasContaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }

  }
  const getEmergencias = async (id) => {
    try {
      const response = await updateEmergenciaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const updateEmergencias = async (id, newFields) => {
    try {
      const response = await updateEmergenciaRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  /////////////////////////////////////////////////////////////////////////////////////////////////
    //ALERTAS

  ////////////////////////////////////////////////////////////////////////////////////////////////
  const deleteAlertas = async (id) => {
    try {
      const response = await deleteAlertasRequest(id);
      setTasks(tasks.filter((task) => task.id !== id)); //buscar el que sea diferente
    } catch (error) {
      console.error(error);
    }
  };
  
  const getAlertas = async (id) => {
    try {
      const response = await getAlertaRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const updateAlertas= async (id, newFields) => {
    try {
      const response = await updateAlertasRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
   /////////////////////////////////////////////////////////////////////////////////////////////////
    //usuarios

  ////////////////////////////////////////////////////////////////////////////////////////////////
  const createUser = async (tasks) => {
    try {
      await createUserRequest(tasks);
    } catch (error) {
      console.error(error);
    }
  };
  const toggleUserDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleUsuariosRequest(id, taskFound.done === 0 ? true : false);
      tasks.map((task) =>
        task.id === id ? (task.done = task.done === 0 ? 1 : 0) : task.done
      );
      setTasks([...tasks]);
    } catch (error) {
      console.error(error);
    }
  };

  const getusuario = async (id_Usuario) => {
    try {
      const response = await getUsuarioRequest(id_Usuario);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const deleteusuarios = async (id) => {
    try {
      const response = await deleteUsuariosRequest(id);
      setTasks(tasks.filter((task) => task.id !== id)); //buscar el que sea diferente
    } catch (error) {
      console.error(error);
    }
  };

  const updateusuarios = async (id, newFields) => {
    try {
      const response = await updateUserRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  //

  //Establecimientos

  const createEstablecimiento = async (tasks) => {
    try {
      await createestablecimientoRequest(tasks);
    } catch (error) {
      console.error(error);
    }
  };
  const getestablecimiento = async (id_Usuario) => {
    try {
      const response = await getestablecimientosRequest(id_Usuario);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const deleteestablecimiento = async (id) => {
    try {
      const response = await deleteestablecimientosRequest(id);
      setTasks(tasks.filter((task) => task.id !== id)); //buscar el que sea diferente
    } catch (error) {
      console.error(error);
    }
  };

  const updateestablecimiento = async (id, newFields) => {
    try {
      const response = await updateestablecimientosRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  //Ambulancia
  const createAmbulancia = async (tasks) => {
    try {
      await createambulanciasRequest(tasks);
    } catch (error) {
      console.error(error);
    }
  };
  const getambulancia = async (id_Usuario) => {
    try {
      const response = await getambulanciaRequest(id_Usuario);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const deleteAmbulancia = async (id) => {
    try {
      const response = await deleteambulanciasRequest(id);
      setTasks(tasks.filter((task) => task.id !== id)); //buscar el que sea diferente
    } catch (error) {
      console.error(error);
    }
  };

  const updateambulancia = async (id, newFields) => {
    try {
      const response = await updateambulanciasRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  //Policia
  const createPolicia = async (tasks) => {
    try {
      await createpoliciaRequest(tasks);
    } catch (error) {
      console.error(error);
    }
  };
  const deletePolicia = async (id) => {
    try {
      const response = await deletepoliciasRequest(id);
      setTasks(tasks.filter((task) => task.id !== id)); //buscar el que sea diferente
    } catch (error) {
      console.error(error);
    }
  };

  const updatePolicia = async (id, newFields) => {
    try {
      const response = await updatepoliciasRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        tasks2,
        loadTasks,
        loadEstablecimientos,
        loadPolicia,
        loadAmbulancia,
        deleteAlertas,
        getAlertas,
        updateAlertas,
        getEmergencias,
        updateusuarios,
        toggleTaskDone,
        getestablecimiento,
        updateEmergencias,
        getEmergenciasDatos,
        getEmergenciasContar,
        deleteestablecimiento,
        updateestablecimiento,
        createUser,
        getusuario,
        loadEmergencia,
        getambulancia,
        deletePolicia,
        deleteAmbulancia,
        updateambulancia,
        updatePolicia,
        deleteEmergencias,
        loadUsuarios,
        loadUsuarios2,
        createEstablecimiento,
        createAmbulancia,
        createPolicia,
        toggleUserDone,
        deleteusuarios,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
