import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../cartStorage';
import {dataContext} from '../dataContext'

const Card = (props) => {
  const[isOnCart, setIsOnCart] = useState(false);
  const { addToCart } = useCartStore();
  const {userData} = useContext(dataContext)

  const handleAddToCart = (event) => {
    if(userData){
      event.preventDefault();
    
      addToCart({
        id: props.id,
        name: props.productName,
        price: props.productPrice,
        seller: props.productSeller,
        imageSrc: props.productImg,
      });
      console.log('Producto agregado al carrito:', props.productName);
    setIsOnCart(true)
    }else{
      window.location.href = '/register'
    }

  };

  return (
    <div>
      <article className="product-content">
        <div className="product-img">
          <img className="product" src={props.productImg} alt="product" />
        </div>
        <div className="product-details">
          <div className="product-name-info">
            <h3 >{props.productName}</h3>
          </div>
          <div calssName="product-price-info">
          <h3>$ {props.productPrice}</h3>
          </div>
          

          <div className="price-details">
           
          {!isOnCart ? (
  <Link className="link-button-add-cart"to="" onClick={handleAddToCart}>
  Agregar al Carrito
</Link> 
          ) : (
            < div className="is-on-cart-container">
              <p className="is-on-cart">Agregado</p>
            </div>
          )
           
          }
            <Link className="link-button-detail-product" to={`/detail-product/${props.id}`}>Detalles</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;