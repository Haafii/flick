import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useState, useRef, useEffect } from 'react';


function Header() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  // Add an event listener to handle clicks outside the pop-up
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  else {
    return (
      <header className="bg-primary h-[100px] pt-6 pb-6 pr-6 flex justify-between items-center w-screen">
        <div className="flex items-center justify-between w-full h-10">
          <div className="rounded-full w-36 h-20 flex items-center justify-center">
            <img
              src="../public/images/logo.jpeg"
              alt="Logo"
              className="w-36 h-36 mt-10 rounded-full "
            />
          </div>
          <nav>
            <ul className="flex gap-7 font-bold uppercase text-xl">
              <li>
                <Link to="/home">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/catagories">Categories</Link>
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
            <div>
              <div className='w-12 h-12 rounded-full flex items-center justify-center border border-white cursor-pointer'
                onClick={openPopup}>
                <PersonIcon className='text-white' style={{ width: '40px', height: '40px' }} />
              </div>
              {isPopupOpen && (
                <div className="fixed right-8 w-56 h-52 p-6 bg-gray-100 shadow-lg rounded-lg flex flex-col gap-6"
                ref={popupRef}>
                  <img
                    src="../public/images/pro_pic.jpeg"
                    alt="Profile Picture"
                    className="w-16 rounded-full mx-auto mb-4 h-16"
                  />
                  <Link to={'/'} className='flex items-center justify-center w-full'>
                    <button className="bg-primary w-full hover:bg-secondary text-white px-4 py-2 rounded" onClick={closePopup}>
                      Logout
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
