import logo from '../../assets/logo.png'
import facebookIcon from '../../assets/facebookIcon.svg'
import isntagramIcon from '../../assets/instagramIcon.svg'
import whatsappIcon from '../../assets/whatsappIcon.svg'


const Footer = () => {
  return (
   <>
<div className="copyright">
  <p>©2023 Lydian,INC.</p>
</div>
<div className="links">
  <ul className="links-links">
    <li><a href="#">Deja tu opinión</a></li>
    <li><a href="#">Más</a></li>
  </ul>
</div>
<div className="logo-footer">
  <img className="footer-logo" src={logo} alt="logo-footer" />
</div>
<div className="social-links">
  <img className="facebook-icon" src={facebookIcon} alt="facebook-icon" />
  <img className="whatsapp-icon"src={whatsappIcon} alt="whatsapp-icon" />
  <img className="instagram-icon" src={isntagramIcon} alt="instagram-icon" />

</div>
   </>
  );
};

export default Footer;