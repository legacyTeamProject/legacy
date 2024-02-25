"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FavoriteIcon from '@mui/icons-material/Favorite';
import  Link  from 'next/link';
import StarIcon from '@mui/icons-material/Star';
function ProductDetails(props: any) {
    interface ProductDetailsProps {
        prodId: number;
        name: string;
        description: string;
        price: number;
        ratings: number;
        file: string;
        sold: number;
        quantity: number;
    }

    interface Images {
        imgid: number;
        img: string;
    }

    interface Comment {
        comment_id: number;
        content: string;
    }

    const [prod, setProd] = useState<ProductDetailsProps>();
    const [images, setImages] = useState<Images[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);
    const [rating, setrating] = useState(0);

    useEffect(() => {
        const fetchProduct = async (id: any) => {
            try {
                const response = await axios.get(`http://localhost:3000/apii/product/${id}`);
                setProd(response.data[0]);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct(props.params.id);
    }, []);

    useEffect(() => {
        const getImages = async (id: any) => {
            try {
                const res = await axios.get(`http://localhost:3000/apii/productImg/${id}`);
                setImages(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        getImages(props.params.id);
    }, []);

    const addCart = async (obj: {}) => {
        try {
            await axios.post(`http://localhost:3000/cartt/addOne`, obj);
            console.log("Item added to cart");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const getComments = async (id: any) => {
            try {
                const res = await axios.get(`http://localhost:3000/comment/Onecomment/${id}`);
                setComments(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        getComments(props.params.id);
    }, [props.params.id]);


    useEffect(() => {
        const getRating = async (id: any) => {
            try {
                const res = await axios.get(`http://localhost:3000/apii/getrating/${id}`);
                setrating(res.data)
                console.log(res);
                ;
            } catch (err) {
                console.log(err);
            }
        };

        getRating(props.params.id);
    }, [props.params.id]);

    const ReviewIcon: React.FC<{ rating: number }> = ({ rating }) => {
        const stars = Array.from({ length: 5 }, (_, index) => (
          <StarIcon key={index} color={index < rating ? 'warning' : 'disabled'} />
        ));
    
        return <div>{stars}</div>;
      };

    //   const ReviewIcon: React.FC<{ rating: number, setRating: React.Dispatch<React.SetStateAction<number>> }> = ({ rating, setRating }) => {
    //     const [selectedRating, setSelectedRating] = useState(0);
    
    //     const handleRatingClick = (index: number) => {
    //         if (selectedRating === index + 1) {
    //             setSelectedRating(0); // Deselect if already selected
    //             // setRating(0); // Reset rating
    //         } else {
    //             setSelectedRating(index + 1); // Select the clicked rating
    //             setRating(index + 1); // Update the rating state
    //         }
    //     };
    
    //     const stars = Array.from({ length: 5 }, (_, index) => (
    //         <StarIcon
    //             key={index}
    //             color={index < selectedRating ? 'warning' : 'disabled'}
    //             onClick={() => handleRatingClick(index)}
    //         />
    //     ));
    
    //     return <div>{stars}</div>;
    // };
    

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Product Details</h1>
        <div >
          {/* Image Gallery */}
          <div className="flex  gap-4">
            {images.map((img, index) => (
              <div key={index} style={{width:250}}>
                <img src={img.img} alt="Product" className="w-full rounded-lg shadow-md" />
              </div>
            ))}
          </div>
          {/* Product Information */}
          <div className="border border-gray-200 rounded-md p-4 ">
            {/* <img src={prod?.file} alt={prod?.name} className="w-full h-auto rounded-lg shadow-md mb-4" /> */}
            <div className="text-lg font-semibold mb-2">{prod?.name}</div>
            <div className="text-gray-600 mb-2">${prod?.price}</div>
            <div className="text-gray-700 mb-2">{prod?.description}</div>
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-1 rtl:space-x-reverse"> 
              <ReviewIcon rating={rating}/>
              </div>
            </div>
            <h1 className="mb-2">Comments:</h1>
            <List className="max-w-m overflow-auto">
              {comments.map((comment, index) => (
                <ListItem key={index} className="border-b border-gray-200 py-2">
                  <ListItemText>{comment.content}</ListItemText>
                </ListItem>
              ))}
            </List>
            <div className="border border-black rounded-md p-4 mt-4">
              <div className="text-lg mb-4">
                <div className="border-b border-gray-300 my-3 py-2">
                  <p>Free Delivery</p>
                  <p className="text-gray-700">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div>
                <p>Return Delivery</p>
                <p className="text-gray-700">Free 30 Days Delivery Returns. Details</p>
              </div>
              <Button
              sx={{color:'black'}}
                variant='contained'
                color='primary'
                onClick={() => addCart({ userUserId: 1, productProdId: props.params.id, CartQuantity: 1 })}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
}

 export default ProductDetails