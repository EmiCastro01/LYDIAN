import {useNavigate} from 'react-router-dom'
import {useEffect } from 'react'


const ThanksMessage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 2000); 

    return () => clearTimeout(timeoutId)
  }, [navigate]);

  return (
    <>
       <div className="purchase-confirmation-container">
        <h2 className="purchase-confirmation-title">Gracias por tu compra</h2>
        <p className="purchase-confirmation-message">
          ¡Gracias por realizar tu compra! Tu pedido está en proceso.
        </p>
      </div>
    </>
  );
};

export default ThanksMessage