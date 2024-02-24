import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PollIcon from '@mui/icons-material/Poll';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useNavigate } from "react-router-dom";


export default function HeaderA() {

    const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }} className="mr-auto ml-auto h-8" >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="OverView" icon={<PollIcon />} onClick={() => navigate("/admin")}/>
        <BottomNavigationAction label="Dashboard" icon={<DashboardIcon onClick={()=>{navigate("/admin/userlist")}}/>} />
        <BottomNavigationAction label="Inbox" icon={<ForwardToInboxIcon onClick={() => navigate("/admin/inbox")}/>} />
        <BottomNavigationAction label="Sellers" icon={<SellIcon />} onClick={() => navigate("/admin/sellerInfo")}/>
        <BottomNavigationAction label="Clients" icon={<ShoppingBagIcon />} onClick={() => navigate("/admin/clientInfo")}/>
        <BottomNavigationAction label="Products" icon={<InventoryIcon />} onClick={() => navigate("/admin/productInfo")}/>
      </BottomNavigation>
    </Box>
  );
}