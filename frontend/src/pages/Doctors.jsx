import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

export const Doctors = () => {
    const {specilities}=useParams();
    console.log(specilities)
    const [filterDoc,setfilterDoc]=useState([])
    const {doctors}=useContext(AppContext)
    const navigate=useNavigate()
    
    const applyFilter=()=>{
        // specilites are avilable
        if(specilities){
            console.log("hi")
            setfilterDoc(doctors.filter(doc=>doc.speciality===specilities))
        }else{
            setfilterDoc(doctors)
        }
    }

    useEffect(()=>{
        applyFilter()
    },[doctors,specilities])

    return (
        <div>
            <p className='text-gray-700'>Browse through the doctors specialist.</p>

            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <div className='flex flex-col gap-4 text-sm text-gray-600'>

                    <p onClick={()=> specilities==='General physician'?navigate('/doctors'):navigate('/doctors/General physician')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer transition-all'>General physician</p>

                    <p onClick={()=> specilities==='Gynecologist'?navigate('/doctors'):navigate('/doctors/Gynecologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer transition-all'>Gynecologist</p>
                    
                    <p onClick={()=> specilities==='Dermatologist'?navigate('/doctors'):navigate('/doctors/Dermatologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer transition-all'>Dermatologist</p>

                    <p onClick={()=> specilities==='Pediatricians'?navigate('/doctors'):navigate('/doctors/Pediatricians')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer transition-all'>Pediatricians</p>

                    <p onClick={()=> specilities==='Neurologist'?navigate('/doctors'):navigate('/doctors/Neurologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer transition-all'>Neurologist</p>

                    <p onClick={()=> specilities==='Gastroenterologist'?navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer transition-all'>Gastroenterologist</p>

                </div>
                {/* right side list of doctors */}
                <div className='w-full grid grid-cols-auto gap-5 gap-y-6'>
                    {
                        filterDoc.map((item,index)=>(
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
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
