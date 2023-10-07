import React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

function Cart() {
  return (
    <div className='h-[700px] flex items-center justify-center '>
      <div className="mt-20  bg-[url('../public/images/cart-bg.jpeg')] h-[635px] w-full mx-20 p-4 flex flex-col justify-center bg-cover bg-center ">
        <p className='text-6xl ml-6 mb-4 mt-[-40px] font-bold uppercase text-white'>Cart</p>
        <div className=' ml-6 pt-10 h-[470px] w-[1160px] flex gap-6 '>
          <div className='bg-white h-96 w-full rounded-3xl flex flex-col items-center justify-center '>
            <div className='h-3/6 w-full flex items-center justify-between'>
              <div className='w-1/2 flex items-center justify-center h-5/6 '>
                <img src='../public/images/shirt.jpeg' alt='Image Description' className='w-full h-full object-contain rounded-3xl' />
              </div>
              <div className='flex flex-col w-1/2 items-center justify-center h-full gap-4'>
                <button class="border border-solid border-gray-400 px-10 py-2 w-5/6 rounded-md flex  gap-2">
                  <DeleteForeverOutlinedIcon className='ml-[-17px]' />
                  Remove
                </button>
                <button class="border border-solid border-gray-400 px-10 py-2 w-5/6 rounded-md flex  gap-4">
                  <BookmarkBorderOutlinedIcon className='ml-[-17px]' />
                  Save
                </button>
                <button class="border border-solid border-gray-400 px-10 py-2 w-5/6 rounded-md flex gap-2">
                  <ShoppingBagOutlinedIcon className='ml-[-24px]' />
                  Buy Now
                </button>
              </div>
            </div>
            <div className='h-1/6 w-full flex items-baseline justify-between'>
              <p className='text-2xl font-semibold ml-6'>Shirts</p>
              <button class="border border-solid border-gray-400 rounded-md gap-1 p-1 mr-6">
                Qty 1
              </button>
            </div>
            <div className='ml-10 h-2/6 w-full'>
              <p className='ml-1 text-gray-400'>
                Product flavour brief details
              </p>
              <p className='text-xl'>
                <StarIcon className='text-red-500' />
                <StarIcon className='text-red-500' />
                <StarIcon className='text-red-500' />
                <StarIcon className='text-red-500' />
                <StarBorderOutlinedIcon className='text-red-500' />
              </p>
              <p className='ml-1 text-3xl font-bold mt-2'>
                Rs. 900
              </p>
            </div>
          </div>
          <div className='bg-white h-96 w-full rounded-3xl flex flex-col items-center justify-center '>
            <div className='h-3/6 w-full flex items-center justify-between'>
              <div className='w-1/2 flex items-center justify-center h-5/6 '>
                <img src='../public/images/pants.jpeg' alt='Image Description' className='w-full h-full object-contain rounded-3xl' />
              </div>
              <div className='flex flex-col w-1/2 items-center justify-center h-full gap-4'>
                <button class="border border-solid border-gray-400 px-10 py-2 w-5/6 rounded-md flex  gap-2">
                  <DeleteForeverOutlinedIcon className='ml-[-17px]' />
                  Remove
                </button>
                <button class="border border-solid border-gray-400 px-10 py-2 w-5/6 rounded-md flex  gap-4">
                  <BookmarkBorderOutlinedIcon className='ml-[-17px]' />
                  Save
                </button>
                <button class="border border-solid border-gray-400 px-10 py-2 w-5/6 rounded-md flex gap-2">
                  <ShoppingBagOutlinedIcon className='ml-[-24px]' />
                  Buy Now
                </button>
              </div>
            </div>
            <div className='h-1/6 w-full flex items-baseline justify-between'>
              <p className='text-2xl font-semibold ml-6'>Pants</p>
              <button class="border border-solid border-gray-400 rounded-md gap-1 p-1 mr-6">
                Qty 1
              </button>
            </div>
            <div className='ml-10 h-2/6 w-full'>
              <p className='ml-1 text-gray-400'>
                Product flavour brief details
              </p>
              <p className='text-xl'>
                <StarIcon className='text-red-500' />
                <StarIcon className='text-red-500' />
                <StarIcon className='text-red-500' />
                <StarIcon className='text-red-500' />
                <StarBorderOutlinedIcon className='text-red-500' />
              </p>
              <p className='ml-1 text-3xl font-bold mt-2'>
                Rs. 1200
              </p>
            </div>
          </div>
          <div className='bg-white h-96 w-full rounded-3xl flex flex-col items-center justify-center '>
            <div className='h-3/6 w-full flex items-center justify-between'>
              <div className='w-1/2 flex items-center justify-center h-5/6 '>
                <img src='../public/images/saree.jpeg' alt='Image Description' className='w-full h-full object-contain rounded-3xl' />
              </div>
              <div className='flex flex-col w-1/2 items-center justify-center h-full gap-4'>
                <button className="border border-solid border-gray-400 px-10 py-2 w-5/6 rounded-md flex  gap-2">
                  <DeleteForeverOutlinedIcon className='ml-[-17px]' />
                  Remove
                </button>
                <button className="border border-solid border-gray-400 px-10 py-2 w-5/6 rounded-md flex  gap-4">
                  <BookmarkBorderOutlinedIcon className='ml-[-17px]' />
                  Save
                </button>
                <button className="border border-solid border-gray-400 px-10 py-2 w-5/6 rounded-md flex gap-2">
                  <ShoppingBagOutlinedIcon className='ml-[-24px]' />
                  Buy Now
                </button>
              </div>
            </div>
            <div className='h-1/6 w-full flex items-baseline justify-between'>
              <p className='text-2xl font-semibold ml-6'>Saree</p>
              <button class="border border-solid border-gray-400 rounded-md gap-1 p-1 mr-6">
                Qty 1
              </button>
            </div>
            <div className='ml-10 h-2/6 w-full'>
              <p className='ml-1 text-gray-400'>
                Product flavour brief details
              </p>
              <p className='text-xl'>
                <StarIcon className='text-red-500' />
                <StarIcon className='text-red-500' />
                <StarIcon className='text-red-500' />
                <StarIcon className='text-red-500' />
                <StarBorderOutlinedIcon className='text-red-500' />
              </p>
              <p className='ml-1 text-3xl font-bold mt-2'>
                Rs. 2900
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart