import React, { useState, useEffect } from 'react';
import { useCartStore } from '../cartStorage';
import Card from '../common/Card';
import { Header, Footer } from '../partials';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, setTotalAmount } = useCartStore();
  const [total, setTotal] = useState(0);
  const [orderGenerated, setOrderGenerated] = useState(false);

  const handleGenerateOrder = () => {
    console.log('Generada la orden de compra');
    const totalAmount = cart.reduce((total, product) => total + product.price, 0);
    setTotalAmount(totalAmount);
    console.log('el total es ', totalAmount);
    setOrderGenerated(true);
  };

  useEffect(() => {
    // Calcula el total cada vez que cambie el carrito de compras
    const totalAmount = cart.reduce((total, product) => total + product.price, 0);
    setTotal(totalAmount);
  }, [cart]);

  return (
    <>
      <header className="header">
        <Header />
      </header>

      <div className="cart-container">
        <div className="cart-title">
        <h1 >Carrito de compras</h1>
        </div>
        
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <article className="cart-article" key={item.id}>
                <img src={item.imageSrc} alt={item.name} />
                <h3>{item.name}</h3>
                <button className="delete-article" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </article>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <>
            <div className="cart-total">
              <h4>Total: <span className="total-cart">$ {total}</span></h4>
            </div>
            <button className="cart-buy-button" onClick={() => handleGenerateOrder()}>Generar orden de compra</button>
            {orderGenerated && (
              <Link to={'/checkout'} className="cart-buy-button">
                Ir a Checkout
              </Link>
            )}
          </>
        )}
      </div>
      <footer className="footer">
        <Footer className="footer" />
      </footer>

    </>
  );
};

export default Cart;