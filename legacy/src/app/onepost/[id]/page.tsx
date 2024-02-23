'use client'

import React,{useEffect,useState} from 'react';
import axios from 'axios';

function ProductDetails() {
    interface ProductDetailsProps {
        prodId: Number;
        name: String;
        description: String;
        price: Number;
        ratings: Number;
        file: String;
        sold: Number;
        quantity: Number;
      }
      interface Images{
        imgid:Number;
        img:String
      }

const[prod,setProd] = useState<ProductDetailsProps[]>([])
const [image,setImage]=useState<Images[]>()

useEffect(()=>{
  async function fetch(id:any) {
    try{axios.get(`http://localhost:3000/apii/product/${id}`)
        .then((response) => {
           setProd(response.data);
    
         })
         .catch((error) => {
             console.error("Error fetching :", error);
         })
        }catch(err){console.log(err)}

  }
  const  getimage=async(id:number)=>{
    try {
        
        await axios.get(`http:/localhost:3000/apii/product/productImg/${id}`)
        .then((res)=> {
        setImage(res.data),
        console.log(image)}
        )
    
    }catch(err){console.log(err)}
    }
  fetch(props.params.id)
  getimage(props.params.id)

},[props.params.id])




    return (
        <div>
        <h1 className="text-3xl font-bold ml-80">the Product</h1>
    
    

        <div className="flex mt-20  ">
           <div> {
                image.map((el,i)=>{
                    return (
                        <div className="p-4 ml-40">
                        <div className=" max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden " key={i}>
                            <img src={el.img} alt="img" className="w-[170px] h-[138px]"/>
                        </div>
                        </div>
                    )
                }
            )}
            </div>
            <div className=" border border-gray-100 rounded-md h-[480px] " >
            <img src={prod.file} alt={prod.name} className="w-[650px] h-[480px]" />
            </div>
               <div className=' mt-40' >
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
                <div className="p-4  " >
                    <div className="text-lg font-semibold">{prod.name}</div>
                    <div className="text-gray-600 mt-2">${prod.price}</div>
                    <div className="text-gray-700 mt-2">{prod.description}</div>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            rating:
                            {[...Array(prod.ratings)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))}
                            {[...Array(5 - prod.ratings)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-gray-200 dark:text-gray-600" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <div className="border border-black rounded-md p-4">
    <div className="text-lg">
        <div className="border-b border-gray-300 my-3 py-2">
            <p >Free Delivery</p>
                        <p className="text-gray-700" >Enter your postal code for Delivery Availability</p>

        </div>

    </div>
    <div >
        <p >Return Delivery</p>
        <p className="text-gray-700">Free 30 Days Delivery Returns. Details</p>
    </div>
</div>


                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ProductDetails;
