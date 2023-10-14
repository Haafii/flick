import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

function BuyProduct() {
  return (
    <div className='h-[700px] flex items-center justify-center'>
      <div className=" h-[560px] w-full mx-20 p-4 flex items-center justify-center bg-cover bg-center ">
        <div className='w-2/5 h-full  flex gap-4'>
          <div className='flex items-center justify-center h-4/5 mt-6 ml-6'>
            <img src='../public/images/pants.jpeg' alt='Image Description' className='w-full h-full object-contain rounded-xl' />
          </div>
          <div className='flex flex-col gap-4 h-full mt-14 ml-4 '>
            <FavoriteBorderOutlinedIcon style={{ width: '60px', height: '60px', padding: '10px' }} className='rounded-full border border-gray-400 cursor-pointer'>
            </FavoriteBorderOutlinedIcon>
            <ShareOutlinedIcon style={{ width: '60px', height: '60px', padding: '10px' }} className='rounded-full border border-gray-400 cursor-pointer'>
            </ShareOutlinedIcon>
          </div>
        </div>
        <div class="h-full bg-gray-300 w-1"></div>
        <div className='w-3/5 h-full'>
          <div className='h-3/6 flex flex-col ml-16 gap-2'>
            <p className='text-5xl font-semibold mt-10'>Product 1</p>
            <p className='text-gray-400 text-2xl'>Product flavour brief details</p>
            <p className='text-gray-400 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolorem dolore iusto at quia veniam ea reprehenderit quod atque. Illo id repellendus vel, veritatis rerum error praesentium commodi saepe omnis.</p>
          </div>
          <div className='h-2/6'>
            <p className='text-xl  ml-14' >
              <StarIcon className='text-red-500' style={{ width: '60px', height: '60px' }} />
              <StarIcon className='text-red-500' style={{ width: '60px', height: '60px' }} />
              <StarIcon className='text-red-500' style={{ width: '60px', height: '60px' }} />
              <StarIcon className='text-red-500' style={{ width: '60px', height: '60px' }} />
              <StarBorderOutlinedIcon className='text-red-500' style={{ width: '60px', height: '60px' }} />
            </p>
            <p className='ml-16 text-5xl font-bold mt-4'>
              Rs. 900
            </p>
          </div>
          <div className='flex items-center justify-center gap-4 text-semibold text-lg text-white'>
            <button className="bg-primary hover:bg-secondary text-white px-20 py-4 rounded-md flex">
              Remove
            </button>
            <button className="bg-primary hover:bg-secondary text-white px-20 py-4 rounded-md">
              Save
            </button>
            <button className="bg-primary hover:bg-secondary text-white px-20 py-4 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyProduct