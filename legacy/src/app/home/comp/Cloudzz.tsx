import React from 'react'
import rectangle from '../assets/rectangle.png';
// import Footer from './Footer';
function Cloudzz() {
  return (
    <>
    {/* <Footer/> */}
    <div className="relative w-4/5 mt-20 p-8 mx-auto" >
               <div className="flex mt-2 gap-8">
                    <img className="h-10 w-15 "/* src={rectangle}*/ alt="" />
                    <h1 className="text-red-500 font-bold text-xl">Us</h1>
                </div>
                <h1 className="text-black font-bold text-4xl">Features</h1>

        <div className='ml-80 grid grid-cols-3 '>
    <div>
    <img className='rounded-full w-40 ml-4' src="https://st.depositphotos.com/27392032/60952/i/450/depositphotos_609525608-stock-photo-fast-shipping-delivery-truck-icon.jpg" alt="" />
    <h1 className='font-bold text-lg'>FREE AND FAST DELIVERY</h1>
    <h3 className='-ml-2'>Free delivery for all orders over $140</h3>
    </div>
    <div>
    <img className='rounded-full w-28 ml-4 mt-12' src="https://static.thenounproject.com/png/4074783-200.png" alt="" />
    <h1 className='font-bold text-lg'>24/7 CUSTOMER SERVICE</h1>
    <h3 className='-ml-2'>Friendly 24/7 customer support</h3>
    </div>
    <div>
        <img className='rounded-full w-28 ml-4 mt-12' src="https://cdn-icons-png.flaticon.com/512/95/95454.png" alt="" />
        <h1 className='font-bold text-lg'>24/7 CUSTOMER SERVICE</h1>
    <h3 className='-ml-2'>Friendly 24/7 customer support</h3>
    </div>
</div></div>
</>
  )
}

export default Cloudzz