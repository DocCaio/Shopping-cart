import './_Navbar.scss';
import CartButton from './cartButton';
import React, { useState } from 'react';
import fetchProducts from "../../api/fetchProducts";


export default function Navbar() { 

    const [searchValue, setSearchValue] = useState('');
    const handleSearch = async (event) => {
       event.preventDefault();

       const products = await fetchProducts(searchValue);
       console.log(products);
       setSearchValue('');
    }
    return (
        <header className='header'>
            <nav className='header__menu'>
                <div className='burguer__icon'>
                <i class="bi bi-list"></i>
                </div>

                <div className='search__box'>
                    <i class="bi bi-search"></i>
                    <input type="text" 
                    placeholder='Search'
                     onSubmit={handleSearch}
                     onChange={({target}) => setSearchValue(target.value)}
                     required
                     />
                 </div>

                  <div className='menu__icons'>
                  <i class="bi bi-pc-display"></i>                   

                   <CartButton/>

                  </div>

            </nav>
        </header>
    )
   
 }