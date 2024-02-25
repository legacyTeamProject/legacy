'use client'


import React ,{useState,useEffect}from "react"
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
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


export default  function Electronics(props:any) {
   
   
    const [prod, setProd] = useState<ProductDetailsProps[]>([]);

    useEffect(() => {
      async function fetch(id:any) {
          
           await axios
        .get(`http://localhost:3000/category/catprodz/${id}`)
        .then((response) => {
          setProd(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
  
          }
      fetch(props.params.categorys)
      
    }, []);

    const addToCart = async (productId: number) => {
      try {
        await axios.post('http://localhost:3000/cartt/addOne', { userUserId: 1, productProdId: productId, CartQuantity: 1 });
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    };
  
   
  const getphone= async function (id:any) {
        const a=props.params.categorys
          await axios
          .get(`http://localhost:3000/category/catprodz/${a}/${id}`)
          .then((response) => {
            setProd(response.data)}) 
            .catch((error) => {
              console.error(error)});
      
      
  }
  const addToWishList = async (productId: any) => {
    try {
        const response = await axios.post('http://localhost:3000/wish/add', { UserUserId: 1, productProdId: productId });
        console.log('Added to wishlist:', response.data);
    } catch (error) {
        console.error('Error adding to wishlist:', error);
    }
};

const ReviewIcon: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} color={index < rating ? 'warning' : 'disabled'} />
  ));
  return <div>{stars}</div>;
};


return(



    
<div style={{ width: '100%', height: '100vh', borderTop: '1px solid black' }}>
  <div style={{ width: '100%', display: 'flex' }}>
    <div>  </div>
    <h1 style={{ marginTop: 60, marginLeft: 40, borderBottom: 1 }}>({prod.length})</h1>
    <div style={{marginLeft:150,display:'flex'}}>
    <MenuItem  onClick={()=>getphone(0)}  value="PHONE">
  Phone
</MenuItem>    
<MenuItem  onClick={()=>getphone('1')} value="SMART WATCH">
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

  <div style={{ width: '100%', margin: 'auto', marginTop: 10,display:'flex',flexWrap:"wrap" }}>
    {prod.map((product,index) => (
      
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
                <IconButton aria-label="add to favorites" onClick={() => addToWishList(product.prodId)}>
                    <FavoriteIcon />
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
  </div>
</div>



)


}