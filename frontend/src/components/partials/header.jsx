import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
   <>
    <img src={logo} alt="logo" className="logo" />
<ul className="nav-bar-links">
  <li>
    <Link to="/" className="index-link" >INICIO</Link>
  </li>
  <li>
    <a className="help-link" href="/">AYUDA</a>
  </li>
</ul>
  <div className="icon-container">
    <Link to="/cart"  className="material-symbols-outlined">
      shopping_cart
      </Link>
      <Link to="/user" className="material-symbols-outlined">
        account_circle
        </Link> 
        <Link className="material-symbols-outlined">
          search
          </Link>             
  </div>
   </>
  );
};

export default Header;