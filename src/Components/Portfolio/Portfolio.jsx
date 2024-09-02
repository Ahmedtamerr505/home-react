import React,{useState} from 'react';
import img1 from "../../assets/image/img-1.png";
import img2 from "../../assets/image/img-2.png";
import img3 from "../../assets/image/img-3.png";
import img4 from "../../assets/image/img-4.png";
import img5 from "../../assets/image/img-5.png";
import img6 from "../../assets/image/img-6.png";
import style from "./portfolio.module.css";


export default function Portfolio() {
  const allImg = [img1, img2, img3, img4, img5,img6];
  const [currentIndex,setcurrentIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);
//handle
function handleisOpen(){
  setisOpen(true);
}
//close
function closeModle(){
  setisOpen(false);
}
  return (
<>
<div className='container text-center'>
  <h2 className='mb-3 text-5xl font-bold text-[#2c3e50] mt-3'>Portfolio Component</h2>
  <div className='flex items-center justify-center mb-3'>
  <div className={style.linee}></div>
  <i className='fa-solid fa-star text-[#2c3e50]'></i>
  <div className={style.line}></div>
  </div>
  <div className='flex justify-center items-center flex-wrap'>
    {allImg.map((ele,index)=>(
      <div key={index} className='w-1/3 px-2 py-2 ' onClick={handleisOpen}>
        <div className='overflow-hidden relative'>
        <img src={ele} className='w-full rounded-md overflow-hidden' />
        <div className='bg-green-500/50 absolute top-0 bottom-0 right-0 left-0 rounded-md flex items-center justify-center opacity-0 transition duration-700 ease-in-out  hover:opacity-100'>
        <i className='fa-solid fa-plus text-8xl text-white'></i>
        </div>
        </div>
       
      
      </div>
    ))}
  </div>
  {isOpen && (
    <div className='fixed inset-0 bg-sky-500/50 flex items-center justify-center' onClick={closeModle}>
      <div className='p-3'>
        <img src={allImg[currentIndex]} alt="" className={style.w100}/>
      </div>

    </div>
  )}
</div>
</>
  )
}