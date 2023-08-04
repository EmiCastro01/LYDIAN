import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { dataContext } from '../dataContext';
import { useCartStore } from '../cartStorage';
import { useContext, useEffect, useState } from 'react';

const Header = () => {
  const { userData } = useContext(dataContext);
  const cart = useCartStore((state) => state.cart);
  const numProductsInCart = cart.length;
  console.log(cart.length)

  return (
    <>
      <img src={logo} alt="logo" className="logo" />  
      <ul className="nav-bar-links">
        <li>
          <Link to="/" className="index-link">INICIO</Link>
        </li>
        <li>
          <a className="index-link" >AYUDA</a>
        </li>
      </ul>
      <div className="icon-container">
        <div className="cart-and-cont">
        <Link to="/cart" className="material-symbols-outlined">
          shopping_cart
        </Link>
        {numProductsInCart > 0 && (
          <div className="cart-count">
            {numProductsInCart}
          </div>
        )}
        </div>
        <Link to="/user" className="material-symbols-outlined">
          account_circle
        </Link>
        <p className="name-user-info">{userData?.username}</p>
      </div>
    </>
  );
};

export default Header;