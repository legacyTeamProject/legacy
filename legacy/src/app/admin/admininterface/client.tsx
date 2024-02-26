'use client'

import React from 'react'
import { Height } from '@mui/icons-material'
const ClientInfo = () => {
  return (
    
<div style={{padding:5,height:1000}}>
 <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10 w-4/5 ml-auto mr-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    User id
                </th>
                <th scope="col" className="px-6 py-3">
                    User Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                
                <th scope="col" className="px-6 py-3">
                favorite Items 
                </th>
                <th scope="col" className="px-6 py-3">
                    Stats
                </th>
                <th scope="col" className="px-6 py-3">
                    Total Payed
                </th>
            </tr>
        </thead>




        <tbody>
        {/* {users.map((user,index)=>{
            if(user.role==="Client") {
                return (
                    <tr  key={index}className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.userId}
            </th>
            <td className="px-6 py-4">
                {user.firstName} {user.lastName} 
            </td>
            <td className="px-6 py-4">
                <img src={user.image} alt="" className='w-20 h-20'/>
            </td>
            
            <td className="px-6 py-4">
           
            </td>
            <td className="px-6 py-4">
            </td>
            <td className="px-6 py-4">
                2000
            </td>
        </tr>
                )
            }
                    
                })} */}
            
        </tbody>
    </table>
</div>
</div>
  )
}

export default ClientInfo
