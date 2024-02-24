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
import DeleteIcon from '@mui/icons-material/Delete';

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
  interface refresh{

  }

 
const ReviewIcon: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} color={index < rating ? 'warning' : 'disabled'} />
    ));
  
    return <div>{stars}</div>;
};

export default function WishList() {
  const [wishes, setWishes] = useState<Product[]>([]);
  const [refresh,setrefresh]= useState(false)

  useEffect(() => {
    async function fetchData(id:number) {
      try {
        const response = await axios.get(`http://localhost:3000/wish/getOne/${id}`);
        setWishes(response.data)
        console.log(response.data);
        ;
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchData(1);
  }, [refresh]);

  const deleted = async (idWishlist: number,userid:number) => {
    try {
      await axios.delete(`http://localhost:3000/wish/delete/${idWishlist}/${userid}`);
      console.log('deleted fav');
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="wishlist-container">

      <div style={{ width: '100%', height: '100vh', borderTop: '1px solid black' }}>
        <div style={{ width: '100%', display: 'flex' }}>
          <h1 style={{ marginTop: 60, marginLeft: 40, borderBottom: 1 }}>wishlist({wishes.length})</h1>
        </div>

        <div style={{ width: '100%', margin: 'auto', marginTop: 10 }} className="card-animation">
          {wishes.map((e,i) => (
             <Card
             key={e.idWishList}
             className= 'card-fixed'
             sx={{ width: 300, height: 300, margin: 'auto', marginLeft: 8, display: 'inline-block', marginTop: 15 }}
           >
              <CardMedia component="img" height="160px" image={e.file} alt="Product" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {e.name} - {e.price}
                  
                  <ReviewIcon rating={4} />
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
              <Button
                onClick={() => {}} 
                sx={{ marginLeft: 20, marginTop: 5, backgroundColor: 'black', width: 'auto' }}
                variant="contained"
                disableElevation
              >
                ADD TO THE CART
              </Button>
              <DeleteIcon  onClick={() => deleted(e.prodId,1)} />
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
