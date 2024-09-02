import React from 'react';
import imgg from '../../assets/image/avataaars.svg';
import style from './home.module.css';

export default function Home() {
  return (
    <>
     <div className='bg-[#1abc9c] absolute top-0 bottom-0 left-0 right-0 '>
      <div className='w-56 ms-60 mt-40'>
      <img src={imgg} alt="" className='mt-5 w-full ms-96'/>
      </div>
      <h2 className='font-bold text-5xl text-white pt-4 '>start Framework</h2>
      <div className='flex items-center justify-center mt-4 mb-3'>
      <div className={style.linee}></div>
      <i className='fa-solid fa-star text-white'></i>
      <div className={style.line}></div>
      </div>

      <div className='text-white'>Graphic Artist - Web Designer - Illustrator</div>
     </div>
    </>
    
  )
}