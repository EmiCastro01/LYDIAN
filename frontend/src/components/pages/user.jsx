import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {dataContext} from '../dataContext'
const User = () => {
  const {setUserData} = useContext(dataContext)
  const handleClick = (e) => {
    e.preventDefault();
    setUserData(null)
    window.location.href="/register"
  }
  return( 
<>
    <Link onClick={handleClick}>Cerrar Sesion</Link>
</>
  )
}
export default User