
const Card = (props) => {
  return (
    
      <div onClick={props.onClick}>

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
              </div>
            </div>
          </article>
      </div>
   
  );
};

export default Card;