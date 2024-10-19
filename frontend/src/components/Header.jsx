import React from 'react'
import { assets } from '../assets/assets'

export default function Header() {
    return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary-2 rounded-lg px-6 md:px-10'>
        {/* left side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-white font-semibold  text-3xl md:text-4xl lg:text-5xl  leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br/>
            With Trusted Doctors</p>

            <div className='flex flex-col md:flex-row items-center gap-3 text-white font-thin text-sm'>
                <img className='w-28' src={assets.group_profiles}></img>
                <p className='font-normal font-sans'>Simply browse through our extensive list of trusted doctors,<br/>
                schedule your appointment hassle-free.</p>
            </div>
            <a  className='flex items-center gap-2 font-mono rounded-full px-8 py-2 bg-white text-gray-700 m-auto md:m-0 hover:-translate-y-1 hover:scale-110  duration-300' href='#speciality'>Book Appointment  <img className='w-3' src={assets.arrow_icon}></img></a>            
        </div>

        {/* right side */}
        <div className='md:w-1/2 relative'>
            <img className='w-full absolute bottom-0 h-full pt-10 rounded-lg' src={assets.appointment_img}/>
        </div>
    </div>
    )
}
