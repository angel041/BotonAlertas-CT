import React, { element } from 'react';
import '../css/Login.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';


const baseUrl="http://localhost:4000/monitorei";
const cookies = new Cookies();

class Login extends React.Component {
    state={
        form:{
            username: '',
            password: '',
        }
    };

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    

    render() {
        return (
       <div className="App">
        <input className='us' placeholder='Usuario'name="username" onChange={this.handleChange} type="text" />
        <input placeholder='Contraseña' type="password"  name="password" onChange={this.handleChange} />
        <span className='abajo'/>
       
        <span className='arriba'/>
        
        <button className=" botonInicio" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
     </div>
     
        );
    }
}

export default Login;