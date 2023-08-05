import React , { useContext}from 'react';
import { useCartStore } from '../cartStorage';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Header, Footer} from '../partials'
import { dataContext } from '../dataContext'; 

const Checkout = () => {
  const {userData} = useContext(dataContext)
  const { cart, totalAmount, clearCart } = useCartStore();
  const navigate = useNavigate();

  const handleCheckout = () => {
    const Id = userData.id
    const domicilio = userData.domicilio
    const data = {
      Id,
      domicilio,
      totalAmount,
    };

    axios.post('http://localhost:3000/checkout', data)
      .then((response) => {
      })
      .catch((error) => {
        console.error('Error al enviar la orden de compra al backend:', error);
      });
      clearCart()
      navigate('/thanks')
  };

  return (
   <>
   <header className="header">
   <Header />
   </header>
   
   <div className="checkout-container">
      <h1 className="checkout-title">Orden de Compra</h1>
      <ul className="checkout-items">
        {cart.map((item) => (
          <li key={item.id} className="checkout-item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">$ {item.price}</span>
          </li>
        ))}
      </ul>
      <p className="checkout-total">Total: ${totalAmount}</p>

      <button className="checkout-button" onClick={handleCheckout}>Confirmar Pago</button>

      <Link to="/cart" className="checkout-back-link">Volver al carrito</Link>
    </div>
    <footer className="footer">
    <Footer />
    </footer>
    
   </> 
    
  );
};

export default Checkout;