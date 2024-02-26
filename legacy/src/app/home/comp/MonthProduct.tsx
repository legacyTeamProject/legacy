import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cookies from 'js-cookie';
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

const MonthProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [favoriteStates, setFavoriteStates] = useState<boolean[]>([]);
    const [rating, setrating] = useState(0);
    const ReviewIcon: React.FC<{ rating: number }> = ({ rating }) => {
        const stars = Array.from({ length: 5 }, (_, index) => (
            <StarIcon key={index} color={index < rating ? 'warning' : 'disabled'} />
        ));
        return <div>{stars}</div>;
    };

    const getRating = async (id: any) => {
        try {
            const res = await axios.get(`http://localhost:3000/apii/getrating/${id}`)
            console.log(res);
            
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/apii/getbyrate/4");
                setProducts(response.data)
                ;
                // Initialize favorite states based on initial data
                setFavoriteStates(response.data.map(() => false));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const addToCart = async (productId: any) => {
        try {
            await axios.post('http://localhost:3000/cartt/addOne', { userUserId: Cookies.get('id'), productProdId: productId, CartQuantity: 1 });
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const addToWishList = async (productId: any, index: number) => {
        try {
            const response = await axios.post('http://localhost:3000/wish/add', { UserUserId: Cookies.get('id'), productProdId: productId });
            console.log('Added to wishlist:', response.data);
            // Toggle the favorite state for the clicked product
            const newFavoriteStates = [...favoriteStates];
            newFavoriteStates[index] = !newFavoriteStates[index];
            setFavoriteStates(newFavoriteStates);
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
        autoplaySpeed: 2000
    };

    return (
        <div className="relative w-4/5 mt-20 p-8 mx-auto" style={{ marginTop: 20 }}>
            <div className="gap-20">
                <div className="flex mt-2 gap-8">
                    <h1 className="text-red-500 font-bold text-xl">This Month</h1>
                </div>
                <h1 className="text-black font-bold text-4xl">Best Selling Products</h1>
                <Slider {...settings}>
                    {products.map((product, index) => (
                        <Card key={index} sx={{ width: 250, boxShadow: 4, marginLeft: 3 }}>
                            <Link href={`/onepost/${product.prodId}`}>
                                <CardMedia component="img" height="150" image={product.file} alt={product.name} />
                            </Link>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {product.name} - ${product.price}
                                    <ReviewIcon rating={product.ratings} />
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
    );
};

export default MonthProduct;
