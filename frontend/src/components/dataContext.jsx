import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useCartStore } from './cartStorage';
const unDia = 60 * 60 * 24	

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart, clearCart } = useCartStore();
  const [userData, setUserData] = useState(null);
  const [cookies, setCookie] = useCookies(['userData']);

  useEffect(() => {
    if (cookies.userData) {
      setUserData(cookies.userData);
    }

    axios.get('http://localhost:3000/products')
      .then((response) => response.data)
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (userData) {
      setCookie('userData', userData, { path: '/', maxAge:unDia }); 
    }
  }, [userData, setCookie]);

  return (
    <dataContext.Provider
      value={{ products, addToCart, removeFromCart, clearCart, userData, setUserData }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;