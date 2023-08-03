import Card from '../common/Card'
import {Header, Footer} from '../partials'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


  const Home = () => {
   //IMPLEMENTAR EL TEMA DE LA SESION 
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error al hacer la solicitud:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
    return (
        <>
        <div className="main-container">
    <header className="header">
      <Header />
    </header> 
      <div className="banner">
      </div>
      <div className="main-sections-container">
        <section className="left-section">
          <div className="left-content">
            <p className="product-path"></p>
          </div>
          <select name="filtros">
            <option value="usados">Usados</option>
            <option value="nuevos">Nuevos</option>
            <option value="filtros" defaultValue >Filtros</option>
          </select>
          <select name="ubicacion">
            <option value="Cordoba">Usados</option>
            <option value="Buenos Aires">Nuevos</option>
            <option value="ubicacion" defaultValue >Ubicacion</option>
          </select>
        </section>
        <section className="products-section">

        {products.map((product) => (
        <div key={product.id}>
          <Card productName={product.name} productImg={product.imageSrc} productPrice={product.price} productSeller={product.seller}
          onClick={() => { location.href = `/detail-product/${product.id}` }}/>
        </div>
      ))}
        </section>
      </div>
    <footer className="footer">
      <Footer />
    </footer>
  </div>
        
        </>


    )
  }

  export default Home