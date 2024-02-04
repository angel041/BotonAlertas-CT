import React from 'react'
import '../css/listaDeAlertas.css'
import { Form, Formik } from 'formik'
import { useTasks } from '../context/Consultas';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const DIV_MODAL_STYLE = {
    position : 'fixed',
    top: '50%',
    left: '50%',
    transform : 'translate(-50%,-50%)',
    backgroundColor: '#FFE5BA',
    padding: '50px',
    zIndex: 1000
}
const DIV_OVERLAY_STYLE = {
    position : 'fixed',
    top : 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor : 'rgba(0,0,0,.7)',
    zIndex : 1000
}
const BotonX = {
    position : 'absolute',
    top : 0,
    right: 0,
    with:'150px',
    height: '50px',
    backgroundColor: '#FFE5BA',
    zIndex : 1000,
    border: '1px solid #d0d0d0',
}
const LetraP = {
    position : 'absolute',
    top : 0,
    right: 0,
    with:'150px',
    backgroundColor: '#FFE5BA',
    zIndex : 1000,
    fontSize:' 40px',
}
export default function Modal({children, open, close}) {
    if(!open) return null
    const { createTask, getTask, updateTask } = useTasks();
    const [task, setTask] = useState({
        title: "",
        description: "",
    }
    )
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadTask = async () => {
            if(params.id){
                const task = await getTask(params.id);
                setTask({
                    title: task.title,
                    description: task.description,
                });
            }
        };
        loadTask();
        
    }, []);

    return (
        <div className='titulos'>
            <h1>{params.id ? "Editar Tarea":"Nueva Tarea"}</h1>
            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    
                    if(params.id){
                        await updateTask(params.id, values);
                    }else{
                        await createTask(values);
                        actions.resetForm();
                    }
                    navigate("/alerta");
                    setTask({
                        title:"",
                        description:"",
                    });
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Titulo</label>
                        <input type="text" name='title' placeholder='Escribe el titulo'
                            onChange={handleChange}
                            value={values.title}
                        />

                        <label>Description</label>
                        <textarea name="description" rows="3" placeholder='Escribe la descripcion'
                            onChange={handleChange}
                            value={values.description}
                        >
                        </textarea>
                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Guardar"}
                        </button>
                    </Form>
                )}
            </Formik>
            <Menu2></Menu2>
        </div>
    )
}