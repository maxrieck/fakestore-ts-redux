import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductPage from './pages/ProductPage';
import AddUserForm from './pages/AddUserForm';

function App() {
  

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/productlist" element = {<ProductList />} />
          <Route path="/shoppingcart" element = {<ShoppingCart />} />
          <Route path="/productpage/:id" element={<ProductPage />} />
          <Route path="/addUser" element={<AddUserForm />} />
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
