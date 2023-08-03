const path = require('path');
const {check} = require('express-validator');
const userController = require('../controller/usersController.js'); 
const productsController = require('../controller/productsController.js'); 
const { getUsers } = require('../services/userAcces.js');


const routes = (app) => {

  app.get('/products', productsController.productsView);
  app.get('/users', userController.usersView);
  app.get('/home', userController.homeView);
  app.get('/', userController.signUpView);
  app.get('/detail-product/:id',  productsController.detailProduct);
  app.get('/register', userController.register);
  app.get('/loginView', userController.loginView);
  app.get('/cart', userController.cart);
  app.get('/signUp', userController.signUpView);
  app.post('/signup',[
                      check('nombre').isLength({min : 5}).exists().isAlpha().custom(async (value) => {
                        const users = await getUsers()
                        const aux = users.find(user => user.name === value)
                        if (aux) {
                            throw new Error('El usuario no esta disponible')
                        }
                        return true;
                    }
                      ),
                      check('apellido').isAlpha().withMessage('Must be alphabetical characters').exists(),
                      check('contrasena').exists().isAlphanumeric().withMessage('Password must be alphanumeric')
                     ] ,userController.signUp);
app.post('/login', userController.login);
app.get('/logout', userController.logout);
app.get('/error', userController.errorView);
app.post('/checkout', userController.checkout);
}

module.exports = {
  routes,
}