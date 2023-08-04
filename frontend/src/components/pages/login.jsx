import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Header, Footer } from '../partials';

const Login = () => {
  const [canLogIn, setCanLogIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    email: '',
    contrasena: ''
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("HOLAAA");

    axios.post('http://localhost:3000/login', datos)
      .then(response => {
        console.log("Respuesta del servidor:")
        console.log(response.data.canLogin);
        setCanLogIn(response.data.canLogin);
        if (!response.data.canLogin) {
          setErrorMessage('Usuario o contraseña incorrectos'); 
        } else {
          navigate('/'); 
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <>
     
      <div className="login-container">
        <article className="register-container">
          <h3 className="login-title">Iniciar Sesión</h3>
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
          <form className="register-form" onSubmit={handleFormSubmit}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" onChange={(e) => setDatos({ ...datos, email: e.target.value })} />
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" onChange={(e) => setDatos({ ...datos, contrasena: e.target.value })} />
            <div className="forgot-password">
              <Link to="/login">Olvidé mi contraseña</Link>
              <Link to="/register">Registrarse</Link>
            </div>
            <button className="submit-button" type='submit'>
              Ingresar
            </button>
          </form>
        </article>
      </div>
     
    </>
  );
}

export default Login;