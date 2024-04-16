import './_Navbar.scss';
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

                  <div className='menu__icon'>
                      <i class="bi bi-egg"></i>
                    </div>

                    <div className='cart__icon'>
                      <i class="bi bi-cart2"></i>
                    </div>


            </nav>
        </header>
    )
   
 }