import { createContext,useState, useEffect } from 'react';
import axios from 'axios'
export const dataContext = createContext();

const DataProvider = ({children}) =>{



  const [products, setProducts]= useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then((response) => {return response.data
    })
    .then((products) => {
      return setProducts(products)
    }).catch((error) => {
      console.error(error);
    });
  },[])

  return(
    <dataContext.Provider value={{products}}>
      {children}
    </dataContext.Provider>
  )
}

export default DataProvider;