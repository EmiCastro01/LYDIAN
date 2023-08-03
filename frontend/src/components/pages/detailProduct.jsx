
import React, { useContext, useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { dataContext } from '../dataContext';

const DetailProduct = (props) => {
 
  const{id} = useParams()
  const {products} = useContext(dataContext)
  console.log(id)
  const product = products.find((product) => product.id === parseInt(id));  
  if (!product) {
    return <div>Cargando...</div>;
  }
  return(
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
            <button type="button" className="buy-now">Comprar Ahora</button>
            <button type="button" className="go-to-cart">Agregar al Carrito</button>
          </div>
        </div>
      </article>
  </>
  )
  

}

export default DetailProduct