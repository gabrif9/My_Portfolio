import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#32322C] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='md:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#13C4A3]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='md:pl-8 md:text-right text-4xl font-bold'>
                    <p>Hi. I'm gabriele Ferrigno, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>I am fascinated by everything related to technology and the IT world, also I am very interested in the world of blockchain and cryptocurrencies.
                        Right now I am studying everything related to the front-end development but I would like to move on to study also what concerns the back-end development.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About