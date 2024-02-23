'use client'


import React ,{useState,useEffect}from "react"
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from "next/link";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
interface ProductDetailsProps {
    prodId: Number;
    name: String;
    description: String;
    price: Number;
    ratings: Number;
    file: String;
    sold: Number;
    quantity: Number;
  }


export default async function Electronics(props:any) {
   
   
    const [prod, setProd] = useState<ProductDetailsProps[]>([]);

    useEffect(() => {
      async function fetch(id:any) {
          try{
           await axios
        .get(`http://localhost:3000/apii/catprodz/${id}`)
        .then((response) => {
          setProd(response.data);
        })
        .catch((error) => {
          console.error(error);
        })}catch(err){console.log(err)}
  
          }
      fetch(props.params.categorys)
      
    }, []);

   
  const getphone= async function (id:number) {
      try{
          await axios
          .get(`http://localhost:3000/apii/catprodz/${props.params.categorys}/${id}`)
          .then((response) => {
            setProd(response.data)}) 
            .catch((error) => {
              console.error(error)});
      }catch(err){console.log(err)}
      
  }




return(



    
<div style={{ width: '100%', height: '100vh', borderTop: '1px solid black', boxShadow: 4 }}>
  <div style={{ width: '100%', display: 'flex' }}>
    <div>  </div>
    <h1 style={{ marginTop: 60, marginLeft: 40, borderBottom: 1 }}>eeee({prod.length})</h1>
    <div style={{marginLeft:150,display:'flex'}}>
    <MenuItem  onClick={()=>getphone(0)}  value="PHONE">
  Phone
</MenuItem>    
<MenuItem  onClick={()=>getphone(1)} value="sMART WATCH">
  SmartWatch
</MenuItem>
<MenuItem  onClick={()=>getphone(2)} value="COMPUTER">
  Computer
</MenuItem>
<MenuItem  onClick={()=>getphone(3)} value="ACCESORIES">
  Accesories
</MenuItem>
    </div>
  </div>

  <div style={{ width: '100%', margin: 'auto', marginTop: 10 }}>
    {prod.map((e) => (
      <Card
        key={e.prodId} 
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



)


}