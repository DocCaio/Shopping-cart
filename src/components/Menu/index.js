import './_Menu-list.scss';
import Headset  from './assets/item-1.jpg';
import Notebook  from './assets/item-2.jpg'; 
import Phone  from './assets/item-3.jpg'; 
import Tablet  from './assets/item-4.png'; 
import Tv  from './assets/item-5.jpg'; 
import Gamer  from './assets/item-6.jpg'; 
import Chair  from './assets/item-8.jpg'; 
import Bar  from './assets/item-7.jpg'; 

export default function Navbar() { 

  document.addEventListener('DOMContentLoaded'), () => {
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

      });

     
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
    })
   
   }
   
  
    return (
       <main>
        <h2 className='section__heading'>Tech menu</h2>
        <div className='menu__list'>
           

            <div className='menu__item'>          
            <img src={Headset} alt='gif'/>
            <h5>Fone</h5>
            </div>

            <div className='menu__item'>
            <img src={Notebook}/>
            <h5>Notebook</h5>
            </div>

            <div className='menu__item'>
            <img src={Phone}/>
            <h5>Phone</h5>
            </div>
           

            <div className='menu__item'>            
            <img src={Tablet}/>
            <h5>Tablet</h5>
            </div>
           

            <div className='menu__item'>            
            <img src={Tv}/>
            <h5>Tv</h5>
            </div>
           

            <div className='menu__item'>            
            <img src={Gamer}/>
            <h5>PC Gamer</h5>
            </div>

            <div className='menu__item'>          
            <img src={Chair}/>
            <h5>Chair</h5>
            </div>

            <div className='menu__item'>           
            <img src={Bar}/>
            <h5>Mini Bar</h5>
            </div>

            </div>  

           <h2 className='section__heading'>Menu itens</h2>
           <div className='card-list'>
            <div className='card'>
            <img src={Headset} alt='gif'/>
            <h4 className='card__title'></h4>

            <div className='card__price'>
               <div className='price'>R$10,00</div>
               <i class="bi bi-plus-lg"></i>
            </div>

            </div>

            { /* Sidebar :) */ }
            
            <div className='sidebar' id='sidebar'>
               <div className='siderbar__close'>
               <i class="bi bi-x"></i>
               <div className='cart__menu'>
                 <h3>My cart</h3>
                 <div className='cart__term'>TEST 1</div>
               </div>

               <div className='siderbar__footer'>
                  <div className='total__amount'>
                     <h5>Total</h5>
                     <div className='cart-total'>R$0.00</div>

                  </div>
                   <button className='checkout-btn'>Checkout</button>

               </div>


               </div>

            </div>
           

        </div>
       </main>
    )
   
 }