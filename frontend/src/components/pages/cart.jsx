import React from 'react';
import { useCartStore } from '../cartStorage';
import Card from '../common/Card';
import { Header, Footer } from '../partials';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <>
      <Header />
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
          <button onClick={() => clearCart()}>Vaciar carrito</button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;