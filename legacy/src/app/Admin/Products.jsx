import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import axios from 'axios';

import {useState,useContext,useEffect} from 'react'
import Cont from '../Context/Cont'
import Chartt from './Charts/Chartt';
import DeleteIcon from '@mui/icons-material/Delete';
const Products = ({user,single,prod}) => {
const [sellerProducts, setSellerProducts] =useState();

const getSelProd=(userUserId)=>{
    axios.get(`http://localhost:3000/apii/findproduct/${userUserId}`)
    .then((res)=>{console.log("sellerprods")})
    .catch((error)=>{console.log("error")})
}
   
const prods=useContext(Cont)




  
const deleteProd=(prodId)=>{
    axios.delete(`http://localhost:3000/apii/product/${prodId}`)
    .then((res)=>{console.log("deleted")})
    .catch((error)=>{console.log("error")})
}
  

    const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 850,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
        
  return (
    <div>
     
      <Button onClick={handleOpen}>Click here</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Stats
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     Joined Since 
     {user.createdAt}  
    <p>{user.firstName}</p>
    </Typography> <br />
    <Rating name="read-only" 
    value={user.ratings}  
    readOnly />
  <Typography>


      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3" >
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Images
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Ratings
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete Product
                </th>
            </tr>
        </thead>

        <tbody>
        {prods.prods?.map((ele,index)=>{
                if(ele.userUserId===user.userId)
                return (
<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {ele.prodId}
                </th>
                <td className="px-6 py-4">
                {ele.name}
                </td>
                <td className="px-6 py-4">
             <img src={ele.file} alt=""  className='w-32 h-24'/>
                </td>
                <td className="px-6 py-4">
                    {ele.description}
                </td>
                <td className="px-6 py-4">
                    ${ele.price}  {ele.categoryCatId} {ele.userUserId}
                </td>
                <td className="px-6 py-4">
                    
             <Box style={{"display":"flex","alignItems":"center"}}><Rating value={ele.ratings} readOnly /> <p> ({ele.ratings })</p></Box>
                </td>
                <td className="px-6 py-4">
                   <DeleteIcon onClick={()=>{deleteProd(ele.prodId)}}/>
                </td>
            </tr>
                )
            })}
            
        </tbody>
    </table>
     
    
  </Typography>
  </Box>
</Modal>

    </div>
  )
}

export default Products
