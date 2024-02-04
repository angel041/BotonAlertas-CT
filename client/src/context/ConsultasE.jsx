import { createContext, useContext, useState } from "react";
import {
    getestablecimientosRequest,
    createestablecimientoRequest,
} from "../api/Establecimientos.api";

import { TaskContext } from "./TaskContext";

export const useEstablecimientos = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("UseTasks must be used");
    }
    return context;
};
export const EstablecimientosContextProvite = ({ children }) => {
    //agrupa
    const [Establecimientos, setEstablecimientos] = useState([]); //recorer arreglo

    async function loadEstablecimientos() {
        const response = await getestablecimientosRequest();
        setEstablecimientos(response.data);
    }

    
    const createEstablecimiento = async (Establecimiento) => {
        try {
            await createEstablecimiento(Establecimiento);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <TaskContext.Provider value={{ Establecimientos, loadEstablecimientos, createEstablecimiento  }}>
            {children}
        </TaskContext.Provider>
    );
}
