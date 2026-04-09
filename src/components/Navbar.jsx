import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Box,
  Tabs,
  Tab,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import darkmodeFacebook from '../assets/darkmode-facebook.svg'
import darkmodeInstagram from '../assets/darkmode-instagram.svg'

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMobileOpen(false);
  };

  const mobileLinksStyle = {
    textTransform: "uppercase",
    fontSize: "1.3rem",
    fontFamily: "Rock Salt, cursive",
    color: "white",
  };

  return (
    <div className="navbar">
      <Box className="nav-container">
        {/* Hamburger — hidden when menu is open */}
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: mobileOpen ? "none" : "block", md: "none" },
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "#ffffff",
            "@media (max-width: 320px)": {
              top: "0px",
            },
          }}
        >
          <MenuIcon sx={{ fontSize: "3rem" }} />
        </IconButton>

        {/* Mobile menu — replaces navbar when open */}
        {mobileOpen && (
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
              flexDirection: "column",
              zIndex: 10000,
              overflowY: "auto",
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ alignSelf: "flex-end", margin: "10px 10px 0 0", color: "#ffffff" }}
            >
              <CloseIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <List sx={mobileLinksStyle}>
              <ListItem button onClick={() => handleNavigate("/")}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => handleNavigate("/training")} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <ListItemText primary="Sports Training" />
                <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
                  <a href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                    <img src={darkmodeFacebook} alt="Facebook" style={{ width: "20px", height: "20px" }} />
                  </a>
                  <a href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                    <img src={darkmodeInstagram} alt="Instagram" style={{ width: "20px", height: "20px" }} />
                  </a>
                </Box>
              </ListItem>
              <ListItem button onClick={() => handleNavigate("/personal-training")}>
                <ListItemText primary="Personal Training" />
              </ListItem>
              <ListItem button onClick={() => handleNavigate("/crossfit")} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <ListItemText primary="Crossfit" />
                <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
                  <a href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                    <img src={darkmodeFacebook} alt="Facebook" style={{ width: "20px", height: "20px" }} />
                  </a>
                  <a href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                    <img src={darkmodeInstagram} alt="Instagram" style={{ width: "20px", height: "20px" }} />
                  </a>
                </Box>
              </ListItem>
              <ListItem button onClick={() => handleNavigate("/team")}>
                <ListItemText primary="Meet the Team" />
              </ListItem>
              <ListItem button onClick={() => handleNavigate("/aboutus")}>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button onClick={() => handleNavigate("/efa")}>
                <ListItemText primary="EFA Vendor" />
              </ListItem>
              <a
                href="https://app.upperhand.io/accounts/new_user?customer_id=1047"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button className="signup-btn nav-signup" id="signup-btn-mobile" style={{ marginTop: "16px" }}>SIGN UP</button>
              </a>
            </List>
          </Box>
        )}

        {/* Desktop nav */}
        <Tabs
          sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between" }}
          className="nav-links"
          value={window.location.pathname}
        >
          <div className='banner-logos'>
            <a id="facebook" href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a id="instagram" href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt='Instagram' />
            </a>
          </div>
          <Tab sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' } }} className="nav-item" label="Home" value="/" onClick={() => handleNavigate("/")} />
          <Tab sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' } }} className="nav-item" label="Sports Training" value="/training" onClick={() => handleNavigate("/training")} />
          <Tab sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' } }} className="nav-item" label="Personal Training" value="/personal-training" onClick={() => handleNavigate("/personal-training")} />
          <Tab sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' } }} className="nav-item" label="Crossfit" value="/crossfit" onClick={() => handleNavigate("/crossfit")} />
          <Tab sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' } }} className="nav-item" label="Meet the Team" value="/team" onClick={() => handleNavigate("/team")} />
          <Tab sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' } }} className="nav-item" label="About Us" value="/aboutus" onClick={() => handleNavigate("/aboutus")} />
          <a
            href="https://app.upperhand.io/accounts/new_user?customer_id=1047"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className="signup-btn" id="signup-btn-mobile">SIGN UP</button>
          </a>
        </Tabs>
      </Box>
    </div>
  );
}

export default Navbar;
