import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

export const Appointment = () => {
  const {docId}=useParams()
  const {doctors}=useContext(AppContext)
  const [docInfo,setDocInfo]=useState(null)

  const dayOfWeeks=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat']

  const [docSlot,setDocSlot]=useState([])
  const [slotIndex,setSlotIndex]=useState(0)
  const [slotTime,setSlotTime]=useState('')

  const fetchDoctorInfo=async ()=>{
    const docInfo=doctors.find(doc=>doc._id===docId)
    setDocInfo(docInfo)
    console.log(docInfo);
  }

  const getAvailableSlots=async ()=>{
    setDocSlot([])

    //getting current date
    let today=new Date()

    for(let i=0;i<7;i++){
      // getting date with index
      let currDate=new Date(today)
      currDate.setDate(today.getDate()+i)

      // setting end time with index
      let endTime=new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0) // hr,min,sec

      // setting hours
      if(today.getDate() === currDate.getDate()){
        currDate.setHours(currDate.getHours() >10 ? currDate.getHours()+1:10)

        currDate.setMinutes(currDate.getMinutes()>30?30:0
        )
      }else{
        currDate.setHours(10)
        currDate.setMinutes(0)
      }

      let timeSlots=[]
      while(currDate<endTime){
        let formattedTime=currDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        
        // add slot to array
        timeSlots.push({
          datetime:new Date(currDate),
          time:formattedTime
        })

        // increment curr time by 30 mins
        currDate.setMinutes(currDate.getMinutes()+30)
      }

      setDocSlot(prev =>([...prev,timeSlots]))
    }
  }

  useEffect(()=>{
    console.log(docSlot)
  },[docSlot]);
  

  useEffect(()=>{
    fetchDoctorInfo()
  },[docId,doctors])

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])

  return docInfo && (
    <div>
      
      {/* doctors details */}
      <div className='flex flex-col sm:flex-row gap-4 '>
        <div>
          <img className='bg-primary-2 w-full sm:max-w-72  rounded-lg' src={docInfo.image}></img>
        </div>

        {/* doctors name,degree,experience */}
        <div className='flex-1  border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80x] sm:mt-0'>
          <p className='flex items-center gap-2 font-semibold text-3xl text-gray-800'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon}></img>
          </p>

          <div className='flex items-center gap-2 pt-2 text-sm text-gray-700 '>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-1 text-xs border rounded-full '>{docInfo.experience}</button>
          </div>

          <div >
            <p className='flex items-center gap-2 font-medium text-gray-800 mt-3'>About
              <img className='w-4' src={assets.info_icon}></img>
            </p>
            <p className='text-sm text-gray-700 max-w-[700px] mt-2 '>{docInfo.about}</p>
            <p className='font-medium text-xl text-gray-700 mt-4'>Appointment fee:${docInfo.fees}</p>
          </div>
        </div>
      </div>

      {/* Booking slot */}

      <div className=' sm:pl-4 mt-4 font-medium text-gray-700 '>
        <p>Booking Slot</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlot.length && docSlot.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-primary-2 text-white':'border border-gray-300'}`} key={index}>
                {/* getting day e.g-Mon,Tue.. */}
                <p>{item[0] && dayOfWeeks[item[0].datetime.getDay()]}</p>
                {/* getting date */}
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            )) 
          }
        </div>

        <div className='flex items-center gap-3 overflow-x-scroll mt-4'>
          {
            docSlot.length && docSlot[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime?'bg-primary-2':'text-gray-700 border border-gray-300'}`} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>

        <button className='bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full mt-6'>Book an Appointment</button>
      </div>
    </div>
  )
}
