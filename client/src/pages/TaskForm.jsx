import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { useTasks } from '../context/Consultas';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu2 from './Menu2';
import '../css/TaskForm.css'


function TaskForm() {

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
        <div className=''>
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

export default TaskForm