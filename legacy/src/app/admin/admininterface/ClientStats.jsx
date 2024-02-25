'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import { Button , Modal ,Typography , Rating } from '@mui/material';


const ClientStats = () => {

    const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
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


      const data = [
        { id: 0, value: 10, label: 'series D' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ];
      



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
  </Typography> <br />
  <Rating name="read-only" 
  value={user.ratings}  
  readOnly />
<Typography> <br />  





</Typography>
</Box>
</Modal>

  </div>
  )
}

export default ClientStats
