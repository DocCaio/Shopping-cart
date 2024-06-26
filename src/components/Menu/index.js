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

  
    return (
       <main>
        <h2 className='section__heading'>Tech menu</h2>
        <div className='menu__list'>
           

            <div className='menu__item'>          
            <img src={Headset} alt='headset'/>
            <h5>Fone</h5>
            </div>

            <div className='menu__item'>
            <img src={Notebook} alt=''/>
            <h5>Notebook</h5>
            </div>

            <div className='menu__item'>
            <img src={Phone} alt='phone'/>
            <h5>Phone</h5>
            </div>
           

            <div className='menu__item'>            
            <img src={Tablet} alt='tablet'/>
            <h5>Tablet</h5>
            </div>
           

            <div className='menu__item'>            
            <img src={Tv} alt='tv'/>
            <h5>Tv</h5>
            </div>
           

            <div className='menu__item'>            
            <img src={Gamer} alt=''/>
            <h5>PC Gamer</h5>
            </div>

            <div className='menu__item'>          
            <img src={Chair} alt='chair'/>
            <h5>Chair</h5>
            </div>

            <div className='menu__item'>           
            <img src={Bar} alt='bar'/>
            <h5>Mini Bar</h5>
            </div>

            </div>  

            

            { /* CARDS :) */ }

            { /*<h2 className='section__heading'>Menu itens</h2>

           <div className='card_list'>

            <div className='card'>
            <img src={Headset} alt='headset'/>
            <h4 className='card__title'>Headset</h4>
            <div className='card__price'>
               <div className='price'>R$10,00</div>
               <i className="bi bi-plus-lg"></i>
            </div>
            </div>

            <div className='card'>
            <img src={Chair} alt='chair'/>
            <h4 className='card__title'>Chair</h4>

            <div className='card__price'>
               <div className='price'>R$100,00</div>
               <i className="bi bi-plus-lg"></i>
            </div>
            </div>

            <div className='card'>
            <img src={Gamer} alt='Gamer'/>
            <h4 className='card__title'>Headset</h4>

            <div className='card__price'>
               <div className='price'>R$300,00</div>
               <i className="bi bi-plus-lg"></i>
            </div>
            
            </div>

            <div className='card'>
            <img src={Tv} alt='tv'/>
            <h4 className='card__title'>Tv</h4>

            <div className='card__price'>
               <div className='price'>R$120,00</div>
               <i className="bi bi-plus-lg"></i>
            </div>
            
            </div>  


            
            

            
            </div>*/ }

            { /* Sidebar :) */ }
            
            <div className='sidebar' id='sidebar'>
               <div className='siderbar__close'>
               <i className="bi bi-x"></i>               
               <div className='cart__menu'>
                 <h3>My cart</h3>
                 <div className='cart__term'>Cart</div>
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
       </main>
    )
   
 }