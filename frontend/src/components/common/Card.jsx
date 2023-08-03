import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../cartStorage';

const Card = (props) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = (event) => {
    event.preventDefault();
    // Llamar a la función addToCart del contexto para agregar el producto al carrito
    addToCart({
      id: props.id,
      name: props.productName,
      price: props.productPrice,
      seller: props.productSeller,
      imageSrc: props.productImg,
    });
    console.log('Producto agregado al carrito:', props.productName);
  };

  return (
    <div>
      <article className="product-content">
        <div className="product-img">
          <img className="product" src={props.productImg} alt="product" />
        </div>
        <div className="product-details">
          <div className="product-name">
            <h3>{props.productName}</h3>
          </div>
          <div className="price-details">
            <p>{props.productPrice}</p>
            <p>{props.productSeller}</p>
            <Link to="" onClick={handleAddToCart}>
              Agregar al Carrito
            </Link>
            <Link to={`/detail-product/${props.id}`}>Ver detalle</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;