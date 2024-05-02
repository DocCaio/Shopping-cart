import './_Cart.scss';
import React from 'react';
import CartItens from '../CartItems/CartItems'

function Cart() {
  return (
    <section className='cart'>
      <div className='cart-itens'>Itens</div>
      <div className='cart-resume'>Suas compras</div>
      <CartItens data={{thumbnail: '' , title:'', price:'123'}}/>
    </section>

  );
}

export default Cart;