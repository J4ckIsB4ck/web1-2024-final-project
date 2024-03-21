import { AppBar, Box,Toolbar } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <AppBar className = "StyledAppBar">
            <Toolbar className = "StyledToolbar">
                <Box className = "Text">
                    <img src='QuickBlogo.png' alt='QuickB' width="30" height="30"/>  
                    <p>Quick<strong>B</strong></p>
                </Box>
                <Box className = "RightText">
                    <Link to = "/about" className = "Link" >About us</Link>
                    <Link to = "/blog" className = "Link" >Blog</Link>
                    <Link to = "/" className = "Link" >Home</Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar