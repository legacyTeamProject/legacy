
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
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

interface Product {
  prodId: number;
  name: string;
  price: number;
  file: string;
  description: string;
  sold: number;
  quantity: number;
  idWishList: number;
  ratings: number;
}

const ReviewIcon: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} color={index < rating ? 'warning' : 'disabled'} />
  ));

  return <div>{stars}</div>;
};

const WishList: React.FC = () => {
  const [wishes, setWishes] = useState<Product[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  console.log(wishes)

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const response = await axios.get(`http://localhost:3000/wish/getOne/${id}`);
        setWishes(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchData(1);
  }, [refresh]);

  const deleted = async (idWishlist: number, userId: number) => {
    try {
      await axios.delete(`http://localhost:3000/wish/delete/${idWishlist}/${userId}`);
      console.log('Deleted from wishlist');
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error deleting from wishlist:', error);
    }
  };

  const addToCart = async (productId: number) => {
    try {
      await axios.post('http://localhost:3000/cartt/addOne', { userUserId: 1, productProdId: productId, CartQuantity: 1 });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <main className="wishlist-container">
      <div style={{ width: '100%', height: '100%', borderTop: '1px solid black' }}>
        <div style={{ width: '100%', display: 'flex' }}>
          <h1 style={{ marginTop: 60, marginLeft: 40, borderBottom: 1 }}>Wishlist ({wishes.length})</h1>
        </div>

        <div style={{ width: '100%', margin: 'auto',display:'flex',flexWrap:'wrap', marginTop: 10 }}>
          {wishes.map((product, index) => (
            <Card key={index} sx={{ width: 250,marginTop:10, boxShadow: 4 ,marginLeft:5}}>
              <CardMedia component="img" height="150" image={product.file} alt={product.name} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.name} - ${product.price}
                  <ReviewIcon rating={product.ratings} />
                </Typography>
              </CardContent>
              <IconButton onClick={() => deleted(product.prodId, 1)}>
                <DeleteIcon />
              </IconButton>
              <CardActions style={{ justifyContent: 'space-between' }}>
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
};

export default WishList;
