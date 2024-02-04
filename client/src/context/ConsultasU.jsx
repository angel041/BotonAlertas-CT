import { createContext, useContext, useState } from 'react'
import {
    getAlertasRequest,
} from '../api/Alertas.api';

import {createUserRequest, getUsuariosRequest} from '../api/usuarios.api'
import { TaskContext } from './TaskContext';


export const useUsuarios = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("UseTasks must be used")
    }
    return context;
};




export const TaskContextProvite = ({ children }) => {//agrupa
    const [Usuarios, setUsuarios ] = useState([]);//recorer arreglo

    async function loadAlertas() {
        const response = await getAlertasRequest()
        setAlertas(response.data);
    };


}