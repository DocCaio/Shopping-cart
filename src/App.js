import './App.css';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Menu from './components/Menu';
import Products from './components/Products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';


function App() {
  return  (
    <Provider>
      
    <Navbar/>    
    <Cover/>    
    <Menu/>   
    <Products/>
    <Cart/>

  </Provider>
  );
}

export default App;
