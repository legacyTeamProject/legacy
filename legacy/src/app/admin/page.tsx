'use client'

import React, { useState } from 'react'
import ClientInfo from './admininterface/client'
import Overview from './admininterface/overview'
import Products from './admininterface/produc'
import ProductInfo from './admininterface/product'
import Add from './admininterface/Add'
import SellerInfo from './admininterface/SellerInfo'
import Edit from './admininterface/editprofile'
import Cookies from 'js-cookie';

const page = () => {

const[view,setView]=useState<string>('')

const changev=(e:any)=>{
    setView(e)
}

  return (
    <div style={{height:1000}}> 
         

    <aside style={{width:'20%',height:"50%",backgroundColor:'white',marginTop:20,borderRadius:20}} id="logo-sidebar" className="absolute top-20 left-0 z-0; w-body  pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <h1 style={{fontSize:29,textAlign:'center',color:'black',fontFamily:'system'}}>welcome  {Cookies.get('name')}</h1>
    <div style={{width:'60'}}>
      
      <img  style={{width:'60%', marginLeft:80,marginBottom:15}} src="https://images.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNq-fhMeQRIAFfcfgPFaQDO8yTQ_SOW1-https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjbwBwjCSMJPuJC4RYGoQxKh6wZAqaM6rNkQuHwHaF7joDPUAqXUldYlZ8KpFwXlwT-k&usqp=CAU&usqp=CAU.net/23aumh6u8s0i/4Q6uHmPKZjR2XVuIehcO9J/4537716dd5f5d355c8a64c16726f15c0/jwt" alt="" /></div>
  <div className="h-body px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-200">
     <ul className="space-y-2 font-medium">
        <li>
        <h1  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-white-700 group">

              <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                 <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                 <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
              </svg>
              <span className="ms-3" onClick={()=>{changev('overview')}}>Dashboard</span>
              </h1>

        </li>
        
        <li>
        <h1  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-white-700 group">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                 <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
              </svg>
              
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"onClick={()=>{changev('seller')}}>Sellers</span>
           </h1>
        </li>
        <li>
        <h1  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-white-700 group">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                 <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap" onClick={()=>{changev('prodinfo')}}>ProductInfo</span>
           </h1>
        </li>
        <li>
        <h1  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-white-700 group">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                 <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap"onClick={()=>{changev('ADD')}}> ADD category</span>
           </h1>
        </li>
        <li>
        <h1  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-white-700 group">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                 <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap"onClick={()=>{changev('client')}}> Our Users </span>
           </h1>
        </li>
        <li>
        <h1  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-white-700 group">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                 <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap"onClick={()=>{changev('profile')}}> Edit Profile </span>
           </h1>
        </li>

      
     </ul>
  </div>
</aside>


    
 <div style={{width:'70%',marginLeft:390,marginTop:40}}>

   {view=== 'overview' && <Overview/>}
   {view=== 'seller' && <SellerInfo/>}
   {view=== 'prodinfo' && <ProductInfo/>}
   {view=== 'client' && <ClientInfo/>}
   {view=== 'ADD' && <Add/>}
   {view=== 'profile' && <Edit/>}


   
    </div>



</div>
  )
}

export default page