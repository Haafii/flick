import React from 'react'
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className='h-[700px] flex items-center justify-center '>
      <div className="mt-20  bg-[url('../public/images/products-bg.jpeg')] h-[635px] w-full mx-20 p-4 flex flex-col justify-center bg-cover bg-center ">
        <p className='text-6xl ml-6 mb-4 mt-[-80px] font-bold uppercase text-white'>Products</p>
        <div className=' ml-6 h-[470px] w-[1160px] flex gap-6 '>
          <div className='bg-white w-full rounded-3xl flex flex-col items-center justify-center gap-2'>
            <div className='h-96'>
              <img src='../public/images/pants.jpeg' alt='Image Description' className='w-full h-full object-contain rounded-3xl ' />
            </div>
            <Link to={'/buy'}>
              <button className='bg-primary hover:bg-secondary hover:text-white text-white rounded-xl px-6 uppercase font-semibold py-2'>
                buy
              </button>
            </Link>
          </div>
          <div className='bg-white w-full rounded-3xl flex flex-col items-center justify-center gap-2'>
            <div className='h-96'>
              <img src='../public/images/shirt.jpeg' alt='Image Description' className='w-full h-full object-contain rounded-3xl ' />
            </div>
            <Link to={'/buy'}>
              <button className='bg-primary hover:bg-secondary hover:text-white text-white rounded-xl px-6 uppercase font-semibold py-2'>
                buy
              </button>
            </Link>
          </div>
          <div className='bg-white w-full rounded-3xl flex flex-col items-center justify-center gap-2'>
            <div className='h-96'>
              <img src='../public/images/saree.jpeg' alt='Image Description' className='w-full h-full object-contain rounded-3xl ' />
            </div>
            <Link to={'/buy'}>
              <button className='bg-primary hover:bg-secondary hover:text-white text-white rounded-xl px-6 uppercase font-semibold py-2'>
                buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products