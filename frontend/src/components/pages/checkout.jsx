import React from 'react';
import { useCartStore } from '../cartStorage';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Header, Footer} from '../partials'

const Checkout = () => {
  const { cart, totalAmount } = useCartStore();

  const handleCheckout = () => {
    const data = {
      cart,
      totalAmount,
    };

    axios.post('http://localhost:3000/checkout', data)
      .then((response) => {
        console.log('Orden de compra enviada al backend:', response.data);
      })
      .catch((error) => {
        console.error('Error al enviar la orden de compra al backend:', error);
      });
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
            <span className="item-quantity">Cantidad: {item.quantity}</span>
            <span className="item-price">Precio unitario: ${item.price}</span>
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