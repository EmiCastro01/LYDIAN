import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    email: '',
    contrasena: ''
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(datos);

    axios.post('http://localhost:3000/login', datos)
      .then(response => {
        console.log(response)})
      .catch(err => console.log("error"))
      navigate('/');
  }


  return (
    <>
      <article className="register-container">
        <h3 className="login-title">Inciar Sesión</h3>
        <form className="register-form" onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={(e) => setDatos({ ...datos, email: e.target.value })} />
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" onChange={(e) => setDatos({ ...datos, contrasena: e.target.value })} />
          <div className="forgot-password">
            <Link to="/login">Olvidé mi contraseña</Link>
            <Link to="/register">Registrarse</Link>
          </div>
          <button  className="submit-button" type='submit'>
            Ingresar
          </button>
        </form>
      </article>
    </>
  )
}

export default Login;