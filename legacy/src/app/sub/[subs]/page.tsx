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

interface Product {
  prodId: number;
  name: string;
  price: number;
  file: string;
  description:string;
rating:number;
quantity:number;
sold:number;


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
    async function fetchData(catid:number,proid:number) {
      try {
        const response = await axios.get(`http://localhost:3000/category/catprodz/${catid}/${proid}`);
        setProd(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchData(catId,props.params.subs);
  }, []);

  

  return (
    <main>
      <div style={{ width: '100%', height: '100vh', borderTop: '1px solid black' }}>
        <div style={{ width: '100%', display: 'flex' }}>
          <h1 style={{ marginTop: 60, marginLeft: 40, borderBottom: 1 }}>({prod.length})</h1>
        </div>

        <div style={{ width: '100%', margin: 'auto', marginTop: 10 }}>
          {prod.map((e) => (
            <Card
              key={e.name} 
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
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
