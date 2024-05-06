import React, { useContext } from "react";
import './_CartItem.scss';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from "../../context/AppContext";

export default function CartItens({data}) { 

  const {cartItems  ,setCartItems} = useContext(AppContext);

  const{id ,thumbnail , title , price} = data;

  const handleRemoveItem = () => {
     const updatedItems = cartItems.filter((item) => item.id != id);
     setCartItems(updatedItems);
  }

  return (
    <section className="cart-item">
      <img
      src={thumbnail}
      alt="imagem do produto"
      className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button 
        type="button"
        className="button_remove-item"
        onClick={handleRemoveItem}        
        >
        <i class="bi bi-cart-dash-fill"></i>
        </button>
        
      </div>

    </section>
  )
}
