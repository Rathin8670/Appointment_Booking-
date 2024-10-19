import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    const [showMenu,setshowMenu]=useState(false)
    const [token,setToken]=useState(true)
    return (
        <div className='flex items-center justify-between text-sm py-5 mb-5 border-b border-b-gray-400 '>
            <img onClick={()=>{navigate('/'),scrollTo(0,0)}} className='w-20 h-25 cursor-pointer rounded-lg' src={assets.logo} alt="" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to={'/'}>
                    <li>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
                </NavLink>
                <NavLink to={'/doctors'}>
                    <li>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
                </NavLink>
                <NavLink to={'/about'}>
                    <li>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
                </NavLink>
                <NavLink to={'/contact'}>
                    <li>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden '></hr>
                </NavLink>
            </ul>
            <div className='flex items-center gap-4' >
                {
                    token?
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='rounded-full w-9' src={assets.profile_pic} alt=''></img>
                        <img className='w-3' src={assets.dropdown_icon} alt=''/>
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-slate-300 rounded  flex flex-col gap-4 p-5'>
                                <p onClick={()=>navigate('/profile')} className='hover:text-black cursor-pointer'>My Profile</p>

                                <p onClick={()=>navigate('/myappointments')} className='hover:text-black cursor-pointer'>My Appointment</p>

                                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Log Out</p>
                            </div>
                        </div>

                    </div>
                    :<button onClick={()=>navigate('/login')} className='bg-primary px-8 py-3 rounded-full text-white font-light  hidden md:block'>Create Account</button>
                }
            </div>
        </div>
    )
}

export default Navbar