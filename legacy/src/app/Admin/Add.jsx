import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import {useContext,useState} from 'react'
import Cont from '../Context/Cont'
import DeleteIcon from '@mui/icons-material/Delete';



const Add = () => {
    const categories=useContext(Cont)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const[refresh,setRefresh]=useState(false)
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [content,setContent]=useState('')
   
const addCat=(category)=>{
    axios.post('http://localhost:3000/category/add',category)
    .then((res)=>{console.log("added")})
    .catch((error)=>{console.log(error)})
}

const deleteCategory=(catId)=>{
    axios.delete(`http://localhost:3000/category/delete/${catId}`)
    .then((res)=>{console.log("deleted")})
    .catch((error)=>{console.log(error)})
}

const updateCategory=(catId,content)=>{
    axios.put(`http://localhost:3000/category/update/${catId}`,content)
    .then((res)=>{console.log("updated")})
    .catch((error)=>{console.log(error)})
}

return (
<div>
<Button onClick={handleOpen}>See All categories</Button>
<Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>
<Typography id="modal-modal-title" variant="h6" component="h2">
  Categories
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
    
    <input style={{"border":"1px solid black"}} className='mb-4 mr-4' type="text" onChange={(e)=>{setContent(e.target.value)}}/>
    <button onClick={()=>{addCat({content:content}),setRefresh(true)}}> Add Category </button>

{categories.categories.map((cat,i)=>{
      return (
        <div key={i} className="grid grid-cols-3     gap-4 mb-4">
<p className='mr-4'> {cat.content}</p>
<DeleteIcon onClick={()=>{deleteCategory(cat.catId)}}/>



<button onClick={()=>{updateCategory(cat.catId,{content:content})}}> updateProd</button>        
        </div>
        

      )
    })}
  
</Typography> <br />
</Box>
</Modal>
</div>
)
}
export default Add
