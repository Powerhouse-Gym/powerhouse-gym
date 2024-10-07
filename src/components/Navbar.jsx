import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from "../assets/logo-white.webp"
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'

function Navbar(props) {

    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }



    return (
        <div className='navbar'>
            <div className='banner'>
            </div>
            <div className='secondary-banner'>
                <img src={logo} id="logo" /> 
                 <div className="contact-banner">
                    <p>501-247-1517</p>
                    <div className='banner-logos'>
                        <img src={facebook} id="facebook" />
                        <img src={instagram} id="instagram" />
                    </div>
                </div>
            </div>
            <Box className="nav-container">
                <Tabs value={window.location.pathname} >
                    <Tab className="nav-item" label="Home" value="/" onClick={() => handleNavigate("/")} />
                    <Tab label="Crossfit" value="/crossfit" onClick={() => handleNavigate("/crossfit")} />
                    <Tab label="Sports Training" value="/training" onClick={() => handleNavigate("/training")} />
                    <Tab label="Youth Training" value="/youth" onClick={() => handleNavigate("/youth")} />
                    <Tab label="Meet the Team" value="/team" onClick={() => handleNavigate("/team")} />
                </Tabs>
            </Box>
        </div>
    );
}

export default Navbar;