import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { dataContext } from '../dataContext'; 
import { useCookies}  from 'react-cookie';
const unDia = 60 * 60 * 24	
const Login = () => {
  const [cookies, setCookie] =  useCookies(['userData']);  
  const { setUserData } = useContext(dataContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    email: '',
    contrasena: ''
  });

  function handleFormSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:3000/login', datos)
      .then(response => {
        if (!response.data.canLogin) {
          console.log("SDASDASDSDADAS")
          setErrorMessage('Usuario o contraseña incorrectos');
        } else {
          setCookie('userData', response.data, { path: '/', maxAge: unDia }); //genro la cookie 
          setUserData(response.data); // guardo la info de la cookie en el contexto
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
          <div className="login-logo-container">
          <img src={logo} className="login-logo"/>
          </div>
          
        </article>
      </div>
    </>
  );
}

export default Login;