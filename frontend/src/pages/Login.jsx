import React from 'react'
import { useState } from 'react'

export const Login = () => {
  const [state,setState]=useState('Sign up')

  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')

  return (
    <form className='flex items-center min-h-[80vh]'>
      <div className='flex flex-col gap-3 m-auto p-8 items-start min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg ' >
        <p className='text-xl text-zinc-700 font-medium'>{state==='Sign up'?"Create Account":"Login"}</p>
        <p className='text-zinc-600'>Please {state==='Sign Up'?"Sign up":"Login"} to book appointment</p>
        {
          state==='Sign up'&& <div className='w-full'>
          <p className='m-1 font-normal'>Full Name</p>
          <input className='border border-gray-300 rounded-sm p-2 m-1 w-full ' type='text' onChange={(e)=>setName(e.target.value)} placeholder='honey singh' ></input>
          </div>  
        }
        

        <div className='w-full'>
          <p className='m-1 font-normal'>Email</p>
          <input className='border border-gray-300 rounded-sm p-2 m-1 w-full ' type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='ramejd123@gmail.com'></input>
        </div>

        <div className='w-full'>
          <p className='m-1 font-normal'>Password</p>
          <input className='border border-gray-300 rounded-sm p-2 m-1 w-full ' type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='ram123@js'  ></input>
        </div>
        <button  className='p-2 m-1 w-full bg-primary text-white rounded-md'>{state==='Sign up' ? 'Create Account':'Login'}</button>
        {
          state==='Sign up'
          ?<p className='m-1 font-normal'>Already have an account? 
          <span onClick={()=>setState('Login')} className='cursor-pointer underline text-primary'>Login here</span>
          </p>
          :<p className='m-1 font-normal'>Create an new account?
          <span onClick={()=>setState('Sign up')}  className='cursor-pointer underline text-primary'>Click here</span>
          </p>
        } 
      </div>
    </form>
  )
}
