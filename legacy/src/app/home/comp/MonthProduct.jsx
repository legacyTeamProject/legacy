'use client'

import React, { useEffect, useState }from 'react';
import axios from 'axios';


const MonthProduct = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/apii/getAll")
            .then((response) => {
                console.log('Data from rating:', response.data);
                const filteredProducts = response.data.filter(product => product.sold >= 4);
                setProducts(filteredProducts);
            })
            .catch((error) => {
                console.error("Error fetching:", error);
            });
    }, []);

    return (
        <div className="relative w-4/5 mt-20 p-8 mx-auto">
            <div className="gap-20">
                <div className="flex mt-2 gap-8">
                    {/* <img className="h-10 w-15 " src={rectangle} alt="" /> */}
                    <h1 className="text-red-500 font-bold text-xl">This Month</h1>
                </div>
                <h1 className="text-black font-bold text-4xl">Best Selling Products</h1>
                <div className="flex p-8">
                    {products.map((product, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg px-5 pb-5">



                    <div className="h-48 overflow-hidden mb-2">
                        <img src={product.file} alt={product.name} className="w-full h-full object-cover"  />
                    </div>



                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                        <button className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add to cart</button>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {[...Array(product.ratings)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            ))}
                            {[...Array(5 - product.ratings)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-gray-200 dark:text-gray-600" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>))}
                </div>
            </div>
        </div>
    );
}

export default MonthProduct;