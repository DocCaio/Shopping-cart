import './App.css';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Menu from './components/Menu';
import Products from './components/Products';

function App() {
  return  (
     <>
    <Navbar/>
    <div>
    <Cover/>
    </div>
    <Menu/>
    <Products/>
    </>
  )
}

export default App;
