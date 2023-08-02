
const SignUp = () => {


  const [datos, setDatos] = useState({
    name: '',
    email: '',
    lastname: '',
    password: '',
    domicilio: '',
    telnum: '',
  });
<>
<article className="register-container">
        <h3 className="register-title">Nueva Cuenta</h3>
          <form className="register-form">
            <label for="name">Nombre</label>
            <input type="text" name="name" id="name"
            onChange={(e) => setDatos({ ...datos, name: e.target.value })}/>
            <label for="lastname">Apellido</label>
            <input type="text" name="lastname" id="lastname"
            onChange={(e) => setDatos({ ...datos, lastname: e.target.value })}/>
            <label for="e-mail">Email</label>
            <input type="email" name="e-mail" id="e-mail"
            onChange={(e) => setDatos({ ...datos, email: e.target.value })}/>
            <label for="password">Contraseña</label>
            <input type="password" name="password" id="password"
            onChange={(e) => setDatos({ ...datos, password: e.target.value })}/>
            <label for="domicilio">Domicilio</label>
            <input type="text" name="text" id="text"
            onChange={(e) => setDatos({ ...datos, domicilio: e.target.value })}/>
            <label for="telnum">Numero de Celular</label>
            <input type="number" name="telnum" id="telnum"
            onChange={(e) => setDatos({ ...datos, telnum: e.target.value })}/>
            <input type="submit" name="submit" id="submit" value="Registrarse" className="submit-button"/>
          </form>
            <div className="already-registered">
              <p>Ya estás registrado? </p>
              <a href="../views/login.html"> Inicia sesión</a>
            </div>
      </article>
</>

}
export default SignUp



