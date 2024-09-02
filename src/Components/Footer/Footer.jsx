import React from 'react';
import style from './footer.module.css'

export default function Footer() {
  return (
    <>
    <div className={style.bottomneg}>
    <div className='flex justify-around py-20'>
      <div className='text-center w-1/3 text-white'>
        <h3 className='text-3xl font-semibold pb-5'>LOCATION</h3>
        <p className='pb-2'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className='text-center w-1/3 text-white'>
        <h3 className='text-3xl font-semibold pb-5'>AROUND THE WEB</h3>
        <div className=''>
          <i className='fa-brands fa-facebook mx-1 ps-2 text-2xl '></i>
          <i className='fa-brands fa-twitter mx-1 ps-2 text-2xl '></i>
          <i className='fa-brands fa-linkedin-in mx-1 text-2xl ps-2  '></i>
          <i className='fa-solid fa-globe mx-1 ps-2 text-2xl '></i>
        </div>
      </div>
      <div className='text-center w-1/3 text-white pe-2'> 
        <h3 className='text-3xl font-semibold pb-5'>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    <div className='bg-[#1a252f] h-16'>
      <p className='pt-4 text-white'>Copyright © Your Website 2021</p>
      </div>
    </div>


    </>
  )
}