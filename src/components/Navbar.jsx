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
    color: "black",
  };

  return (
    <div className="navbar">
      <Box className="nav-container">
        {/* Hamburger / Close toggle — animated swap */}
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            top: "10px",
            left: "20px",
            zIndex: 10002,
            width: "3rem",
            height: "3rem",
            padding: 0,
            "@media (max-width: 320px)": {
              top: "0px",
              left: "14px",
            },
          }}
        >
          <Box sx={{ position: "relative", width: "3rem", height: "3rem" }}>
            <MenuIcon
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                fontSize: "3rem",
                color: "#1a1a1a",
                transform: mobileOpen ? "rotate(90deg) scale(0.6)" : "rotate(0deg) scale(1)",
                opacity: mobileOpen ? 0 : 1,
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
            />
            <CloseIcon
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                fontSize: "3rem",
                color: "#1a1a1a",
                transform: mobileOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.6)",
                opacity: mobileOpen ? 1 : 0,
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
            />
          </Box>
        </IconButton>

        {/* Backdrop — darkens the area outside the drawer */}
        <Box
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9998,
            opacity: mobileOpen ? 1 : 0,
            pointerEvents: mobileOpen ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Mobile drawer — slides in from left, 75vw wide */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            position: "fixed",
            top: 0,
            left: 0,
            width: "75vw",
            height: "100vh",
            backgroundColor: "white",
            flexDirection: "column",
            zIndex: 10000,
            overflowY: "auto",
            transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease",
            boxShadow: mobileOpen ? "2px 0 16px rgba(0, 0, 0, 0.2)" : "none",
            paddingTop: "60px",
          }}
        >
            <List sx={mobileLinksStyle}>
              <ListItem button onClick={() => handleNavigate("/")}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => handleNavigate("/training")} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <ListItemText primary="Sports Training" />
                <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
                  <a href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" style={{ width: "20px", height: "20px" }} />
                  </a>
                  <a href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" style={{ width: "20px", height: "20px" }} />
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
                    <img src={facebook} alt="Facebook" style={{ width: "20px", height: "20px" }} />
                  </a>
                  <a href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" style={{ width: "20px", height: "20px" }} />
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
