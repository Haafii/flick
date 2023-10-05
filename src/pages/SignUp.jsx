import React from 'react';

const SignUp = () => {
  return (
    <div className="flex justify-start items-center min-h-screen bg-cover bg-center bg-[url('../public/images/bg.jpeg')]">
      <div className="w-1/3 p-20 flex flex-col justify-center">
        <div className="text-center mb-8">
          <img
            src="../public/images/logo.png" 
            alt="App Logo"
            className="w-36 h-36 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-4">Sign Up</h2>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-3xl"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 border rounded-3xl"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-3xl"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Create
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
