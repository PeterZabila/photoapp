import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Link from '@material-ui/core/Link'
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@mui/material/AppBar';
// import Badge from '@material-ui/core/Badge';
import Box from '@mui/material/Box';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from '@mui/material/Typography';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import DarkMode from './DarkMode/DarkMode';

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: 20,
    },
    avatar: {
        marginRight: 20,
        color: "white",
        backgroundColor: "black",
        borderRadius: 0,
        height: 48,
        width: 48,
        border: "2px solid grey",
        borderLeft: "12px solid transparent",
        borderRight: "12px solid transparent"
    }
}))

const navigationLinks = [
    { name: "About", href: "about" },
    // { name: "Works", href: "gallery" },
    // { name: "Contacts", href: "/resume.pdf" },
  ];


const Header = ( { open, handleOpen } ) => {
    const [isOpen, setIsOpen] = useState(false);
    const styles = useStyles();

    const [mark, setMark] = useState('');

    const handleMark = (e) => {
        setMark(e.target.name);
        handleOpen(mark)
    }

  return (
    <Box>
        <AppBar position="sticky" color="default" style={{ display: "flex", flexDirection: "row", justifyContect: "space-between", padding: "10px"  }}>
        <Container maxWidth="md">
           <Toolbar disableGutters>
           <NavLink to="/"><Avatar className={styles.avatar}>PZ</Avatar></NavLink> 
           {/* <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <div><CameraIcon sx={{ mr: 2 }} /></div>
                    <div><Typography variant="h6" color="inherit" noWrap sx={{ mr: 2 }} >
                        PZ portfolio
                    </Typography></div>
                </div>
           </NavLink> */}
           <Hidden xsDown>
            <div>
                    {navigationLinks.map((item) => (
                        <Link
                            className={styles.link}
                            color="textPrimary"
                            variant="button"
                            underline="none"
                            href={item.href}
                            key={"key" + item.href}
                        >
                            {item.name}
                        </Link>
                    ))}
            </div>
           </Hidden>
           <Hidden smUp>
                <MenuIcon onClick={() => setIsOpen(true)}/>
           </Hidden>
               
                <div style={{ marginLeft: "auto" }}>
                    <a href="tel:+380631353552">
                        <IconButton  color="default" name="cell" >
                            <AdUnitsIcon />
                        </IconButton>
                    </a>
                    <NavLink to="/contacts" style={{ textDecoration: "none", color: "white" }}>
                        <IconButton color="default">
                            <MailIcon />
                        </IconButton>
                    </NavLink>
                    <IconButton color="default" name="account" onClick={handleMark}> 
                        <AccountCircle />
                    </IconButton>
                    <Button>
                       {/* <DarkMode/> */}
                    </Button>
                 
                </div>

                </Toolbar>
            </Container>
            <SwipeableDrawer
                anchor="right"
                open={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    onKeyDown={() => setIsOpen(false)}
                    role="button"
                    tabIndex={0}
                >
                <IconButton>
                    <ChevronRightIcon onClick={() => setIsOpen(false)}/>
                </IconButton>
                </div>
                <Divider />
                <List>
                {navigationLinks.map((item) => (
                    <ListItem key={item.name}>
                    <Link
                        className={styles.link}
                        color="textPrimary"
                        variant="button"
                        underline="none"
                        href={item.href}
                    >
                        {item.name}
                    </Link>
                    </ListItem>
                ))}
                </List>
            </SwipeableDrawer>
        </AppBar>
    </Box>
  )
}

export default Header