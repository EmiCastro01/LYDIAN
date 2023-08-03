import React from 'react';
import { useCartStore } from '../cartStorage';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const { cart, totalAmount } = useCartStore();

  const handleCheckout = () => {
    const data = {
      cart,
      totalAmount,
    }

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
      <h1>Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity} - Precio unitario: {item.price}
          </li>
        ))}
      </ul>
      <p>Total: {totalAmount}</p>

      <button onClick={handleCheckout}>Confirmar Pago</button>

      <Link to="/cart">Volver al carrito</Link>
    </>
  );
};

export default Checkout;