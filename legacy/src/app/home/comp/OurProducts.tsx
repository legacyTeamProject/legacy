
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cookies from 'js-cookie';

const OurProducts = () => {
  interface Product {
    prodId: number;
    name: string;
    price: number;
    file: string;
    description: string;
    sold: number;
    quantity: number;
    idWishList: number;
    ratings:number;
  }

  const [prod, setProd] = useState<Product[]>([]);
  const [favoriteStates, setFavoriteStates] = useState<boolean[]>([]);
  const [rating, setrating] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/apii/product');
  //       const initialFavoriteStates = response.data.map(() => false);
  //       setProd(response.data);
  //       setFavoriteStates(initialFavoriteStates);
  //     } catch (error) {
  //       console.error('Error fetching product data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const getRating = async (id: number) => {
    try {
        const res = await axios.get(`http://localhost:3000/apii/getrating/${id}`);
        setrating(res.data)
        console.log(res);
        ;
    } catch (err) {
        console.log(err);
    }
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/apii/product')
        
        const initialFavoriteStates = response.data.map(() => false);
        setProd(response.data);
        setFavoriteStates(initialFavoriteStates);
  
      
        response.data.forEach((product:Product) => {
          getRating(product.prodId);
        });
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchData();
  }, []);

 

  const addToCart = async (productId: any) => {
    try {
      await axios.post('http://localhost:3000/cartt/addOne', { userUserId:Cookies.get('id') , productProdId: productId, CartQuantity: 1 });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const addToWishList = async (productId: any, index: number) => {
    try {
      const response = await axios.post('http://localhost:3000/wish/add', { userUserId: Cookies.get('id'), productProdId: productId });
      console.log('Added to wishlist:', response.data);
      setFavoriteStates(prevStates => {
        const newStates = [...prevStates];
        newStates[index] = !prevStates[index]; 
        return newStates;
      });
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000 
  };

  const ReviewIcon: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} color={index < rating ? 'warning' : 'disabled'} />
    ));

    return <div>{stars}</div>;
  };

  return (
    <div className="relative w-4/5 mt-20 mx-auto" style={{ width: '100%', marginTop: 20,borderTop:2  }}>
      <div className="gap-20">
        <div className="flex mt-2 gap-8">
          <h1 className="text-red-500 font-bold text-xl">Our Products</h1>
        </div>
        <h1 className="text-black font-bold text-4xl">Explore Our Products</h1>
       
       <div style={{width:'90%',margin:'auto',marginTop:10}}>
       <Slider {...settings}>
                    {prod.map((product, index) => (
                        <Card key={index} sx={{ width: 250, boxShadow: 4,marginLeft:5 }}>
                           <Link href={`/onepost/${product.prodId}`}>

                            <CardMedia component="img" height="150" image={product.file}  alt={product.name} />
                            </Link>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {product.name} - ${product.price}
                                    <ReviewIcon rating={product.ratings}/>
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'space-between' }}>
                                <IconButton aria-label="add to favorites" onClick={() => addToWishList(product.prodId, index)}>
                                    {favoriteStates[index] ? <FavoriteIcon color="error" /> : <FavoriteIcon />}
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
                </Slider>
       </div>
      
      </div>
    </div>
  );
};

export default OurProducts;
