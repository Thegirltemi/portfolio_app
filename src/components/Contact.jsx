import React from 'react'

const Contact = () => {
  return (
    <div name='Contact'className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/ffddca66-5890-4b4b-9451-5964a34e7919' className='flex flex-col max-w-[600px] w-full'>
         <div className='pb-8'>
             <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
             <p className='text-gray-300 py-4'>Email - temialamutu7@gmail.com</p>
         </div>
         <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
         <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
         <textarea className=' bg-[#ccd6f6] p-2'name='message' rows='5' placeholder='message'></textarea>
         <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
      </form>
    </div>
  )
}

export default Contact
