import React from "react";
import './_CartItem.scss';
import formatCurrency from '../../utils/formatCurrency';

export default function CartItens({data}) { 

  const{thumbnail , title , price} = data;

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
        >
        <i class="bi bi-cart-dash-fill"></i>
        </button>
        
      </div>

    </section>
  )
}
