import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Box,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import darkmodeFacebook from '../assets/darkmode-facebook.svg'
import darkmodeInstagram from '../assets/darkmode-instagram.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeToggle from "./DarkModeToggle";
import { DarkModeContext } from "../context/DarkModeProvider";

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { isDarkMode } = useContext(DarkModeContext);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top whenever the path changes
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMobileOpen(false);
  };

  const mobileLinksStyle = {
    textTransform: "uppercase", // Capitalize menu items
    fontSize: "1.3rem", // Match the font size used in nav-links
    fontFamily: "Rock Salt, cursive", // Matching font family
    color: "black", // Set text color
  };
  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: isDarkMode ? "#1a1a1a" : "white",
        height: "100%",
        color: isDarkMode ? "white" : "black", // This changes the font color
        "& *": {
          color: isDarkMode ? "white" : "black", // Ensures all child elements inherit the color
        },
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      {/* Close Button */}
      <IconButton
        onClick={() => handleDrawerToggle(false)}
        sx={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CloseIcon />
      </IconButton>
      <List sx={mobileLinksStyle}>
        <ListItem button onClick={() => handleNavigate("/")}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => handleNavigate("/training")}>
          <ListItemText primary="Sports Training" />
        </ListItem>
        <ListItem button onClick={() => handleNavigate("/personal-training")}>
          <ListItemText primary="Personal Training" />
        </ListItem>
        <ListItem button onClick={() => handleNavigate("/crossfit")}>
          <ListItemText primary="Crossfit" />
        </ListItem>
        <ListItem button onClick={() => handleNavigate("/team")}>
          <ListItemText primary="Meet the Team" />
        </ListItem>
        <ListItem button onClick={() => handleNavigate("/aboutus")}>
          <ListItemText primary="About Us" />
        </ListItem>

        <div className='banner-logos'>
          <a id="facebook" href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
            <img src={isDarkMode ? darkmodeFacebook : facebook} alt="Facebook" />
          </a>
          <a id="instagram" href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
            <img src={isDarkMode ? darkmodeInstagram : instagram} alt='Instagram' />
          </a>
        </div>
        <button className="signup-btn nav-signup" id="signup-btn-mobile">SIGN UP</button>
      </List>
    </Box>
  );

  return (
    <div className="navbar">
      <Box className="nav-container">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        >
          <MenuIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
        <Tabs
          sx={{ display: { xs: "none", md: "flex" },  justifyContent: "space-between" }}
          className="nav-links"
          value={window.location.pathname}
        >
          <div className='banner-logos'>
            <a id="facebook" href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
              <img src={isDarkMode ? darkmodeFacebook : facebook} alt="Facebook" />
            </a>
            <a id="instagram" href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
              <img src={isDarkMode ? darkmodeInstagram : instagram} alt='Instagram' />
            </a>
          </div>
          <Tab
            sx={{ fontSize:{
              xs: '12px', // For extra small screens
              sm: '14px', // For small screens
              md: '16px', // For medium screens
              lg: '18px', // For large screens
              xl: '20px', // For extra large screens
            },  }}
            className="nav-item"
            label="Home"
            value="/"
            onClick={() => handleNavigate("/")}
          />
          <Tab
            sx={{ fontSize:{
              xs: '12px', // For extra small screens
              sm: '14px', // For small screens
              md: '16px', // For medium screens
              lg: '18px', // For large screens
              xl: '20px', // For extra large screens
            },  }}
            className="nav-item"
            label="Sports Training"
            value="/training"
            onClick={() => handleNavigate("/training")}
          />
          <Tab
            sx={{ fontSize:{
              xs: '12px', // For extra small screens
              sm: '14px', // For small screens
              md: '16px', // For medium screens
              lg: '18px', // For large screens
              xl: '20px', // For extra large screens
            },  }}
            className="nav-item"
            label="Personal Training"
            value="/personal-training"
            onClick={() => handleNavigate("/personal-training")}
          />
          <Tab
            sx={{ fontSize:{
              xs: '12px', // For extra small screens
              sm: '14px', // For small screens
              md: '16px', // For medium screens
              lg: '18px', // For large screens
              xl: '20px', // For extra large screens
            },  }}
            className="nav-item"
            label="Crossfit"
            value="/crossfit"
            onClick={() => handleNavigate("/crossfit")}
          />
          <Tab
            sx={{ fontSize:{
              xs: '12px', // For extra small screens
              sm: '14px', // For small screens
              md: '16px', // For medium screens
              lg: '18px', // For large screens
              xl: '20px', // For extra large screens
            },  }}
            className="nav-item"
            label="Meet the Team"
            value="/team"
            onClick={() => handleNavigate("/team")}
          />
          <Tab
            sx={{ fontSize:{
              xs: '12px', // For extra small screens
              sm: '14px', // For small screens
              md: '16px', // For medium screens
              lg: '18px', // For large screens
              xl: '20px', // For extra large screens
            },  }}
            className="nav-item"
            label="About Us"
            value="/aboutus"
            onClick={() => handleNavigate("/aboutus")}
          />

          <a
            href="https://app.upperhand.io/accounts/new_user?customer_id=1047"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className="signup-btn" id="signup-btn-mobile">SIGN UP</button>
          </a>


        </Tabs>
            <DarkModeToggle />
      </Box>
      {/* <div className = "skull-div" style = {{height: "2.5vh",width: "100vw", backgroundImage: `url(${chainlink})` ,zIndex: "15", position: "absolute", top: "10vh"}}></div> */}

      {/* Mobile Drawer for nav menu */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }} // Only show on mobile
      >
        {drawer}
      </Drawer>
    </div>
  );
}

export default Navbar;
