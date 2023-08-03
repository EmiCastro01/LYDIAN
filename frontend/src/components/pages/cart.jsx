import React, { useState } from 'react';
import { useCartStore } from '../cartStorage';
import Card from '../common/Card';
import { Header, Footer } from '../partials';
import { Link } from 'react-router-dom'; // Importa Link desde 'react-router-dom'

const Cart = () => {
  const { cart, removeFromCart, clearCart, setTotalAmount } = useCartStore();
  const [total, setTotal] = useState(0);
  const [orderGenerated, setOrderGenerated] = useState(false); // Variable de estado para indicar si la orden de compra fue generada

  const handleGenerateOrder = () => {
    console.log('Generada la orden de compra');
    const totalAmount = cart.reduce((total, product) => total + product.price, 0);
    setTotalAmount(totalAmount);
    console.log('el total es ', totalAmount);
    setOrderGenerated(true); // Marcar la orden de compra como generada
  };

  return (
    <>
    <header className="header">
    <Header />
    </header>
    
      <div>
        <h1>Carrito de compras</h1>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <article className="cart-article" key={item.id}>
                <img src={item.imageSrc} alt={item.name} />
                <button onClick={() => removeFromCart(item.id)}>Eliminar del carrito</button>
              </article>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <>
            <button onClick={() => handleGenerateOrder()}>Generar orden de compra</button>
            {/* Mostrar el botón "Ir a Checkout" solo si la orden de compra ha sido generada */}
            {orderGenerated && (
              <Link to={'/checkout'}>
                Ir a Checkout
              </Link>
            )}
          </>
        )}
      </div>
      <footer className="footer">
      <Footer className="footer"/>
      </footer>
      
    </>
  );
};

export default Cart;