import React, { useState } from "react";
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Badge from '@material-ui/core/Badge';
import Box from '@mui/material/Box';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdUnitsIcon from '@mui/icons-material/AdUnits'

const Header = ( {handleOpen} ) => {

  return (
    <Box>
        <AppBar position="relative" sx={{ backgroundColor: 'teal', opacity: "0.5", position: "sticky", top: "0" }} style={{ display: "flex", flexDirection: "row", justifyContect: "space-between", padding: "10px"  }}>
           
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <div><CameraIcon sx={{ mr: 2 }} /></div>
                    <div><Typography variant="h6" color="inherit" noWrap>
                        PZ portfolio
                    </Typography></div>
                </div>

                <div style={{ marginLeft: "auto" }}>
                    <IconButton color="inherit" onClick={handleOpen}>
                        <AdUnitsIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <MailIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                </div>
        </AppBar>
    </Box>
  )
}

export default Header