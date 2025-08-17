import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductPage from './pages/ProductPage';

function App() {
  

  return (

    <>
    {/* need to make page layout provider with navbar on top */}
    <div className='mb-5'> 
      <NavBar />

    </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/productlist" element = {<ProductList />} />
          <Route path="/shoppingcart" element = {<ShoppingCart />}/>
          <Route path="/productpage/:id" element={<ProductPage />} />
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
