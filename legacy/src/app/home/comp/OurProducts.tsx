'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';


const OurProducts = () => {
  
interface Product {

  prodId: number;
  name: string;
  price: number;
  file: string;
  description:string;
  sold:number;
  quantity:number;
  idWishList :number
}
const [prod,setProd]=useState<Product[]>([])


  useEffect(()=>{
         async function ftch(){
          await axios.get('http://localhost:3000/apii/product')
          .then((res)=>{setProd(res.data)})
        }
        ftch()
      },[]
    )

    const add=async(obj:{})=>{
      await axios.post('http://localhost:3000/cartt/addOne',obj)
.then().catch((err)=>{console.log(err)})
    }

    const addtowish = async(obj:{})=>{
      await axios.post('http://localhost:3000/wish/add',obj).then((res)=>{
         console.log(res.data);
      })
    .catch((error)=>{
      console.log(error);
    })
    }

    const ReviewIcon: React.FC<{ rating: number }> = ({ rating }) => {
      const stars = Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} color={index < rating ? 'warning' : 'disabled'} />
      ));
    
      return <div>{stars}</div>;
  };
  
  return (
    <div className="relative w-4/5 mt-20 mx-auto" style={{width:'100%',marginTop:10}}>
        <div className="gap-20">
            <div className="flex mt-2 gap-8">
                <h1 className="text-red-500 font-bold text-xl	">Our Products</h1>
            </div>
            <h1 className="text-black font-bold text-4xl">Explore Our Products</h1>
            {prod.map((e,i) => (
            <Card
              key={i} 
              sx={{ width: 200, height: 300, margin: 'auto', marginLeft: 8, display: 'inline-block', marginTop: 15 }}
            >
              <CardMedia component="img" height="160px" image={e.file} alt="Product" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {e.name} - {e.price}
                  azerty
                  <ReviewIcon rating={4} />
                
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton  aria-label="add to favorites">
                  <FavoriteIcon onClick={()=>{addtowish({UserUserId:1,productProdId:e.prodId})}}/>
                </IconButton>
              </CardActions>
              <Button
                onClick={() => {add({ userUserId:  1, productProdId: e.prodId, CartQuantity: 1 })}} 
                sx={{ marginLeft: 2, marginTop: 5, backgroundColor: 'black', width: 'auto' }}
                variant="outlined"
                disableElevation
              >
                ADD TO THE CART
              </Button>
            </Card>
          ))}
              
        </div>
    </div>
  )
}

export default OurProducts
