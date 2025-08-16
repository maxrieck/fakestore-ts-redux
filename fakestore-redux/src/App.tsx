import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  

  return (

    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/productlist" element = {<ProductList />} />
          <Route path="/shoppingcart" element = {<ShoppingCart />}/>
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
