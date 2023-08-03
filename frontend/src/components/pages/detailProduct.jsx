import React , {useContext}from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCartStore } from '../cartStorage'
import { dataContext } from '../dataContext';

const DetailProduct = () => {
  const { id } = useParams();
  const { products } = useContext(dataContext);

  // Obtén el estado y las funciones del carrito desde Zustand
  const { addToCart } = useCartStore();

  const product = products.find((product) => product.id === parseInt(id));
  if (!product) {
    return <div>Cargando...</div>;
  }

  const handleAddToCart = () => {

    // Agregar el producto al carrito utilizando la función de Zustand
    addToCart(product);
    console.log("Producto agregado al carrito:", product);
  };

  return (
    <>
     

      <article className="product-detail-container">
        <div className="product-detail-img">
          <img src={product.imageSrc} alt={product.name} />
        </div>
        <div className="product-detail-content">
          <div className="product-detail-info">
            <h2 className="product-detail-name">{product.name}</h2>
            <h3 className="product-detail-price">{product.price}</h3>
            <p className="product-detail-description">{product.cap}</p>
          </div>
          <div className="product-detail-buttons">
            <Link to="/cart" type="button" className="buy-now">
              Ir al Carrito
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default DetailProduct;