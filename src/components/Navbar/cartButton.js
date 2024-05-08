import { useContext } from 'react';
import './_CartButton.scss';
import AppContext from '../../context/AppContext';

function CartButton() {

  const {cartItems , isCartVisible , setIsCartVisible} = useContext(AppContext);

  return (   

    <button
     type="button" 
     className="cart__icon"
     onClick={() => setIsCartVisible(!isCartVisible)}
     
     >
      <i class="bi bi-cart2"></i>
      { cartItems.length> 0 && <span>{cartItems.length}</span>}
    </button>

  );
}

export default CartButton;