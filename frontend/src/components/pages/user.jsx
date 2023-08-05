import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { dataContext } from '../dataContext';
import { Header, Footer } from '../partials';
import { useCookies} from 'react-cookie'

const User = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['userData']);
  const { userData, setUserData } = useContext(dataContext);

  const handleClick = (e) => {
    e.preventDefault();
    setUserData(null);
    removeCookie('userData', { path: '/' });
    window.location.href = "/register";
  };

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <div className="user-main-container">
        <div className="user-info-container">
          <h2>{userData?.username}</h2>
          <p><strong>Domicilio:</strong> {userData?.domicilio}</p>
          <p><strong>ID:</strong> {userData?.id}</p>
        </div>
        <Link onClick={handleClick} className="logout-button">Cerrar Sesión</Link>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default User;