import React,{useState} from 'react';
import style from './contact.module.css';


export default function Contact() {
  const [isFocus, setisFocus] = useState({
    name : false,
    age : false,
    email : false,
    pasword : false,
  });
  function handleFocus(e){
    setisFocus({...isFocus,[e.target.name] : true});
    console.log(e.target.name);
  }
  return (
   <>
   <div >
    <h2 className='text-5xl text-[#2c3e50] font-bold mb-3 mt-6'>Conatct section</h2>
    <div className='flex  items-center justify-center mb-3'>
      <div className={style.linee}></div>
      <i className='fa-solid fa-star text-[#2c3e50]'></i>
      <div className={style.line}></div>
    </div>
    <div className='w-3/4 mx-auto py-10'>
    <form>

      <div className='relative mb-5 p-2'>
      <input id="name" name="name" className='block border-b-2 w-full h-10 p-3 rounded-md' placeholder="userName" type="text" onInput={(e)=>handleFocus(e)}/>
      <label htmlFor="name" className={`${style.label} ${isFocus.name ? style.goup : ""}`}> userName :</label>
      </div>

      <div className='relative mb-5 p-2'>
      <input id="age" name="age" className='block border-b-2 w-full h-10 p-3 rounded-md' placeholder="userAge" type="text" onInput={handleFocus}/>
      <label htmlFor="age" className={`${style.label} ${isFocus.age ? style.goup : ""}`}> userAge :</label>
      </div>

      <div className='relative mb-5 p-2'>
      <input id="email" name="email" className='block border-b-2 w-full h-10 p-3 rounded-md' placeholder="userEmail" type="email" onInput={handleFocus}/>
      <label htmlFor="email" className={`${style.label} ${isFocus.email ? style.goup : ""}`}> userEmail :</label>
      </div>

      <div className='relative mb-5 p-2'>
      <input id="pasword" name="pasword" className='block border-b-2 w-full h-10 p-3 rounded-md' placeholder="userPassword" type="password" onInput={handleFocus}/>
      <label htmlFor="pasword" className={`${style.label} ${isFocus.pasword ? style.goup : ""}`}>userPassword :</label>
      </div>

      <button className='mt-4 text-white bg-[#1abc9c] px-3 p-2 rounded-md'> send Message </button>
    </form>
    </div>

   </div>
   </>
  )
}