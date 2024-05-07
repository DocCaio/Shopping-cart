import './_Cart.scss';
import React, { useContext, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import Modal from './Modal';

function Cart() {

  const [openModal , setOpenModal] = useState(false);

  

  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc ,item) => item.price + acc, 0);
  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className='cart-items'>
     {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
        
        </div>
      <div className='cart-resume'>{formatCurrency(totalPrice , 'BRL')}</div> 
      <button
      onClick={() => setOpenModal(true)}
     type="button"
     className='buyBtn'
     > 
     <i class="bi bi-bag-check-fill"></i>
     Finalizar compra
    </button>    
       <Modal isOpen={true}/>
     
    </section>

  );
}

export default Cart;