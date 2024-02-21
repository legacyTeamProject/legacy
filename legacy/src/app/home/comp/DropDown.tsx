'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
// import Cookies from 'js-cookie';
// import {useNavigate} from 'react-router-dom'



export default function AccountMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment >
      <Box  sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip  title="Account settings">
          <IconButton
            // onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      
      <Menu 
      className="text-white  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem >
           Profile
        </MenuItem>
        <MenuItem >
            <a href="/editprofil"> My account</a>
          
        </MenuItem>
        <MenuItem >
            <a href="/seller"> Manage My Products</a>
          
        </MenuItem>
        <MenuItem >
            <a href="/admin"> Dashboard</a>
          
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon >
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}