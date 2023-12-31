import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Header from './components/Header';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Catagories from './pages/Catagories';
import BuyProduct from './pages/BuyProduct';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="catagories" element={<Catagories />} />
          <Route path="buy" element={<BuyProduct />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
