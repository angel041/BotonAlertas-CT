import axios from 'axios'

export const getEmergenciasRequest = async () =>
    await axios.get('http://localhost:4000/emergencia');

export const getEmergenciasContaRequest = async () =>
    await axios.get('http://localhost:4000/emergenciasConta');

export const getEmergenciaRequest  = async(id) =>
    await axios.get(`http://localhost:4000/emergencia/${id}`);

export const getEmergenciaDatosRequest  = async(id) =>
    await axios.get(`http://localhost:4000/emergenciaDatos/${id}`);

    export const deleteEmergenciaRequest = async(id) =>
    await axios.delete(`http://localhost:4000/emergencia/${id}`);

export const updateEmergenciaRequest = async(id, newFields) =>
    await axios.put(`http://localhost:4000/emergencia/${id}`, newFields);

