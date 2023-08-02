import logo from '../../assets/logo.png'

const Header = () => {
  return (
   <>
    <img src={logo} alt="logo" className="logo" />
<ul className="nav-bar-links">
  <li>
    <a className="index-link" href="#">INICIO</a>
  </li>
  <li>
    <a className="help-link" href="/">AYUDA</a>
  </li>
</ul>
  <div className="icon-container">
    <a href="cart">
    <span className="material-symbols-outlined">
      shopping_cart
      </span>
    </a>
      <span className="material-symbols-outlined">
        account_circle
        </span> 
        <span className="material-symbols-outlined">
          search
          </span>             
  </div>
   </>
  );
};

export default Header;