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
            <img></img>
            <img src={Tablet}/>
            <h5>Tablet</h5>
            </div>
           

            <div className='menu__item'>
            <img></img>
            <img src={Tv}/>
            <h5>Tv</h5>
            </div>
           

            <div className='menu__item'>
            <img></img>
            <img src={Gamer}/>
            <h5>PC Gamer</h5>
            </div>

            <div className='menu__item'>
            <img></img>
            <img src={Chair}/>
            <h5>Chair</h5>
            </div>

            <div className='menu__item'>
            <img></img>
            <img src={Bar}/>
            <h5>Mini Bar</h5>
            </div>

           <h2 className='section-heading'>Menu itens</h2>
           <div className='card-list'>
            <div className='card'>
            <img src={Headset} alt='gif'/>
            <h4 className='card__title'></h4>

            <div className='card__price'>

            </div>

            </div>

           </div>
           
           

        </div>
       </main>
    )
   
 }