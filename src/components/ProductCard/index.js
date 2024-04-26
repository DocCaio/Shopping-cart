import React from "react";
import './_ProductCard.scss';
import prototypes from 'prop-types';

function ProductCard( {data}) {

  const {title, thumbnail , price} = data;

  return (
    <section className="product-card">

      <img src={thumbnail} alt="product" className="card__image"/>

      <div className="card__infos">
        <h2 className="card__price">{price}</h2>
        <h2 className="card__title">{title}</h2>
        
      </div> 
         <button type="buton" className="button__add-card">
         <i class="bi bi-cart2"></i>
         </button>
    </section>
  )
}

export default ProductCard;

ProductCard.prototypes = {
  data: prototypes.shape({}),
}.isRequired