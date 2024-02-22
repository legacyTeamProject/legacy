'use client'

import Image from "next/image";

import Header from './home/comp/Header'
import Footer from "./home/comp/Footer";
import Cloudzz from "./home/comp/Cloudzz"
import { useEffect, useState } from "react";
import axios from 'axios'



export default function Home() {


  const[data,setData]=useState<[]>()

// useEffect(
//   ()=>{
//      async function getall() {
//         try{

//           await axios.get('http://localhost:3000/category/getAll')
//           .then((res)=>setData(res.data))

//         }catch(err){console.log(err)}

//       }
//       getall()
//   },[]
// )
useEffect(
  ()=>{
     const getall=()=> {
        
 axios.get('http://localhost:3000/category/getAll')
          .then((res)=>{setData(res.data)})

        .catch((err)=>{console.log(err)})

      }
      getall()
  },[]
)



  return (
    <main >
    
    <Cloudzz/>
    </main>
  );
}
