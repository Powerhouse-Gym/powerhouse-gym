import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from "../assets/logo-white-2.jpg"
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import crossfit from "../assets/crossfit-white.jpg"
import NewsLetter from './NewsLetter';
import powerhouse from "../assets/powerhouse-grafiti.png"
import skulls from "../assets/skulls.png"
import zIndex from '@mui/material/styles/zIndex';

function Navbar(props) {

    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }



    return (
        <div className='navbar'>
            <Box className="nav-container">
                <Tabs className='nav-links' value={window.location.pathname} >
                    <Tab sx={{ fontSize: '1.3rem' }} className="nav-item" label="Home" value="/" onClick={() => handleNavigate("/")} />
                    <Tab sx={{ fontSize: '1.3rem' }} className="nav-item" label="Crossfit" value="/crossfit" onClick={() => handleNavigate("/crossfit")} />
                    <Tab sx={{ fontSize: '1.3rem' }} className="nav-item" label="Sports Training" value="/training" onClick={() => handleNavigate("/training")} />
                    <Tab sx={{ fontSize: '1.3rem' }} className="nav-item" label="Summer Youth Training" value="/youth" onClick={() => handleNavigate("/youth")} />
                    <Tab sx={{ fontSize: '1.3rem' }} className="nav-item" label="Meet the Team" value="/team" onClick={() => handleNavigate("/team")} />
                </Tabs>
            </Box>
            {/* <div className = "skull-div" style = {{height: "2.5vh",width: "100vw", backgroundImage: `url(${skulls})` ,zIndex: "15", position: "absolute", top: "10vh"}}></div> */}
            <div className='banner'>
                <img src={powerhouse} />
            </div>
            {/* <div className = "skull-div" style = {{height: "2.5vh",width: "100vw", backgroundImage: `url(${skulls})`}}>
      </div> */}
            <div className='secondary-banner'>
                <img src={logo} className="logo" />
                <div className="contact-banner">
                    <h2>501-247-1517</h2>
                    <div className='banner-logos'>
                        <a id="facebook" href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a id="instagram" href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt='Instagram' />
                        </a>
                    </div>
                </div>
                <img className="crossfit" src={crossfit} />
            </div>
            <NewsLetter />
        </div>
    );
}

export default Navbar;