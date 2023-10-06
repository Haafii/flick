import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
