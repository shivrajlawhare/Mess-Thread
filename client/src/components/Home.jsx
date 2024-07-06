import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        < Navbar />
        <div className='flex flex-col items-center mt-[40%] gap-y-8'>
          <button className='font-normal hover:bg-[#580000] text-2xl w-[80%] py-14 text-center bg-[#D15656] drop-shadow-lg rounded-md text-white'>
          Write Today's Review
          </button>
          <button className='font-normal hover:bg-[#580000] text-2xl w-[80%] py-14 text-center bg-[#D15656] drop-shadow-lg rounded-md text-white'>
          See Today's Reviews
          </button>
        </div>
    </div>
  )
}

export default Home