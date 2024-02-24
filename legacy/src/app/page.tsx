'use client'

import React, {useEffect, useState} from 'react'

import MonthProduct from './home/comp/MonthProduct'
import Categories from './home/comp/Categories'
import axios from 'axios'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurProducts from './home/comp/OurProducts'
interface Category{
  catId:number;
  content:string
}
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
const [category,setCategory]=useState<Category[]>([])
useEffect(
  ()=>{
 async function ftch() {
  try{
    await axios.get('http://localhost:3000/category/getAll')
    .then((res)=>setCategory(res.data))
       }catch(err){console.log(err)}
 }
 ftch()
  },[]
)




  return (
    <>
    <div className="flex w-4/5 mt-20">
      <ul className="flex flex-col w-80 max-w-[400px] mx-20 mt-0">
     
     {category.map((el,i)=>(
      
      <li key={i}>
          <Link href={`/category/${el.catId}`}
          >
            {el.content}
          </Link>
        </li>
     ))}
        
      </ul>
      <div className="overflow-hidden relative w-[900px] mt-0 h-[400px] ">
      <Slider
              {...settings}
              style={{ width: '70%', margin:'auto', marginTop: 10,height:500 }}
            >
              <div>
                <img
                  src="https://ima-school.com/wp-content/uploads/2023/02/LOGO-IMA.png"
                  alt="Slide 1"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/fr/5/51/Logo_Inter_mutuelles_assistance.png"
                  alt="Slide 2"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </Slider>
      </div>
           
   


    <Categories />

    <OurProducts/>
    <MonthProduct  />
    </>
  

  )
};

export default Home;
