'use client'
import AccountMenu from '@/app/home/comp/DropDown'
import React from 'react'

const Header = () => {
    
  return (
    <div>
        <div className="bg-black text-white text-center flex ">
    <div className="w-full">
        <span className="text-white block mx-auto">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="text-white">Shop Now</a></span>
    </div>
    <div className="hidden md:block   ">
        <ul className="flex flex-col font-medium ">
            <li className="relative">
                <button className="flex items-center text-white-100 rounded dark:text-white">English <svg className="w-2.5 h-2.5 ms-2.5" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg></button>
            </li>

        </ul>
    </div>
    </div>

      <nav className="bg-white border-gray-200">
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
                    <a href="/whishList"> wishlist   <img className="w-6 h-6 " src="data:image/png;base64,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" alt=""/>  </a>
                    <a href="/cart">Cart <img className="w-6 h-6" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shopping_cart.png" alt="" /></a>
                    {/* <DropDown/>  */}
                    </div>
                    
                       
                   
            </div>
            <div className="items-center w-full md:flex md:w-auto md:order-1">
                <ul className="flex font-medium md:space-x-8 ">
                    <li>
                        <a href="/" className="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="/aboutUs" className="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">About Us</a>
                    </li>
                    <li>
                        <a href="/singup" className="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">Sign Up </a>
                    </li>
                    <li>
                        <a href="/login" className="block py-2 px-3 text-gray-900 rounded no-underline hover:underline">Log-In</a>
                    </li>
                    
                   
                </ul>
            </div>
            <AccountMenu/>
        </div>
      </nav>
    </div>
  )
}

export default Header
