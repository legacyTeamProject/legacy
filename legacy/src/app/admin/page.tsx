"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import Cont from '../Context/Cont'
import Side from './Side';
import Chartt from './Charts/Chartt';
import UsersDetails from './Charts/UsersDetails';
import SalesBydata from './Charts/SalesBydata'
import Add from './Add';
import Products from './Products';
import Cloud from '../Cloud'
import HeaderA from '../../app/home/comp/HeaderA'





const Admin = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const users = useContext(Cont)
  console.log(users.users,"useeeeeeeeeers")
  const categories=useContext(Cont)
console.log(categories.categories,"from admin")
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>

<div 
// className="p-4 sm:ml-96"
>
  <HeaderA/>
  
                  <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10 w-4/5 ml-auto mr-auto">
                  <Add/> 
      <div className="grid grid-cols-2 gap-4 mb-4">
        
         <div className="rounded w-auto h-auto bg-gray-50 dark:bg-gray-800">
         <Chartt/>
         </div>
         <div className="rounded w-auto h-auto bg-gray-50 dark:bg-gray-800">
         <UsersDetails/>
         </div>
         <div className="rounded w-auto h-auto bg-gray-50 dark:bg-gray-800">
         <SalesBydata/>  
         </div>
      </div>
  
   </div>
               
          
   
</div>
    </div>
  )
}

export default Admin
