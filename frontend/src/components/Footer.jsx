import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* left */}
                <div>
                    <img className='w-20 h-25 rounded-lg' src={assets.logo} alt=''/>
                    <p className='w-full md:w-2/3 text-gray-800 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod voluptates earum mollitia aliquam necessitatibus suscipit nemo facere soluta atque veniam ex accusamus harum illo ipsam cupiditate reiciendis quaerat iusto quisquam aperiam, maiores libero sequi porro impedit.
                    </p> 
                </div>

                {/* center */}
                <div>
                    <p className='font-medium text-2xl text-gray-950 '>Company</p>
                    <ul className='p-2 text-gray-800 leading-6'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* right */}
                <div>
                    <p className='font-medium text-2xl text-gray-950'>Contact Us</p>
                    <p className='p-2 text-gray-800 leading-6'>+0-000-000-000</p>
                    <p className=' text-gray-800'>instacure100@gmail.com</p>
                </div>
            </div>
            {/* copyright  */}
            <div className='text-center py-5'>
                <hr></hr>
                <p className='pt-4'>Copyright 2024 @lorem - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer