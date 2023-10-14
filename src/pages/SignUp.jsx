import React from 'react';
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-start items-center min-h-screen bg-cover bg-center bg-[url('../public/images/bg.jpeg')]">
      <div className="w-1/3 p-20 flex flex-col justify-center">
        <div className="text-center mb-8">
          <img
            src="../public/images/logo.jpeg"
            alt="App Logo"
            className="w-36 h-36 rounded-full mx-auto"
          />
          <h2 className="text-3xl font-semibold mt-4">Sign Up</h2>
        </div>
        <form className='w-full flex flex-col items-center justify-center'>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full pr-36 pl-4 py-2 border rounded-3xl"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full pr-36 pl-4 py-2 border rounded-3xl"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full pr-36 pl-4 py-2 border rounded-3xl"
            />
          </div>
          <Link to={'/home'} className='w-full flex items-center justify-center'>
            <button
              type="submit"
              className="bg-primary hover:bg-secondary w-1/3 text-white py-2 rounded-xl "
            >
              Create
            </button>
          </Link>

        </form>
        <p className="mt-4 text-center font-bold">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
