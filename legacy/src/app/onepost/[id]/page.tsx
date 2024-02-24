"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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

    useEffect(() => {
        const fetchProduct = async (id: any) => {
            try {
                const response = await axios.get(`http://localhost:3000/apii/product/${id}`);
                setProd(response.data[0]);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct(1);
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

        getImages(1);
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

    return (
        <div>
            <h1 className="text-3xl font-bold ml-80">Product Details</h1>
            <div className="flex mt-20">
                <div>
                    {images.map((img, index) => (
                        <div className="p-4 ml-40" key={index}>
                            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={img.img} alt="Product" className="w-[170px] h-[138px]" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border border-gray-100 rounded-md h-[480px]">
                    <img src={prod?.file} alt={prod?.name} className="w-[650px] h-[480px]" />
                </div>
                <div className="mt-40">
                    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                            <div className="text-lg font-semibold">{prod?.name}</div>
                            <div className="text-gray-600 mt-2">${prod?.price}</div>
                            <div className="text-gray-700 mt-2">{prod?.description}</div>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    Rating:
                                    {/* You can render star icons here based on the product's rating */}
                                </div>
                            </div>
                            <h1>Comments:</h1>
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                    position: 'relative',
                                    overflow: 'auto',
                                    maxHeight: 300,
                                    '& ul': { padding: 0 },
                                    border: 1,
                                    marginBottom: 5
                                }}
                                subheader={<li />}
                            >
                                <li key={`section-${1}`}>
                                    <ul>
                                        {comments.map((comment, index) => (
                                            <ListItem sx={{ borderBottom: 2 }} key={index}>
                                                <ListItemText>{comment.content}</ListItemText>
                                            </ListItem>
                                        ))}
                                    </ul>
                                </li>
                            </List>
                            <div className="border border-black rounded-md p-4">
                                <div className="text-lg">
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
                                    variant='outlined'
                                    sx={{ color: 'black' }}
                                    onClick={() => addCart({ userUserId: 1, productProdId: props.params.id, CartQuantity: 1 })}
                                >
                                    ADD TO THE CART
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
