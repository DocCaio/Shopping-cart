import React from "react";
import './_ProductCard.scss';

function ProductCard() {
  return (
    <section className="product-card">

      <img alt="product" className="card__image"/>

      <div className="card__infos">
        <h2 className="card__price">R$ 20</h2>
        <h2 className="card__title">Dev</h2>
        
      </div> 
         <button type="buton" className="button__add-card">
         <i class="bi bi-cart2"></i>
         </button>
    </section>
  )
}

export default ProductCard;