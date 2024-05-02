import './_Navbar.scss';
import CartButton from './cartButton';
import React, { useState , useContext } from 'react';
import fetchProducts from "../../api/fetchProducts";
import AppContext from '../../context/AppContext';



  export default function Navbar() { 

    const { setProdutcs ,setLoading} = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');    
    

    const handleSearch = async (event) => {
       event.preventDefault();
       setLoading(true);

       const products = await fetchProducts(searchValue);
       setProdutcs(products);
       setLoading(false);
       setSearchValue('');
       
    };
    return (
        <header className='header'>
            <nav className='header__menu'>
                <div className='burguer__icon'>
                <i class="bi bi-list"></i>
                </div>

                <form className='search__box'
                    onSubmit={handleSearch}  >
                    
                    <i class="bi bi-search"></i>
                    <input 
                     type="search" 
                     value={searchValue}               
                     placeholder='Search'
                     onSubmit={handleSearch}
                     onChange={({target}) => setSearchValue(target.value)}
                     required
                     />
                 </form>

                  <div className='menu__icons'>
                  <i class="bi bi-pc-display"></i>                   

                   <CartButton/>

                  </div>

            </nav>
        </header>
    )
   
 }