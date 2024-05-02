import React, { useContext } from "react";
import './_ProductCard.scss';
import prototypes from 'prop-types';
import formatCurrency from "../../utils/formatCurrency";
import AppContext from '../../context/AppContext';

function ProductCard( {data}) {

  const {title, thumbnail , price} = data;

  const {setCartItems} = useContext(AppContext);

  const handleAddCart = () => {

  };

  return (
    <section className="product-card">

     <img 
    src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
    alt="product" 
    className="card__image"
/>


      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
        
      </div> 
         <button 
         type="buton" c
         className="button__add-card"
         onClick={handleAddCart}


         >
         <i class="bi bi-cart2"></i>
         </button>
    </section>
  )
}

export default ProductCard;

ProductCard.prototypes = {
  data: prototypes.shape({}),
}.isRequired