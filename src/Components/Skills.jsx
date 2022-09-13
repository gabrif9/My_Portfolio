import React from 'react'

import HTML from '../Assets/html.png'
import CSS from '../Assets/css.png'
import ReactImg from '../Assets/react.png'
import Tailwind from '../Assets/tailwind.png'
import Github from '../Assets/github.png'
import Bootstrap from '../Assets/bootstrap.png'
import Java from '../Assets/java.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#32322C] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#13C4A3]'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#4C6085] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#4C6085] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#4C6085] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#4C6085] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#4C6085] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="Github icon" />
            <p className='my-4'>Github</p>
          </div>
          <div className='shadow-md shadow-[#4C6085] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
            <p className='my-4'>Bootstrap</p>
          </div>
          <div className='shadow-md shadow-[#4C6085] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt="Java icon" />
            <p className='my-4'>Java</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills