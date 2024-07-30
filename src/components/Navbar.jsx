import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <div className='w-72 py-10 h-screen bg-slate-700 text-white flex flex-col justify-between items-center'>
      <div className='flex flex-col gap-5 items-start'>
        <div className='hover:scale-105 hover:cursor-pointer inline-flex items-center gap-1'>
          <span><MdMenuBook size={25} /></span>Dashboard
        </div>
        <div className='hover:scale-105 hover:cursor-pointer inline-flex items-center gap-1'>
          <span><FaUser size={25} /></span><Link to="/users">Users</Link>
        </div>
        <div className='hover:scale-105 hover:cursor-pointer inline-flex items-center gap-1'>
          <span><GrSchedule size={25} /></span>Schedule
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div><FaCircleUser size={40} /></div>
      </div>
    </div>
  )
}

export default Navbar