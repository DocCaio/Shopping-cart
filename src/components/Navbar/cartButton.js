import './_CartButton.scss';

function CartButton() {
  return (

    <button type="button" className="cart__icon">
      <i class="bi bi-cart2"></i>
      <span>0</span>
    </button>

  );
}

export default CartButton;