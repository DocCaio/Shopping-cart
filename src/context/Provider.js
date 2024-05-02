import React, { useState } from "react";
import propTypes from 'prop-types';
import AppContext from "./AppContext";

function Provider({children}) {

  const [products ,setProdutcs] = useState([]);
  const [cartItems ,setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const value = {
    products ,
    setProdutcs,
    loading, 
    setLoading,
    cartItems ,
    setCartItems,
  };


  return (    
   <AppContext.Provider value={value}>
    {children}
   </AppContext.Provider>
  );
}

Provider.propTypes = {
  children:propTypes.any,
}.isRequired;

export default Provider;