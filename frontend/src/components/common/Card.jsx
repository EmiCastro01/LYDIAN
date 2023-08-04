import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../cartStorage';
import {dataContext} from '../dataContext'

const Card = (props) => {
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
           
          
            <Link className="link-button-add-cart"to="" onClick={handleAddToCart}>
              Agregar al Carrito
            </Link>
            <Link className="link-button-detail-product" to={`/detail-product/${props.id}`}>Ver detalle</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;