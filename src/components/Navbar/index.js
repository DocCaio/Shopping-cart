import './_Navbar.scss';
import CartButton from './cartButton';


export default function Navbar() { 
    return (
        <header className='header'>
            <nav className='header__menu'>
                <div className='burguer__icon'>
                <i class="bi bi-list"></i>
                </div>

                <div className='search__box'>
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder='Search'/>
                 </div>

                  <div className='menu__icons'>
                  <i class="bi bi-pc-display"></i>                   

                   <CartButton/>

                  </div>

            </nav>
        </header>
    )
   
 }