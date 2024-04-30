document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemCount = document.querySelectorAll('.cart__icon span');
  const cartItemList = document.querySelectorAll('.cart__item');
  const cartIcon = document.querySelectorAll('.cart__total');
  const cartTotal = document.querySelectorAll('.cart__icon');
  const sidebar = document.getElementById('sidebar');

  let cartItems = [];
  let totalAmout = 0;

  addToCartButtons.forEach((button , index) => {
    button.addEventListener('click', () => {
       const item = {
          name:document.querySelectorAll('.card .card__title')[index].textContent,
          price: parseFloat(
             document.querySelectorAll('.price')[index].textContent.slice(1),
       ),
          quantity: 1,
       };

       const existingItem = cartItems.find(
          (cartItem) => cartItem.name === item.name,
       );
       if(existingItem) {
          existingItem.quantity++;
       }
       else {
          cartItems.push(item);
       }
 
       totalAmout += item.price;
 
       updateCartUI();
 
     });
    
   
   

  function updateCartUI() {
    updateCartItemCount (cartItems.length);
    updateCartList();
    updateCartTotal();
  }

  function updateCartItemCount(count) {
    cartItemCount.textContent = count;
  }

  function updateCartList() {
    cartItemList.innetHTML = '';
    cartItems.forEach((item, index) => {
       const cartItem = document.createElement('div');
       cartItem.classList.add('cart_item', 'individual-cart-item');
       cartItem.innerHTML= `
         <span>(${item.quantity}x)${item.name}</span>
         <span  className="cart_item-price" >${(item.price * item.quantity).toFixed(2,)}
         <button className="remove-btn" data-index="${index}"<i class="bi bi-alarm"></i>></button>
         </span>
       `;

       cartItemList.append(cartItem);
    });

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach((button) => {
       button.addEventListener('click', (event) => {
          const index = event.target.dataset.index;
          removeItemFromCart(index);
       });
    });
  }

  function removeItemFromCart(index) {
    const removeItem = cartItems.splice(index,1)[0];
    totalAmout -= removeItem.price * removeItem.quantity;
    updateCartUI();
  }

  function updateCartTotal() {
    cartTotal.textContent = `${totalAmout.toFixed(2)}`;
  }

  cartIcon.addEventListener('click', () => {
    sidebar.classList.toggle("open");
  });

  const closeButton = document.querySelector('.siderbar__close');
  closeButton.addEventListener('click' , (event) => {
    const index = event.target.dataset.index;
    removeItemFromCart(index);
  });

 });   
 
 }); 