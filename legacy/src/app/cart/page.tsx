"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cloudzz from '../home/comp/Cloudzz';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
// import useRouter from 'next'
import path from 'path';
import Link from 'next/link';


////////
interface CartItem {
  prodId: number;
  name: string;
  price: number;
  file: string;
  description:string;
  sold:number;
  quantity:number
}
interface refresh {

}

const CartProduct: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [refresh,setrefresh]= useState(false)


const router=useRouter()
const navigate=(path:string)=>{
  router.push(path)
}





  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/cartt/getUserc/${Cookies.get('id')}  `);
        setCart(res.data);
        console.log(res.data)
        console.log("coookiesss", Cookies.get('id') );
        ;
        
        setQuantity( 1);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartData();
  }, [refresh]);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const deleteProduct = async (prod: number) => {
      
      await axios.delete(`http://localhost:3000/cartt/deletprod/${prod}/${ Cookies.get('id') }`)
      .then((res)=>{console.log(res),
      setrefresh(!refresh)})
      .catch((err)=>{console.log(err)})
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * quantity;
    });
    return total;
  };
  // const getTotal = () => {
  //   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

  return (
    <main>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="">
            <div className="md:w-full">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                      <th className="text-left font-semibold">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.prodId}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img className="h-16 w-16 mr-4" src={item.file} alt="Product image" />
                            <span className="font-semibold">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4">$ {item.price}</td>
                        <td className="py-4">
                          <div className="bg-white border border-gray-200 w-[90px] rounded-lg dark:bg-slate-900 dark:border-gray-700">
                            <div className="w-full flex justify-between items-center gap-x-1">
                              <div className="grow py-2 px-3">
                                <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="text" value={quantity} readOnly />
                              </div>
                              <div className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                                <button type="button" onClick={()=>{decrementQuantity()}} className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                  <svg className="flex-shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                </button>
                                <button type="button" onClick={()=>{incrementQuantity()}} className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                  <svg className="flex-shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">{item.price * quantity}</td>
                        <td className="py-4">
                          <button className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() =>{ deleteProduct(item.prodId)}}>Remove</button>
                        </td>
                      </tr>
                    ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex py-8 justify-between">
            <div className="flex w-[900px]">
              <div className="flex w-[600px] h-10">
                <input type="email" placeholder="Coupon Code" className=" h-full w-full rounded-[7px] bg-white px-3 py-2.5 text-blue-gray-700 " />
                <button className="text-white w-full bg-red-500 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Apply Coupon</button>
              </div>
            </div>
            <div className="md:w-1/4 ">
              <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
<div className="flex justify-between mb-2">
  <span>Subtotal</span>
  <span>${getTotal()}</span>
</div>
<div className="flex justify-between mb-2">
  <span>Shipping</span>
  <span>  - ${getTotal() > 1000 ? getTotal() * 0.1:" 00.00"}  </span> 
</div>
<hr className="my-2" />
<div className="flex justify-between mb-2">
  <span className="font-semibold">Total</span>
  <span className="font-semibold">${getTotal() > 150 ? getTotal() - (getTotal() * 0.1) :getTotal()}</span>
</div>
  <Link href={'/payment'}> <button className="text-white w-full bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Process to checkout</button></Link> 
               
              </div>
            </div>
          </div>
          </div>
          
        </div>
        <Cloudzz />
      </div>
    </main>
  );
};

export default CartProduct;
