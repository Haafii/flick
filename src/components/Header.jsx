import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  else {
    return (
      <header className="bg-blue-500 h-[100px] pt-6 pb-6 pr-6 flex justify-between items-center w-screen">
        <div className="flex items-center justify-between w-full h-10">
          <div className="rounded-full w-36 h-20 flex items-center justify-center">
            <img
              src="../public/images/logo.png"
              alt="Logo"
              className="w-36 h-36 mt-10 rounded-full "
            />
          </div>
          <nav>
            <ul className="flex gap-7 font-bold uppercase text-xl">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="  Search here"
                className="bg-white border rounded-3xl w-80 py-2 pl-8 pr-4 focus:outline-none focus:border-blue-400"
              />

              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="text-gray-400 " />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
