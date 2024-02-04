import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { useTasks } from '../context/Consultas';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu2 from './Menu2';
import '../css/FormularioAlta.css';
import iconoCon from '../media/ojo.png'
function FormularioAlta() {
    const { createPolicia, tasks } = useTasks();
    const [user] = useState({
        NombresPo: "",
        ApellidosPo:"",
        EdadPo: "",
        TelefonoPo: "",
        PasswordPo: "",
        CorreoPo:"",
        CurpPo: "",
        TurnoPo: "Matutino",
        Numero_Patrulla: "",
    })
    const params = useParams();
    const navigate = useNavigate();
    var eye = document.getElementById('Eye');
    var input = document.getElementById('InputContra');

    const MostrarContra = async () => {
        console.log("Funciono");
        if(input.type=="password"){
	input.type="text"
	eye.style.opacity=0.8
	}else{
		input.type="password"
		eye.style.opacity=0.2
	}
        
      };


    return (
        <>
        <div className="contenedorR">
            <Formik
                initialValues={user}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);

                    await createPolicia(values);
                    actions.resetForm();
                    navigate("/policias")

                }}

            >


                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="contenedorA">

                            <div className="section1">


                                <div className="lu">
                                    <label className="nomm">Nombre(s)</label>
                                    <input type="text" name="NombresPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.NombresPo}
                                        required minlength="3" maxlength="20"
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Apellidos</label>
                                    <input type="text" name="ApellidosPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.ApellidosPo}
                                        required minlength="10" maxlength="20"
                                    />
                                </div>

                                <div className="lu">
                                    <label className="nomm">Edad</label>
                                    <input type="number" name="EdadPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.EdadPo}
                                        required min="18" max="70"
                                    />
                                </div>

                                <div className="lu">
                                    <label className="nomm">Telefono</label>
                                    <input type="tel" pattern="^\d{10}$"name="TelefonoPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.TelefonoPo}
                                        required 
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Contraseña</label>
                                    <input type="password" name="PasswordPo" id='InputContra' autoComplete='off'
                                        onChange={handleChange}
                                        value={values.PasswordPo}
                                        required  minlength="12" maxlength="20"
                                    />
                                    <button className="btnContra" onClick={() => MostrarContra()}>
                                    <img src={iconoCon} className="ImgContra" id='Eye' />

                                    </button>
                                    
                                    
                                </div>
                                

                               

                                
                            </div>

                            <div className="section1">


                                <div className="lu">
                                    <label className="nomm">Correo</label>
                                    <input type="email" name="CorreoPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.CorreoPo}
                                        required
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Curp</label>
                                    <input type="text" name="CurpPo" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.CurpPo}
                                        required  minlength="18" maxlength="18" 
                                    />
                                </div>
                                <div className="lu">
                                    <label className="nomm">Turno</label>
                                    <br></br>
                                    <select id="select1" name="TurnoPo"  value={values.TurnoPo} onChange={handleChange} required>
                                            <option value="Matutino">Matutino </option>
                                            <option value="Vespertino">Vespertino</option>
                                            
                                    </select>
                                </div>

                                <div className="lu">
                                    <label className="nomm">Numero de Patrulla</label>
                                    <input type="password" name="Numero_Patrulla" autoComplete='off'
                                        onChange={handleChange}
                                        value={values.Numero_Patrulla}
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
        </>
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