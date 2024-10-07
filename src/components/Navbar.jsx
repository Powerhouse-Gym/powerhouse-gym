import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Navbar(props) {

    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }



    return (
        <Box className="nav-container">
            <Tabs value={window.location.pathname} >
                <Tab className = "nav-item" label="Home" value="/" onClick={() => handleNavigate("/")}  />
                <Tab label="Crossfit" value="/crossfit" onClick={() => handleNavigate("/crossfit")} />
                <Tab label="Sports Training" value="/training" onClick={() => handleNavigate("/training")} />
                <Tab label="Youth Training" value="/youth" onClick={() => handleNavigate("/youth")} />
                <Tab label="Meet the Team" value="/team" onClick={() => handleNavigate("/team")} />
            </Tabs>
        </Box>
    );
}

export default Navbar;