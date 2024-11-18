import React from 'react'
import { assets } from '../assets/assets'

export const Contact = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <span className='text-2xl text-gray-800 font-semibold '>Contact Us</span>
      </div>

      <div className='flex flex-col md:flex-row'>
        <div >
          <img className=' w-full md:max-w-[360px] rounded-lg' src={assets.contact_image}></img>
        </div>
        <div className='flex-1  p-8 py-7 bg-white mx-2 md:w-2/4 sm:mt-0'>
          <span className='text-2xl text-gray-700 font-medium'>Our Office</span>

          <p className='text-gray-600 text-sm mt-5'>
          00000 Willms Station<br></br>
          Suite 000, Washington, USA
          </p>

          <p className='text-gray-600 text-sm mt-5'>
          Tel: (000) 000-0000<br></br>
          Email: instacure@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
