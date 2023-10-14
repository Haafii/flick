
import React from 'react'

function Catagories() {
    return (
        <div className='h-[700px] flex items-center justify-center '>
          <div className="mt-20  bg-[url('../public/images/products-bg.jpeg')] h-[635px] w-full mx-20 p-4 flex flex-col justify-center bg-cover bg-center ">
            <p className='text-6xl ml-6 mb-4 mt-[-80px] font-bold uppercase text-white'>Catagories</p>
            <div className=' ml-6 h-[470px] w-[1160px] flex gap-6 '>
              <div className='bg-white w-full rounded-3xl flex flex-col items-center justify-center gap-2'>
                <div className='h-96'>
                  <img src='../public/images/kids_cat.jpeg' alt='Image Description' className='w-full h-full object-contain rounded-3xl ' />
                </div>
                <button className='bg-primary hover:bg-secondary text-white rounded-xl px-6 uppercase font-semibold py-2'>
                  View
                </button>
              </div>
              <div className='bg-white w-full rounded-3xl flex flex-col items-center justify-center gap-2'>
                <div className='h-96'>
                  <img src='../public/images/girl_cat.jpeg' alt='Image Description' className='w-full h-full object-contain rounded-3xl ' />
                </div>
                <button className='bg-primary hover:bg-secondary text-white rounded-xl px-6 uppercase font-semibold py-2'>
                  View
                </button>
              </div>
              <div className='bg-white w-full rounded-3xl flex flex-col items-center justify-center gap-2'>
                <div className='h-96'>
                  <img src='../public/images/men_cat.jpeg' alt='Image Description' className='w-full h-full object-contain rounded-3xl ' />
                </div>
                <button className='bg-primary hover:bg-secondary text-white rounded-xl px-6 uppercase font-semibold py-2'>
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Catagories