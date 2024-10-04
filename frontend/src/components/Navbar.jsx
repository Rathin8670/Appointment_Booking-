import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=''>
            <img className='w-20 h-25' src={assets.logo} alt="" />
            <ul>
                <NavLink>
                    <li>Home</li>
                    <hr></hr>
                </NavLink>
                <NavLink>
                    <li>All Doctors</li>
                    <hr></hr>
                </NavLink>
                <NavLink>
                    <li>About</li>
                    <hr></hr>
                </NavLink>
                <NavLink>
                    <li>Contact</li>
                    <hr></hr>
                </NavLink>
            </ul>
            <div>
                <button>Create Account</button>
            </div>
        </div>
    )
}

export default Navbar