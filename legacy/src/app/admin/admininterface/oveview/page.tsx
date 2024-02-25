'use client'

import React,{useContext,useState} from 'react'
import axios from 'axios';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import { updateUserRole } from '../../../server/Controller/Client';

const Overview = () => {
const [role,setRole]=useState<string>('')

    const deleteUser=(userId:any)=>{
        axios.delete(`http://localhost:3000/client/delete/${userId}`)
        .then((res)=>{console.log("deleted")})
        .catch((error)=>{console.log("error")})
    }


    const UpdateUserStatus=(userId:any,obj:{})=>{
        axios.put(`http://localhost:3000/client/updateRole/${userId}`,obj)
        .then((res)=>{console.log("updated")})
        .catch((error)=>{console.log("error UPD")})
    }



  return (
    <div>
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
                    User Role
                </th>
                
                <th scope="col" className="px-6 py-3">
               User Image
                </th>
                <th scope="col" className="px-6 py-3">
               
                </th>
            </tr>
        </thead>
        <tbody>
        {/* {users.map((user,index)=> (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.userId}
            </th>
            <td className="px-6 py-4">
                {user.firstName} {user.lastName} 
            </td>
            <td className="px-6 py-4">
                {user.role}
            </td>
            
            <td className="px-6 py-4">
            <img src={user.image} alt="" className='w-20 h-20'/>
            </td>
            <td className="px-6 py-4">
            <DeleteIcon onClick={()=>{deleteUser(user.userId)}}/>

            <select onChange={(e)=>setRole(e.target.value)}>
                <option >{"Client"}</option>
                <option >{"Seller"}</option>
            </select>

            <EditIcon onClick={()=>{UpdateUserStatus(user.userId,{role:role})}}/>
            <button  onClick={()=>{UpdateUserStatus(user.userId,{role:role})}}> Update </button>
            </td>
        </tr>
                )

                )} */}
            
        </tbody>
    </table>
</div>
</div>
 
  )
}

export default Overview
