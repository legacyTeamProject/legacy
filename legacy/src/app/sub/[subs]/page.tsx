'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { useSearchParams } from 'next/navigation'
import Cookies from 'js-cookie';

interface Product {
  prodId: number;
  name: string;
  price: number;
  file: string;
  description:string;
rating:number;
quantity:number;
sold:number;
ratings:number


}

const ReviewIcon: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} color={index < rating ? 'warning' : 'disabled'} />
    ));
  
    return <div>{stars}</div>;
};

export default function subs(props:any) {
  const [prod, setProd] = useState<Product[]>([]);
  const searchParams = useSearchParams()
  
  const catId = searchParams.get('catId')
  console.log(catId, "teswt");
  
  useEffect(() => {
    async function fetchData(catid:any,proid:number) {
      try {
        const response = await axios.get(`http://localhost:3000/category/catprodz/${catid}/${proid}`);
        setProd(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchData(catId,props.params.subs);
  }, []);

  
  const addToCart = async (productId:any) => {
    try {
      await axios.post('http://localhost:3000/cartt/addOne', { userUserId:Cookies.get("id"), productProdId: productId, CartQuantity: 1 });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const addToWishList = async (productId:any) => {
    try {
      const response = await axios.post('http://localhost:3000/wish/add', { UserUserId:Cookies.get("id"), productProdId: productId });
      console.log('Added to wishlist:', response.data);
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };
  
  const ReviewIcon: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} color={index < rating ? 'warning' : 'disabled'} />
    ));

    return <div>{stars}</div>;
  };


  return (
    <main>
      <div style={{ width: '100%', height: '100vh', borderTop: '1px solid black' }}>
        <div style={{ width: '100%', display: 'flex' }}>
          <h1 style={{ marginTop: 60, marginLeft: 40, borderBottom: 1 }}>({prod.length})</h1>
        </div>

        <div style={{ width: '100%', margin: 'auto', marginTop: 10,display:'flex',flexWrap:'wrap' }}>
          {prod.map((product,i) => (
            <Card key={i} sx={{ width: 250, boxShadow: 4,marginLeft:5 }}>
            <CardMedia component="img" height="150" image={product.file} alt={product.name} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.name} - ${product.price}
                <ReviewIcon rating={product.ratings}/>
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'space-between' }}>
              <IconButton aria-label="add to favorites" onClick={() => addToWishList(product.prodId)}>
                <FavoriteIcon />
              </IconButton>
              <Button
                onClick={() => addToCart(product.prodId)}
                sx={{ backgroundColor: 'black', color: 'black' }}
                variant="contained"
              >
                ADD TO CART
              </Button>
            </CardActions>
          </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
