import Card from '../common/Card';
import { Header, Footer } from '../partials';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([])
  const [priceFilter, setPriceFilter] = useState({
    min: "",
    max: "",
  });
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

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

  const filterProducts = () => {
    let filteredProducts = [...products];

    if (priceFilter.min !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseInt(priceFilter.min)
      );
    }

    if (priceFilter.max !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseInt(priceFilter.max)
      );
    }

    if (nameFilter) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    if (categoryFilter) {
      filteredProducts = filteredProducts.filter(
        (product) => product.type === categoryFilter
      );
    }

    return filteredProducts;
  };

  const handleMinPriceFilterChange = (event) => {
    setPriceFilter({ ...priceFilter, min: event.target.value });
  };
 
  const handleMaxPriceFilterChange = (event) => {
    setPriceFilter({ ...priceFilter, max: event.target.value });
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredProducts = filterProducts();

  return (
    <>
      <div className="main-container">
        <header className="header">
          <Header />
        </header>
        <div className="banner"></div>
        <div className="main-sections-container">
          <section className="left-section">
            <div className="left-content">
              <h2 className="product-path">Aplicar Filtros</h2>
            </div>
            <input
              type="text"
              placeholder="Buscar "
              onChange={handleNameFilterChange}
            />
            <input
              type="number"
              placeholder="Precio Mínimo"
              value={priceFilter.min}
              onChange={handleMinPriceFilterChange}
            />
            <input
              type="number"
              placeholder="Precio Máximo"
              value={priceFilter.max}
              onChange={handleMaxPriceFilterChange}
            />
            <select
              value={categoryFilter}
              onChange={handleCategoryFilterChange}
            >
              <option value="">Todas las Categorías</option>
              <option value="Accesorios">Accesorios</option>
              <option value="Percusion">Percusión</option>
              <option value="Cuerdas">Cuerdas</option>
              <option value="Viento">Vientos</option>
            </select>
          </section>
          <section className="products-section">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id}>
                  <Card 
                    productName={product.name}
                    productImg={product.imageSrc}
                    productPrice={product.price}
                    productSeller={product.seller}
                    id={product.id}
                  />
                </div>
              ))
            ) : (
              <h2>Sin Resultados</h2>
            )}
          </section>
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;