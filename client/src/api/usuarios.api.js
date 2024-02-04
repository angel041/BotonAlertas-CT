import axios from 'axios'



export const getUsuariosRequest = async () =>
    await axios.get('http://localhost:4000/usuarios');

export const getUsuarioRequest  = async(id) =>
    await axios.get(`http://localhost:4000/usuarios/${id}`);

//export const createPruebaRequest = async (user) =>
  //  await axios.post('http://localhost:4000/usuarios', user)

export const createUserRequest = async (user) =>
    await axios.post('http://localhost:4000/usuarios', user)



export const updateUserRequest = async(id, newFields) =>
    await axios.put(`http://localhost:4000/usuarios/${id}`, newFields);

export const toggleUsuariosRequest = async(id, done) =>
    await axios.put(`http://localhost:4000/usuarios/${id}`, {
        done,
    });
export const deleteUsuariosRequest = async(id) =>
    await axios.delete(`http://localhost:4000/usuarios/${id}`);
