import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import {dataContext} from '../dataContext';
import {useContext} from 'react';

const Header = () => {
  const {userData} = useContext(dataContext)
  return (
   <>
    <img src={logo} alt="logo" className="logo" />
<ul className="nav-bar-links">
  <li>
    <Link to="/" className="index-link" >INICIO</Link>
  </li>
  <li>
    <a className="index-link" href="/">AYUDA</a>
  </li>
</ul>
  <div className="icon-container">
    <Link to="/cart"  className="material-symbols-outlined">
      shopping_cart
      </Link>
      <div className="user-info-container">
  <Link to="/user" className="material-symbols-outlined">
    account_circle
    <p>{userData}</p>
  </Link>
</div>     
       
  </div>
   </>
  );
};

export default Header;