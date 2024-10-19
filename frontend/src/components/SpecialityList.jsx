import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

export default function SpecialityList() {
    return (
    <div id='speciality' className='flex flex-col py-16 gap-4 text-gray-600 items-center'>
        <h1 className='font-medium text-3xl '>
        Find by Speciality
        </h1>
        <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted <br/> doctors, schedule your appointment hassle-free.
        </p>
        <div className="flex sm:justify-center  gap-5 py-5 w-full overflow-scroll">
            {
                specialityData.map((item,index)=>(
                    <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' key={index} to={`/doctors/${item.speciality}`}>
                        <img  className='w-15 sm:w-23 mb-2 ' src={item.image} alt=''/>
                        <p>{item.speciality}</p>
                    </Link>
                ))
            }
        </div>
    </div>
    )
}
