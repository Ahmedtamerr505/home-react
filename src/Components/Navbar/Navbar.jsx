import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className='fixed top-0 left-0 right-0 z-50 bg-[#2c3e50] text-white flex justify-between h-16 pt-3'>
      <div className='w-1/4'>
      <Link className=' text-uppercase cursor-pointer text-3xl font-bold my-auto ' to="">START FRAMEWORK</Link>
      </div>
      <div className='w-1/4'>
      <ul className='flex my-auto'>
        <li className='p-2 font-semibold'><NavLink to='about'>About</NavLink></li>
        <li className='p-2 font-semibold'><NavLink to='portfolio'>Portfolio</NavLink></li>
        <li className='p-2 font-semibold'><NavLink to='contact'>Contact</NavLink></li>
      </ul>
      </div>

    </div>
    </>
    
  )
}