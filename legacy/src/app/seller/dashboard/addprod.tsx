"use client"
import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { Image } from 'cloudinary-react';
import { Cloudinary } from 'cloudinary-core';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 

const cloudinaryCore = new Cloudinary({ cloud_name: 'dydeiibmw' });

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState(0);
    const [newImg, setNewImg] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const router = useRouter();

    const handleAddProduct = () => {
        const newProductData = {
            name: newProduct,
            description: newDescription,
            price: newPrice,
            file: newImg,
            category: category,
            type: type
        };

        axios.post('http://localhost:3000/addproduct', newProductData)
            .then((res) => {
                console.log('Product added successfully');
                router.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'w8ysxkmi');

        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dydeiibmw/image/upload', formData);
            setNewImg(response.data.secure_url);
        } catch (error) {
            console.error('Error uploading image: ', error);
        }
    };

    const navigateToHome = () => {
        router.push('/');
    };



    return (
        <>
       

            <Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '4rem', gap: '2rem' }}>
                <Grid item xs={12} sm={8} md={6}>
                    <Paper elevation={3} style={{ padding: '2rem', borderRadius: '1rem', backgroundColor: 'white', color: 'black' }}>
                        <Typography variant="h6" style={{ marginBottom: '1rem', textAlign: 'center' }}> Add Product </Typography>

                        <Typography variant="body2" style={{ marginBottom: '1rem' }}>
                            Please fill out the form below to add a new product. Make sure to provide accurate details.
                        </Typography>

                        <TextField
                            label="Product Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={newProduct}
                            onChange={(e) => setNewProduct(e.target.value)}
                            InputProps={{ style: { borderRadius: '0.2rem', padding: '0.5rem' } }}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            InputProps={{ style: { borderRadius: '0.2rem', padding: '0.5rem' } }}
                        />
                        <TextField
                            label="Price"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type="number"
                            value={newPrice}
                            onChange={(e) => setNewPrice(parseFloat(e.target.value))}
                            InputProps={{ style: { borderRadius: '0.2rem', padding: '0.5rem' } }}
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Upload Image</InputLabel>
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                                id="upload-button"
                            />
                            <label htmlFor="upload-button">
                                <Button
                                    variant="contained"
                                    component="span"
                                    fullWidth
                                    style={{ borderRadius: '0.5rem', backgroundColor: '#fff', color: '#ff3333', marginBottom: '1rem', padding: '0.5rem 0' }}
                                >
                                    Choose File
                                </Button>
                            </label>
                        </FormControl>
                        {newImg && (
                            <Box mb={2}>
                                <Typography variant="subtitle1">Preview:</Typography>
                                <Image
                                    cloudName={cloudinaryCore.config().cloud_name}
                                    publicId={newImg}
                                    width="150"
                                    height="150"
                                    crop="fill"
                                />
                            </Box>
                        )}
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                style={{ borderRadius: '0.2rem', padding: '0.5rem' }}
                            >
                                <MenuItem value="electronics">Electronics</MenuItem>
                                <MenuItem value="clothes">Clothes</MenuItem>
                                <MenuItem value="furniture">Furniture</MenuItem>
                                <MenuItem value="gadget">Gadget</MenuItem>
                                <MenuItem value="grocery">Grocery</MenuItem>
                                <MenuItem value="gaming">Gaming</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Type</InputLabel>
                            <Select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                style={{ borderRadius: '0.2rem', padding: '0.5rem' }}
                            >
                                <MenuItem value="laptops">Laptops</MenuItem>
                                <MenuItem value="smartwatch">Smartwatch</MenuItem>
                                <MenuItem value="chair">Chair</MenuItem>
                                <MenuItem value="women_clothing">Clothes for Women</MenuItem>
                                <MenuItem value="men_clothing">Clothes for Men</MenuItem>
                                <MenuItem value="kids_clothing">Kids Clothes</MenuItem>
                                <MenuItem value="couch">Couches</MenuItem>
                                <MenuItem value="phones">Phones</MenuItem>
                                <MenuItem value="keyboards">Keyboards</MenuItem>
                                <MenuItem value="mouses">Mouses</MenuItem>
                                <MenuItem value="monitors">Monitors</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            variant="contained"
                            onClick={handleAddProduct}
                            style={{ borderRadius: '0.5rem', backgroundColor: '#ff3333', marginTop: '1rem', padding: '0.5rem 0', width: '50%' }}
                            fullWidth
                        >
                            Add
                        </Button>
                    </Paper>
                </Grid>
                
            </Grid>
        
        </>
    );
};

export default AddProduct;
