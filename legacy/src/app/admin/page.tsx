'use client'

import * as React from 'react';


import Add from './admininterface/Add';





const Admin = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


 
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  return (
    <div>

<div 
// className="p-4 sm:ml-96"
>
  
  
                  <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10 w-4/5 ml-auto mr-auto">
                   <Add/> 
    {/*  <div className="grid grid-cols-2 gap-4 mb-4">
        
         <div className="rounded w-auto h-auto bg-gray-50 dark:bg-gray-800">
         <Charts/>
         </div>
         <div className="rounded w-auto h-auto bg-gray-50 dark:bg-gray-800">
         <UsersDetails/>
         </div>
         {/* <div className="rounded w-auto h-auto bg-gray-50 dark:bg-gray-800">
         <SalesBydata/>  
         </div> 
      </div> */}
  
   </div>
               
          
   
</div>
    </div>
  )
}

export default Admin
