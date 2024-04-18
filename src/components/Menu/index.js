import './_Menu-list.scss';
import Headset  from './assets/headset.jpg' 

export default function Navbar() { 
    return (
       <main>
        <h2 className='section__heading'>Tech menu</h2>
        <div className='menu__list'>

            <div className='menu__item'>
            <img></img>
            <h5></h5>
            </div>

            <div className='menu__item'>          
            <img src={Headset} alt='gif'/>
            <h5>Fone</h5>
            </div>

            <div className='menu__item'>
            <img></img>
            <h5>Tablet</h5>
            </div>
           

        </div>
       </main>
    )
   
 }