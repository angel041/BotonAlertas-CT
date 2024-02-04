import axios from 'axios'

export const getambulanciasRequest = async () =>
    await axios.get('http://localhost:4000/ambulancias');

export const getambulanciaRequest  = async(id) =>
    await axios.get(`http://localhost:4000/ambulancias/${id}`);

export const createambulanciasRequest = async(ambulancias) =>
    await axios.post('http://localhost:4000/ambulancias', ambulancias);

export const updateambulanciasRequest = async(id, newFields) =>
    await axios.put(`http://localhost:4000/ambulancias/${id}`, newFields);

export const toggleambulanciasRequest = async(id, done) =>
    await axios.put(`http://localhost:4000/ambulancias/${id}`, {
        done,
    });
export const deleteambulanciasRequest = async(id) =>
    await axios.delete(`http://localhost:4000/ambulancias/${id}`);