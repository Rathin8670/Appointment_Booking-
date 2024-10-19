import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate=useNavigate()
    return (
        <div className='flex bg-primary-2 px-6 sm:px-10 md:px-14 lg:px-14 my-20 md:mx-10 rounded-lg '>

            {/* left */}
            <div className='flex-1  py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className=' text-white font-semibold text-4xl'>
                    <p className='mt-4'>Book Appointment </p>
                    <p className='mt-4'>With 100+ Trusted</p>
                    <p className='mt-4'>Doctors</p> 
                </div>
        
                <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='w-27  mt-5 mb-20 px-7 py-2 rounded-3xl bg-white'>Create account</button>
            </div>

            {/* right side */}
            <div className='hidden  md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute right-0 bottom-0 max-w-lg' src={assets.appointment_img}></img>
            </div>
            
        </div>
    )
}

export default Banner