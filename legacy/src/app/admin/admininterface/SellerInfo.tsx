'use client'

import React from 'react'
import {useContext,useState,useEffect} from 'react'
import axios from 'axios'
import Products from './produc'


const SellerInfo = () => {

    interface SellerInfo {
        userId: string;
        firstName : string
        lastName : string
        email: number;
      }


    const [single,setSingle]=useState()
  const[someProd,setSomeProd]=useState([])
  const [sellers, setSellers] = useState<SellerInfo[]>([]);
// const getUser =(userId)=>{
// axios.get(`http://localhost:3000/client/get/${userId}`)
// .then((res)=>{console.log("singleeeeeeeeeeeeeeeeeeee")})
// .catch((error)=>console.log("error"));
// }
// const getSome =()=>{
// axios.get(`http://localhost:3000/client/get/${userId}`)
// .then((res)=>{console.log("singleeeeeeeeeeeeeeeeeeee")})
// .catch((error)=>console.log("error"));
// }

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/client/getSome/client`);
        const result = await response.json();
        setSellers(result);
        console.log(sellers);
        console.log(result);
      } 
      catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])

 

  return (
    
    <div>


,<div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10 w-4/5 ml-auto mr-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3" >
                    SellerId
                </th>
                <th scope="col" className="px-6 py-3" >
                    Seller Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                <th scope="col" className="px-6 py-3">
                    Average Rating
                </th>
                <th scope="col" className="px-6 py-3">
                Total Earnings
                </th>
                <th scope="col" className="px-6 py-3">
                    More Details
                </th>
            </tr>
        </thead>




        <tbody>
             {sellers.map((element)=>{
               
                    return (
                        <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {element.userId}
                        </th>
                        <td className="px-6 py-4">
                            {element.firstName} {element.lastName}
                        </td>
                        <td className="px-6 py-4">
                           {element.email} 
                        </td>
                        <td className="px-6 py-4">
                            4 WishtList Component
                        </td>
                        <td className="px-6 py-4">
                        
                        2999
                        </td>

                        <td className="px-6 py-4"
                
                          
                          > <Products /> 
                            
                        </td>
                    </tr>
                    )
                
            })} 
           
        </tbody>
    </table>
</div>
</div>
  )
}

export default SellerInfo
