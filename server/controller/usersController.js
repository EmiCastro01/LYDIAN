const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt');
const usersFilePath = path.join(__dirname, '../data/users.json');
const Users = require('../models').user;
const { writeUser, getUsers } = require('../services/userAcces')




const users = (req,res,next) => {
  return Users.findAll()
  .then(users => {
    if (users.length > 0) {
      res.json(users); 
    } else {
      const err = new Error('No hay productos');
      err.status = 404;
      return next(err);
    }
  })
  .catch(error => {
    console.log(error);
    const err = new Error(error);
    err.status = 500;
    return next(err);
  });
}

const homeView = (req, res) => {
  res.render(path.join(__dirname, '../views/bienvenidos.ejs'))
}



const cart = (req, res) => {
  res.render(path.join(__dirname, '../views/cart.ejs'))
}

const login = async (req, res) => {
  console.log(req.body)
  const {email, contrasena} = req.body;

  try{
      const user = await Users.findOne({ where: { email: email } });
      if (user && bcrypt.compareSync(contrasena, user.password)) {
          res.json({
           canLogin: true,
           username: user.name,
           domicilio: user.domicilio, 
           id: user.id
            })
        req.session.dir = user.domicilio    
        req.session.userId = user.id 
        req.session.us = user.name;
        req.session.showGreeting = true;
        console.log(req.session)
        res.status(200)
      } else {
        const error = "Error en el registro"
        res.send(error)
        req.session.showGreeting = false;
       console.error("Usuario o contraseña incorrectas")
      }

  }catch (error) {
  console.error('Error al iniciar sesión:', error);
  res.status(500).send('Error al iniciar sesión');
}
}



const loginView = (req, res) => {
  res.render(path.join(__dirname, '../views/login.ejs'))
}

const register = (req, res) => {
res.render(path.join(__dirname, '../views/register.ejs'))
}

const signUp = async (req, res, next) => { 
  console.log("EU")
  console.log(req.body.nombre);
 const errors = validationResult(req);
 console.log(errors)

  /*if (!errors.isEmpty()) {
    // Si hay errores de validación, envía los errores en la respuesta.
    return res.status(422).json({ errors: errors.array() });
  } else { */
    try {
      const lastUser = await Users.findOne({
        order: [['id', 'DESC']]
      });
      let newID = 0;

      if (lastUser) {
        newID = lastUser.id + 1;
      } else {
        newID = 1;
      }

      const userData = {
        id: newID,
        name: req.body.nombre,
        email: req.body.correo,
        lastname: req.body.apellido,
        password: req.body.contrasena,
        domicilio: req.body.direccion,
        numcel: req.body.telefono,
      };
      await writeUser(userData);
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      console.error('Error al agregar usuario', error);
      res.status(500).json({ error: 'Error al agregar usuario' });
    }
// }
};

const signUpView = (req, res) => {
res.render(path.join(__dirname, '../views/signUp.ejs'))
}

const logout = (req, res) => {
  req.session.destroy()
  res.clearCookie('login-session')
  res.redirect('/')
}
 
const errorView = (req,res) =>{
  res.render(path.join(__dirname, '../views/error.ejs'),
  {
      title: 'No Encontrado'
  }
  )
}

const checkout = async (req, res) => {
  const checkoutData ={
    total: req.body.totalAmount,
    usID: req.body.Id,
    domicilio: req.body.domicilio 
  } 
console.log(checkoutData)
  try {
    await writeCheckout(checkoutData)
    console.log("Checkout completa cargada en la Base de Datos")
  } catch (err) {
    console.error("error al cargar la cuenta en la base de datos: ", err)
  }

}
module.exports = {
  homeView,
  cart,
  register,
  login,
  loginView,
  signUp,
  signUpView,
  logout,
  users,
  errorView,
  checkout,
  
}

