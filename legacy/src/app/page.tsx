'use client'
import React, {useState} from 'react'

import MonthProduct from './home/comp/MonthProduct'
import Categories from './home/comp/Categories'



const Home = () => {





 
  const [currentIndex, setCurrentIndex] = useState(0);

 
  return (
    <>
    <div className="flex w-4/5 mt-20">
      <ul className="flex flex-col w-80 max-w-[400px] mx-20 mt-0">
      <li >
          <a href="/category/1">jjjjjj</a>
        </li>
        <li >
          <a href="/category/2">jjjjjj</a>
        </li>
        <li >
          <a href="/category/3">jjjjjj</a>
        </li>
        <li >
          <a href="/category/4">jjjjjj</a>
        </li>


       
      </ul>
      <div className="overflow-hidden relative w-[900px] mt-0 h-[400px] ">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {/* {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className="w-full" />
          ))} */}
        </div>
        <div className="flex justify-center gap-3 w-full absolute bottom-3">
          {/* {images.map((_, index) => (
            <button key={index} className={`rounded-full w-3 h-3 cursor-pointer bg-gray-500 focus:outline-none ${index === currentIndex ? 'bg-gray-900' : ''}`} onClick={() => setCurrentIndex(index)}></button>
          ))} */}
        </div>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        <button className="rounded-full w-5 h-5 cursor-pointer bg-white" ></button>
        <button className="rounded-full w-5 h-5 cursor-pointer bg-white" ></button>
      </div>       

    </div>
    <Categories  />
    <MonthProduct  />
    </>
  
  )
}

export default Home



          
         
          
          