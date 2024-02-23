'use client'
import React from 'react'
import wish from '../assets/wish.png'
import cart from '../assets/cart.png'

import DropDown from './DropDown';

const Header = () => {
    
  return (
    <div>
        <div className="bg-black text-white text-center flex ">
    <div className="w-full">
        <span className="text-white block mx-auto">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="text-white">Shop Now</a></span>
    </div>
    <div className="hidden md:block">
        <ul className="flex flex-col font-medium ">
            <li className="relative">
                <button className="flex items-center text-white-100 rounded dark:text-white">English <svg className="w-2.5 h-2.5 ms-2.5" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg></button>
            </li>

        </ul>
    </div>
    </div>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex justify-between mx-auto p-4">
            <a href="#" className="flex items-center  ">
                <span className="font-inter text-2xl font-bold tracking-wide ">Exclusive</span>
             </a>
             <div className="flex md:order-2 md:space-x-4">
                <div className="relative md:block">
                    <input type="text" className="block w-full p-2 pr-10 text-sm text-gray-900 bg-gray-100" placeholder="Search..."/>
                    <div className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                   
                </div>
                <div className="flex items-center md:order-2 md:space-x-4">
                    <a href="/whishList">    <img className="w-6 h-6 " /*src={wish}*/ alt=""/>  </a>
                    <a href="/cart"> <img className="w-6 h-6" /*src={cart}*/ alt="" /></a>
                    <DropDown/> 
                    </div>
                    
                       
                   
            </div>
            <div className="items-center w-full md:flex md:w-auto md:order-1">
                <ul className="flex font-medium md:space-x-8 ">
                    <li>
                        <a href="/" className="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="/aboutUS" className="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">About Us</a>
                    </li>
                    <li>
                        <a href="/signup" className="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">Sign Up </a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
