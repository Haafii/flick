import React from 'react';
import NotStartedIcon from '@mui/icons-material/NotStarted';

function Home() {
  return (
    <div className='h-[700px] flex items-center justify-center'>
      <div className="bg-[url('../public/images/home-bg-1.jpeg')] h-[560px] w-full mx-20 p-4 flex items-center justify-center bg-cover bg-center ">
        <div className='bg-white h-[450px] w-[1160px] flex '>
          <div  className="bg-[url('../public/images/home-bg-2.jpeg')] w-[800px] bg-cover bg-center flex items-center justify-between flex-col">
            <div>
            </div>
            <NotStartedIcon className='text-xl'/>
            <button className='bg-red-800 mb-6'>
                WATCH NOW
            </button>
          </div>
          <div className='bg-green-700 w-[560px]'>
            hello
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
