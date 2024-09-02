import React from 'react'
import style from "./about.module.css"

export default function About() {
  return (
    <>
    <div className=' bg-[#1abc9c] absolute top-0 bottom-0 left-0 right-0'>

      <h2 className='text-5xl text-white font-bold mt-80'>About Component</h2>
      <div className='flex items-center justify-center mt-4 mb-3'>
        <div className={style.linee}></div>
        <i className='fa-solid fa-star text-white'></i>
        <div className={style.line}></div>
      </div>
      <div className='container '>
        <div className='flex justify-center items-center '>
          <div className='ps-36'>
            <p className='text-white text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className='ps-36'>
            <p className='text-white text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}