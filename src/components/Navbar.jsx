import React, { useState } from 'react';
import { Box, Tabs, Tab, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom"

import CloseIcon from '@mui/icons-material/Close';

function Navbar(props) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
        setMobileOpen(false)
    }

    const mobileLinksStyle = {
        
            textTransform: 'uppercase', // Capitalize menu items
            fontSize: '1.3rem', // Match the font size used in nav-links
            fontFamily: 'Rock Salt, cursive', // Matching font family
            color: 'black', // Set text color
     
    }
    const drawer = (
        <Box
            sx={{ width: 250, backgroundColor: 'white', height: '100%' }}
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
        >
             {/* Close Button */}
        <IconButton
          onClick={() => handleDrawerToggle(false)}
          sx={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-end' }}
        >
          <CloseIcon />
        </IconButton>
            <List sx = {mobileLinksStyle}>
                <ListItem button onClick={() => handleNavigate("/")}>
                    <ListItemText primary="Home"  />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/crossfit")}>
                    <ListItemText primary="Crossfit" />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/training")}>
                    <ListItemText primary="Sports Training" />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/personal-training")}>
                    <ListItemText primary="Personal Training" />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/team")}>
                    <ListItemText primary="Meet the Team" />
                </ListItem>
            </List>
        </Box>
    );


    return (
        <div className='navbar'>
            <Box className="nav-container">
            <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: 'block', md: 'none' } , position:'absolute', top: "10px", left: "10px"}}
                >
                    <MenuIcon sx={{ fontSize: '3rem' }} />
                </IconButton>
                <Tabs sx = {{display: {xs: 'none', md: 'flex'}}}className='nav-links' value={window.location.pathname} >
                    <Tab sx={{ fontSize: '1.3rem' }} className="nav-item" label="Home" value="/" onClick={() => handleNavigate("/")} />
                    <Tab sx={{ fontSize: '1.3rem' }} className="nav-item" label="Crossfit" value="/crossfit" onClick={() => handleNavigate("/crossfit")} />
                    <Tab sx={{ fontSize: '1.3rem' }} className="nav-item" label="Sports Training" value="/training" onClick={() => handleNavigate("/training")} />
                    <Tab sx={{ fontSize: '1.3rem' }} className="nav-item" label="Personal Training" value="/personal-training" onClick={() => handleNavigate("/personal-training")} />
                    <Tab sx={{ fontSize: '1.3rem' }} className="nav-item" label="Meet the Team" value="/team" onClick={() => handleNavigate("/team")} />
                </Tabs>
            </Box>
            {/* <div className = "skull-div" style = {{height: "2.5vh",width: "100vw", backgroundImage: `url(${chainlink})` ,zIndex: "15", position: "absolute", top: "10vh"}}></div> */}
         
            {/* Mobile Drawer for nav menu */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', md: 'none' } }} // Only show on mobile
            >
                {drawer}
            </Drawer>
        </div>
    );
}

export default Navbar;