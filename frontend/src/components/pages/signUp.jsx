import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignUp = () => {


  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    direccion: '',
    telefono: 1
  });

  function handleFormSubmit(event){
    event.preventDefault();
    console.log(datos)
 
    axios.post('http://localhost:3000/signup', datos)
    .then(response => console.log(response))
    .catch(err => console.log("KJASHDKJHASDKJHASKDJHASKJDHKJSAHD"))
  }
  

  
return(
  <>
  <div className="login-container">
  <article className="register-container">
    <h3 className="login-title">Registrarse</h3>
 <form onSubmit={handleFormSubmit} className="register-form" >
    <label htmlFor="name">Nombre</label>
    <input type="text" name="nombre" placeholder="Ingrese su nombre" id="name" required onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}/>
    <label htmlFor="email">E-mail</label>
    <input type="email" name="correo" placeholder="Ingrese su e-mail" id="email" required onChange={(e) => setDatos({ ...datos, correo: e.target.value })}/>
    <label htmlFor="lastname">Apellido</label>
    <input type="text" name="apellido" placeholder="Ingrese su apellido" id="lastname" required onChange={(e) => setDatos({ ...datos, apellido: e.target.value })}/>
    <label htmlFor="password">Contraseña</label>
    <input type="password" name="contrasena" placeholder="Ingrese su contraseña" id="password" required onChange={(e) => setDatos({ ...datos, contrasena: e.target.value })}/>
    <label htmlFor="domicilio">Domicilio</label>
    <input type="text" name="direccion" placeholder="Ingrese su domicilio" id="domicilio" required onChange={(e) => setDatos({ ...datos, direccion: e.target.value })}/>
    <label htmlFor="numcel">Numero de Telefono</label>
    <input type="number" name="telefono" placeholder="Telefono" id="numcel" required onChange={(e) => setDatos({ ...datos, telefono: parseInt(e.target.value) })}/>
    <button  className="submit-button" type='submit'>
            Registrarse
          </button>
    <Link to="/login">Ya tengo usuario</Link>
    </form>
 </article>
     
  </div>
 
    
</>


)


}
export default SignUp
