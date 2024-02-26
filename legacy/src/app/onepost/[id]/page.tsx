"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import Cookies from 'js-cookie';
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
        productProdId : number;
        userUserId : number
    }

    const [prod, setProd] = useState<ProductDetailsProps>();
    const [images, setImages] = useState<Images[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);
    const [rating, setRating] = useState<number>();
    const [commentInput, setCommentInput] = useState<string>('');

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
        // Add to cart logic
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

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentInput(event.target.value);
    };

    const handleSubmitComment = async (obj: Comment) => {
        try {
            const res = await axios.post(`http://localhost:3000/comment/AddComment`, obj);
            
            setComments([...comments, res.data]);
            
            setCommentInput('');
        } catch (err) {
            console.log(err);
        }
    };

    const handleRatingClick = async (value: number) => {
        try {
            const res = await axios.post(`http://localhost:3000/apii/addrating/${Cookies.get("id")}/${props.params.id}`, { rate: value });
            
            setRating(value); 
            
        }
        catch(err){console.log(err);
        }
    };
       
    

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Product Details</h1>
            <div>
                <div className="flex gap-4">
                    {images.map((img, index) => (
                        <div key={index} style={{ width: 250 }}>
                            <img src={img.img} alt="Product" className="w-full rounded-lg shadow-md" />
                        </div>
                    ))}
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                    <div className="text-lg font-semibold mb-2">{prod?.name}</div>
                    <div className="text-gray-600 mb-2">${prod?.price}</div>
                    <div className="text-gray-700 mb-2">{prod?.description}</div>
                    <div className="flex items-center mb-4 space-x-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                    <StarIcon
                    key={value}
                    onClick={() => handleRatingClick(value)}
                    style={{ cursor: 'pointer', color: value <= rating ? '#fdd835' : grey[400] }}
                                />
                        ))}
                    </div>
                    <h1 className="mb-2">Comments:</h1>
                    <List className="max-w-md overflow-auto">
                        {comments.map((comment, index) => (
                            <ListItem key={index} className="border-b border-gray-200 py-2">
                                <ListItemText>{comment.content}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                    <div className="border border-black rounded-md p-4 mt-4">
                        <TextField
                            label="Add a comment"
                            variant="outlined"
                            fullWidth
                            value={commentInput}
                            onChange={handleCommentChange}
                            multiline
                            rows={4}
                            margin="normal"
                        />
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => handleSubmitComment({ content: commentInput, productProdId: props.params.id, userUserId:Cookies.get("id") })}
                        >
                            Submit Comment
                        </Button>
                        <Button
                            sx={{ color: 'black', marginLeft: '10px' }}
                            variant='contained'
                            color='primary'
                            onClick={() => addCart({ userUserId :Cookies.get("id"), productProdId: props.params.id, CartQuantity: 1 })}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
