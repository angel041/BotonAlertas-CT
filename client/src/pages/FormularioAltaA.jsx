import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { useTasks } from '../context/Consultas';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu2 from './Menu2';
import '../css/FormularioAlta.css';
import iconoCon from '../media/ojo.png'
function FormularioAlta() {
    const { createAmbulancia, tasks } = useTasks();
    const [user] = useState({
        NombresP: "",
        ApellidosP:"",
        TelefonoP: "",
        PasswordP: "",
        CorreoP:"",
        Turno: "Matutino",
        Numero_Ambulancia: "",
    })
    const params = useParams();
    const navigate = useNavigate();
    var eye = document.getElementById('Eye1');
    var input = document.getElementById('InputContra1');

    const MostrarContra1 = async () => {
        console.log("Funciono");
        if(input.type=="password"){
	input.type="text"
	eye.style.opacity=0.8
	}else{
		input.type="password"
		eye.style.opacity=0.2
	}
        
      };
    useEffect(() => {
        const loadTask = async () => {
            if(params.id){
                const task = await getTask(params.id);
                setTask({
                    NombresP: task.NombresP,
                    ApellidosP: task.ApellidosP,
                    TelefonoP: task.TelefonoP,
                    PasswordP: task.PasswordP,
                    CorreoP: task.CorreoP,
                    Turno:task.Turno,
                    Numero_Ambulancia:task.Numero_Ambulancia,

                });
            }
        };
        loadTask();
        
    }, []);
    return (
        <div className="contenedorR">
            <Formik
                initialValues={user}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);

                    await createAmbulancia(values);
                    actions.resetForm();
                    navigate("/ambulancias")

                }}

            >


                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="contenedorA">

                            <div className="section1">


                                <div className="lu">
                                    <label className="nomm">Nombre(s)</label>
                                    <input type="text" name="NombresP" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.NombresP}
                                        required minlength="3"  maxlength="20"
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Apellidos</label>
                                    <input type="text" name="ApellidosP" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.ApellidosP}
                                        required minlength="10"  maxlength="25"
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Telefono</label>
                                    <input type="tel" pattern="^\d{10}$"  name="TelefonoP" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.TelefonoP}
                                        required  
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Contraseña</label>
                                    <input type="password" name="PasswordP"  id='InputContra1' autoComplete='off'
                                        onChange={handleChange}
                                        value={values.PasswordP}
                                        required  minlength="12" maxlength="20"
                                    />
                                    <button className="btnContra" onClick={() => MostrarContra1()}>
                                    <img src={iconoCon} className="ImgContra" id='Eye1' />

                                    </button>
                                </div>
                                  
                            </div>

                            <div className="section1">
                                


                                <div className="lu">
                                    <label className="nomm">Correo</label>
                                    <input type="email" name="CorreoP" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.CorreoP}
                                        required
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Turno</label>
                                    <br></br>
                                    <select id="select1" name="Turno"  value={values.Turno} onChange={handleChange} required>
                                            <option value="Matutino">Matutino </option>
                                            <option value="Vespertino">Vespertino</option>
                                            
                                    </select>
                                </div>
                                <div className="lu">
                                    <label className="nomm">Numero de Ambulancia</label>
                                    <input type="number" name="Numero_Ambulancia" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.Numero_Ambulancia}
                                        required min="10" max="9999"
                                    />
                                </div>

                                

                               
                               

                               
                            </div>


                            <button className='btnn' type='submit' disabled={isSubmitting}>
                                {isSubmitting ? "Guardando..." : "Guardar"}
                            </button>
                            
                            
                            
                        </div>
                        <Menu2></Menu2>
                        
                    </Form>
                )}
            </Formik>
            
        </div>
    )
}

export default FormularioAlta;



/**
    const { createUser, getUsuarios } = useUsuarios();
    const [user, editarUsuario] = useState({
        nombre: "",
        nacimiento: "",
        CURP: "",
        correo: "",
        contraseña: "",
        apellidos: "",
        edad: "",
        numero: "",
        telefono: "",
        repetiContraseña: "",
    })
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const cargarUsuario = async () => {
            if (params.id) {
                const user = await getUsuarios(params.id);
                editarUsuario({
                    nombre: user.nombre,
                    nacimiento: user.nacimiento,
                    CURP: user.CURP,
                    correo: user.correo,
                    contraseña: user.contraseña,
                    apellidos: user.apellidos,
                    edad: user.edad,
                    numero: user.numero,
                    telefono: user.telefono,
                    repetiContraseña: user.repetiContraseña,
                });
            }

        };
        cargarUsuario();

    }, []); 
    
    enableReinitialize={true}
    
     if (params.id) {
                        await updateUSer(params.id, values);
                    }
                    {
                        await createUser(values);
                        actions.resetForm();
                    }
                    navigate("/usuarios");
                    editarUsuario({
                        nombre: "",
                        nacimiento: "",
                        CURP: "",
                        correo: "",
                        contraseña: "",
                        apellidos: "",
                        edad: "",
                        numero: "",
                        telefono: "",
                        repetiContraseña: "",
                    });
                }}*/