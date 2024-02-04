import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { useEstablecimientos } from '../context/ConsultasE';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu2 from './Menu2';
import { useForm } from "react-hook-form";
import '../css/FormularioAlta.css';
function FormularioAlta() {
    const { register , handleSubmit, formState:{errors} } = useForm();
   
    
    const { createEstablecimiento, tasks } = useEstablecimientos();
    const [Establecimiento] = useState({
        Nombre: "",
        Direccion:"",
        Encargado: "",
        InicioHorario:"",
        finalHorario:"",

    })
    const params = useParams();
    const navigate = useNavigate();
    return (
        <div className="contenedorR">
            <Formik
                initialValues={Establecimiento}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    

                    await createEstablecimiento(values);
                    actions.resetForm();
                    navigate("/establecimientos")

                }}

            >


                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="contenedorA">

                            <div className="section1">


                                <div className="lu">
                                    <label className="nomm">Nombre(s)</label>
                                    <input type="text" name="Nombre" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.Nombre}
                                        required minlength="3"  maxlength="20"/>
                                        
                                </div>
                                <div className="lu">
                                    <label className="nomm">Direccion</label>
                                    <input type="text" name="Direccion" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.Direccion}
                                        required minlength="30" maxlength="70"/>
                                </div>
                                
                                  
                            </div>

                            <div className="section1">


                                <div className="lu">
                                    <label className="nomm">Horario</label>
                                    <br></br>
                                    <br></br>
                                    <div className='section1'>
                                    <label className="num">Inicio</label>
                                    <br></br>
                                    <input type="time" name="InicioHorario" id='inputnum' autoComplete='off'
                                        onChange={handleChange}
                                        value={values.InicioHorario}
                                        required
                                        />
                                        
                                    </div>
                                    <br></br>
                                    <div className='section1'>
                                        <label className="num">Final</label>
                                        <br></br>
                                    <input type="time" name="finalHorario" id='inputnum' autoComplete='off'
                                        onChange={handleChange}
                                        value={values.finalHorario}
                                        required
                                        />
                                        </div>

                                    
                                </div>
                                <div className="lu">
                                    <label className="nomm">Encargado</label>
                                    <input type="text" name="Encargado" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.Encargado}
                                        required minlength="10" maxlength="20"/>
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