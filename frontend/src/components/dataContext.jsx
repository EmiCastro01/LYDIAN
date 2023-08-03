import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useCartStore } from './cartStorage';

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart, clearCart } = useCartStore();

  useEffect(() => {
    // Realizar la petición axios solo una vez al cargar la página
    axios.get("http://localhost:3000/products")
      .then((response) => response.data)
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <dataContext.Provider value={{ products, addToCart, removeFromCart, clearCart }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;