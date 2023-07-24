import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Link from '@material-ui/core/Link'
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import Toolbar from "@material-ui/core/Toolbar";
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
import * as actionType from '../constants/actionTypes';
import decode from 'jwt-decode';
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
  ];


const Header = ( { open, handleOpen } ) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const styles = useStyles();

    const [mark, setMark] = useState('');

    const handleMark = (e) => {
        setMark(e.target.name);
        handleOpen(mark)
    }

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        navigate('/auth');
    
        setUser(null);
      };
    
      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

  return (
    <Box>
        <AppBar position="sticky" color="default" style={{ display: "flex", flexDirection: "row", justifyContect: "space-between", padding: "10px"  }}>
        <Container maxWidth="md">
           <Toolbar disableGutters>
           <NavLink to="/"><Avatar className={styles.avatar}>PZ</Avatar></NavLink> 
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
                    {/* <Button> */}
                       {/* <DarkMode/> */}
                    {/* </Button>     */}
                    {user?.result ? (<Button variant="contained" color="secondary" onClick={logout}>
                       Log out
                    </Button>) : (<NavLink to="/auth"><Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button></NavLink>)   }
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