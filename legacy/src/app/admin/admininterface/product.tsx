'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {useContext,useState,useEffect} from 'react'
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
const ProductInfo = () => {
    
    interface ProductDetailsProps {
        prodId: number;
        name: string;
        description: string;
        price: number;
        ratings: number;
        file: string;
        sold: number;
        quantity: number;
        userUserId:any
      }
    
const[prod,setProd]=useState<ProductDetailsProps[]>([])

    const deleteProd=(prodId:any)=>{
        axios.delete(`http://localhost:3000/apii/product/${prodId}`)
        .then((res)=>{console.log("deleted")})
        .catch((error)=>{console.log("error")})
    }


    useEffect(
        ()=>{
            const get=async()=>{
              await  axios.get(`http://localhost:3000/apii/product`)
                .then((res)=>{setProd(res.data)})
                .catch((error)=>{console.log("error")})
            }
            get()

        },[]
    )


  return (
    <div style={{ display: 'flex', height: '1000px' }}>
            <div style={{ width: '1%', backgroundColor: '#f3f4f6',  overflowY: 'auto' }}>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: 5, overflowY: 'auto' }}>
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10 w-4/5 ml-auto mr-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Images
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ratings
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {prod.map((prod, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <DeleteIcon onClick={() => { deleteProd(prod.prodId); }} />   {prod.prodId}
                                        </th>
                                        <td className="px-6 py-4">
                                            {prod.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src={prod.file} alt="" className='w-32 h-24' />
                                        </td>
                                        <td className="px-6 py-4">
                                            {prod.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            ${prod.price} {prod.userUserId}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Box style={{ "display": "flex", "alignItems": "center" }}><Rating value={prod.ratings} readOnly /> <p> ({prod.ratings})</p></Box>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default ProductInfo
