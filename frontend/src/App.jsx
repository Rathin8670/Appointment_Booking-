import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Doctors } from './pages/Doctors'
import { Login } from './pages/Login'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Signup } from './pages/Signup'
import { Profile } from './pages/Profile'
import { MyAppointment } from './pages/MyAppointment'
import { Appointment } from './pages/Appointment'
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors:specilities' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/myappointments' element={<MyAppointment/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
      </Routes>
    
    </div>
  )
}