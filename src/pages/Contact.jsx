import React from 'react'

function Contact() {
  return (
    < div className='h-[700px] flex items-center justify-center'>
      <div className="bg-green-300 h-[560px] w-full mx-20 bg-[url('../public/images/cart-bg.jpeg')] p-4 flex flex-col pl-12 bg-cover bg-center rounded-lg">
        <h1 className="text-4xl uppercase font-semibold text-white mb-8">Contact Us</h1>
        <div className="flex gap-5 w-2/5 flex-col">
          <input
            className="border placeholder-white border-gray-400 bg-gray-400 rounded-lg py-2  px-3 w-full"
            type="text"
            id="name"
            name="name"
            placeholder='Enter your name'
          />
          <input
            className="border placeholder-white border-gray-400 bg-gray-400 rounded-lg py-2  px-3 w-full"
            type="email"
            id="email"
            name="email"
            placeholder='E-mail'
          />
          <textarea
            className="border border-gray-400 bg-gray-400 rounded-lg py-2 px-3 w-full h-52 placeholder-white"
            id="message"
            name="message"
            placeholder='Enter your message'
          ></textarea>
          <div className='flex items-center justify-center'>

          <button
            className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 w-1/5 rounded-full"
            type="button"
          >
            Send
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact