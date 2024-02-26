'use client'

import React, { useState } from 'react'
import Cookies from 'js-cookie';

import ProductChart from './dashboard/charty'
import Home from './dashboard/sellerprod'
import AddProduct from './dashboard/addprod'

const page = () => {

const[view,setView]=useState<string>('')

const changev=(e:any)=>{
    setView(e)
}
Cookies.get('name')
  return (
    <div style={{height:1000}}> 
         

    <aside style={{width:'20%',height:"50%",backgroundColor:'white',marginTop:20,borderRadius:20}} id="logo-sidebar" className="absolute top-20 left-0 z-0; w-body  pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <h1 style={{fontSize:29,textAlign:'center',color:'black',fontFamily:'system'}}>welcome {Cookies.get('name')}</h1>
    <div style={{width:'60'}}>
      
      <img  style={{width:'60%', marginLeft:80,marginBottom:15}} src="https://images.ctfassets.net/23aumh6u8s0i/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNq-fhMeQRIAFfcfgPFaQDO8yTQ_SOW1-6raA_0HgiiKDJTV0TkDiojPT98h40g8T4FAk&usqp=CAU/4537716dd5f5d355c8a64c16726f15c0/jwt" alt="" /></div>
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
       
      
     </ul>
  </div>
</aside>


    
 <div style={{width:'70%',marginLeft:390,marginTop:40}}>

   {view=== 'overview' && <ProductChart/>}
   {view=== 'prodinfo' && <Home/>}
   {view=== 'ADD' && <AddProduct/>}


   
    </div>



</div>
  )
}

export default page