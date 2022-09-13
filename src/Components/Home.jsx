import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#32322C]'>
        
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 md:pl-16 md:pr-8 flex flex-col justify-center h-full'>
            <p className='text-[#13C4A3]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Gabriele Ferrigno</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a novice developer, I like to experiment with new technologies especially with regard to web development.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#13C4A3] hover:border-[#13C4A3]'>View Work 
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-2'/>  
                  </span>
                </button>

                
            </div>
        </div>
    </div>
  )
}
