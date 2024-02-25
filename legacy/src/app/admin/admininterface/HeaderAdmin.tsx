"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PollIcon from '@mui/icons-material/Poll';
import InventoryIcon from '@mui/icons-material/Inventory';
import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

const HeaderAdmin: React.FC = () => {
  
    const [value, setValue] = React.useState<number>(0);

    return (
      <Box sx={{ width: 500 }} className="mr-auto ml-auto h-8">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link href="/Admin/admininterface/oveview" passHref>
            <BottomNavigationAction label="Overview" icon={<PollIcon />} />
          </Link>
          <Link href="/Admin/admininterface/client" passHref>
            <BottomNavigationAction label="Overview" icon={<DashboardIcon />} />
          </Link>
          <Link href="/Admin/admininterface/" passHref>
            <BottomNavigationAction label="Overview" icon={<ForwardToInboxIcon />} />
          </Link>
          <Link href="/Admin/admininterface/" passHref>
            <BottomNavigationAction label="Overview" icon={<ShoppingBagIcon />} />
          </Link>
          <Link href="/Admin/admininterface/produc" passHref>
            <BottomNavigationAction label="Overview" icon={<SellIcon />} />
          </Link>
          <Link href="/Admin/admininterface/productinf" passHref>
            <BottomNavigationAction label="Overview" icon={<InventoryIcon />} />
          </Link>
        </BottomNavigation>
      </Box>
    );
  };




export default HeaderAdmin;
