import axios from 'axios'

export const getAlertasRequest = async () =>
    await axios.get('http://localhost:4000/alertas');

export const getAlertaRequest  = async(id) =>
    await axios.get(`http://localhost:4000/alertas/${id}`);

export const deleteAlertasRequest = async(id) =>
    await axios.delete(`http://localhost:4000/alertas/${id}`);

export const updateAlertasRequest = async(id, newFields) =>
    await axios.put(`http://localhost:4000/alertas/${id}`, newFields);

