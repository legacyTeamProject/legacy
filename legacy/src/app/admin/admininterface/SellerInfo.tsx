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
        const response = await fetch(`http://localhost:3000/client/getSome/seller`);
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
    
    <div className="container mx-auto mt-10">
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Seller ID</th>
            <th className="px-4 py-2">Seller Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Average Rating</th>
            <th className="px-4 py-2">Total Earnings</th>
            <th className="px-4 py-2">More Details</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.userId} className="bg-white">
              <td className="border px-4 py-2">{seller.userId}</td>
              <td className="border px-4 py-2">{`${seller.firstName} ${seller.lastName}`}</td>
              <td className="border px-4 py-2">{seller.email}</td>
              <td className="border px-4 py-2">4</td>
              <td className="border px-4 py-2">2999</td>
              <td className="border px-4 py-2">
                <Products />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default SellerInfo
