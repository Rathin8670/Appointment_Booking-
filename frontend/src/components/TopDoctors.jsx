import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

export default function TopDoctors() {
    const navigate=useNavigate()
    const {doctors}=useContext(AppContext)
    return (
    <div className='flex flex-col gap-4 items-center my-16 md:mx-10 text-gray-900'>
        <h1 className='font-semibold text-black text-3xl'>Top Doctors to Book</h1>
        <p className='text-sm text-gray-800'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-5 pt-5 gap-y-7 sm:px-0'>
            {doctors.slice(0,8).map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-300 rounded-xl cursor-pointer overflow-hidden transition ease-in-out delay-150 hover:-translate-x hover:scale-110 
                duration-300 shadow-md'>
                    <img className='bg-cyan-200' src={item.image}></img>
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='font-medium text-xl text-gray-950'>{item.name}</p>
                        <p>{item.speciality}</p>
                    </div>
                </div>   
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}
        }className='mt-10 w-50 px-6 py-2 rounded-3xl text-center bg-blue-200'>more..</button>
    </div>
    )
}
