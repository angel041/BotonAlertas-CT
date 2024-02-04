import axios from 'axios'

export const getestablecimientosRequest = async () =>
    await axios.get('http://localhost:4000/establecimientos');

export const getestablecimientoRequest  = async(id) =>
    await axios.get(`http://localhost:4000/establecimientos/${id}`);

export const createestablecimientoRequest = async(Establecimiento) =>
    await axios.post('http://localhost:4000/establecimientos', Establecimiento);

export const updateestablecimientosRequest = async(id, newFields) =>
    await axios.put(`http://localhost:4000/establecimientos/${id}`, newFields);

export const toggleestablecimientosRequest = async(id, done) =>
    await axios.put(`http://localhost:4000/establecimientos/${id}`, {
        done,
    });
export const deleteestablecimientosRequest = async(id) =>
    await axios.delete(`http://localhost:4000/establecimientos/${id}`);