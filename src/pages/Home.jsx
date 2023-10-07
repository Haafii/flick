import React from 'react';
import NotStartedSharpIcon from '@mui/icons-material/NotStartedSharp';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='h-[700px] flex items-center justify-center'>
      <div className="bg-[url('../public/images/home-bg-1.jpeg')] h-[560px] w-full mx-20 p-4 flex items-center justify-center bg-cover bg-center ">
        <div className='bg-white h-[450px] w-[1160px] flex '>
          <div className="bg-[url('../public/images/home-bg-2.jpeg')] w-[800px] bg-cover bg-center flex items-center justify-between flex-col">
            <div>
            </div>
            <NotStartedSharpIcon className='text-6xl mt-12' style={{ width: '60px', height: '60px' }} />
            <button className='bg-red-800 mb-6 rounded-xl px-4 py-1'>
              WATCH NOW
            </button>
          </div>
          <div className=' w-[560px] flex flex-col items-center justify-between'>
            <div className='uppercase font-bold text-3xl mt-4'>
              About us
            </div>
            <div className='text-xl p-6'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sit dignissimos ea, repudiandae perferendis iste doloribus rem temporibus sint tempora maxime debitis, quis numquam alias amet nobis eius assumenda ab.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sit dignissimos ea, repudiandae perferendis iste doloribus rem temporibus sint tempora maxime debitis, quis numquam alias amet nobis eius assumenda ab.
              </p>
            </div>
            <div>
              <Link to={'/contact'}>
                <button className='bg-red-800 mb-6 rounded-xl px-4 py-2'>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
