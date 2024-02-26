import React from 'react';
import { Phone, Computer, Camera, Headphones, VideogameAsset } from '@mui/icons-material'; 
import Link from 'next/link';

const Categories = () => {
  return (
    <div className="relative w-4/5 mt-20 p-8 mx-auto" style={{marginTop:20}}>
      <div className="gap-20">
        <div className="flex mt-2 gap-6">
          <h1 className="text-red-500 font-bold text-xl">Categories</h1>
        </div>
        <h1 className="text-black font-bold text-4xl">Browse By Category</h1>
        <div className="flex justify-center w-fill h-60 mt-10" style={{marginLeft:40}} > 
          <Link href="/sub/1">
              <Phone sx={{ width: 100,height:150,marginLeft:10 }} />
            
          </Link>
          <Link href={{pathname: "/sub/2", query: {catId: 1}}}>
              <Computer sx={{ width: 100,height:150,marginLeft:10 }} />
            
          </Link>

          <Link href={{pathname: "/sub/3", query: {catId: 1}}} >
              <Camera sx={{ width: 100,height:150,marginLeft:10 }}  />
            
          </Link>

          <Link href={{pathname: "/sub/1", query: {catId: 1}}}>
              <Headphones sx={{ width: 100,height:150,marginLeft:10 }} />
            
          </Link>
          <Link href={{pathname: "/sub/4", query: {catId: 1}}}>
              <VideogameAsset sx={{ width: 100,height:150,marginLeft:10 }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
