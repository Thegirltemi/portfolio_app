import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home = () => {
  return (
    <div name='home' className='w-ful h-screen bg-[#0a192f] pl-10'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Temiloluwa</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-end Developer.</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Frontend developer currently focused on building responsive and attractive 
              user interfaces.And also hoping to become a full stack developer in a couple of years.
          </p>
          <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Project
              <span className='group-hover:rotate-90 duration-300'>
              <ArrowRightAltIcon className='ml-3'/>
              </span>
              </button>
          </div>
        </div>
    </div>
  )
}

export default Home