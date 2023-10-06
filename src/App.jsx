import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Header from './components/Header';
import Products from './pages/Products';
import Cart from './pages/Cart';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
