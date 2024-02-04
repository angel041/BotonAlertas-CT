import axios from 'axios'

export const getpoliciasRequest = async () =>
    await axios.get('http://localhost:4000/policias');

export const getpoliciaRequest  = async(id) =>
    await axios.get(`http://localhost:4000/policias/${id}`);

export const createpoliciaRequest = async(policia) =>
    await axios.post('http://localhost:4000/policias', policia);

export const updatepoliciasRequest = async(id, newFields) =>
    await axios.put(`http://localhost:4000/policias/${id}`, newFields);

export const togglepoliciasRequest = async(id, done) =>
    await axios.put(`http://localhost:4000/policias/${id}`, {
        done,
    });
export const deletepoliciasRequest = async(id) =>
    await axios.delete(`http://localhost:4000/policias/${id}`);