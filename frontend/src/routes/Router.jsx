import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from '../components/pages/home';
import Login from '../components/pages/login';
import  SignUp  from '../components/pages/signUp';
import DetailProduct from "../components/pages/detailProduct";
import Cart from "../components/pages/cart";
 

export const routesConfig = [
  {
    path: '/',
    component: Home,
    name: 'INICIO'
  },
  {
    path: '/login',
    component: Login,
    name: 'INICIO SESION'
  },
  {
    path: '/register',
    component: SignUp,
    name: 'REGISTRO'
  },
  {
    path: '*',
    component: Error,
    name: 'ERROR'
  },
  {
    path: '/detail-product/:id',
    component: DetailProduct,
    name: 'DETALLE DEL PRODUCTO'
  },
  {
    path: 'cart',
    component: Cart,
    name: 'CARRITO'
  }

];

const RouterApp = () => (

  <Routes>
    {routesConfig.map((route) => (
      <Route key={route.path} path={route.path} element={<route.component />} />
    ))}
  </Routes>

);

export default RouterApp;