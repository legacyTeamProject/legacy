'use client'

import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import Link from 'next/link'
import Categories from './home/comp/Categories'
import OurProducts from './home/comp/OurProducts'
import MonthProduct from './home/comp/MonthProduct'
import Marquee from 'react-fast-marquee';

interface Category {
  catId: number;
  content: string;
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

  const [category, setCategory] = useState<Category[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/category/getAll')
        setCategory(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='home-container' style={{width:'100%',display:'block'}}>
     
     <Marquee behavior="scroll" direction="left" style={{ width: '100%', height: '40px', fontSize: '30px', color: 'red' }}>
        Welcome to our awesome website! Check out the latest products and categories.
      </Marquee>

<div style={{display:'flex',width:'80%',margin:'auto',height:500}}>
<ul style={{width:'30%',marginLeft:5,marginTop:20,fontSize:20}}>
        {category.map((el, i) => (
           <li key={i}>
           <details className="group">
             <summary className="flex items-center justify-between gap-2 font-medium marker:content-none hover:cursor-pointer">
                 <a href={`/category/${el.catId}`}>{el.content}</a>
               <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path fillRule="evenodd"
                     d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                 </path>
               </svg>
             </summary>
             </details>
         </li>
        ))}
      </ul>
      <div style={{width:'70%',margin:'auto',height:'100%'}}>
        <Slider
          {...settings}
          style={{ width: '100%', margin: 'auto', marginTop: 10,height:'100%'  }}
        >
          <div>
            <img
              src="https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Apple-Products-expected-to-launch-in-2023.png"
              alt="Slide 1"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/2yd1b0rk61ek/10Wn9tj66w3iyrdkyiO4FV/bc8ba2617988ed55d34857f47e0e4130/apple_herobanner_en.jpg"
              alt="Slide 2"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Slider>
      </div>
</div>
     <div style={{width:'80%',margin:'auto',marginTop:10}}>
     <Categories />
      <OurProducts />
      <MonthProduct />
     </div>
    </div>
  );





};

export default Home;