import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#32322C] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/e71aa969-b1c3-4666-80c6-a15747b20d3e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#13C4A3] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below i'll respond as soon as possible!</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-sm' type="text" placeHolder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-sm' type="email" placeHolder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-sm' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#13C4A3] hover:border-[#13C4A3] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

            <div className='max-w-[1240px] text-center text-gray-300 text-md'>
              <p>Image by <a href="https://www.freepik.com/free-vector/creative-letter-g-logo-templates_13961817.htm#query=letter%20g%20logo&position=0&from_view=search" target='_blank' rel='noreferrer'>Freepik</a></p>
            </div>
        </form>
    </div>
  )
}

export default Contact