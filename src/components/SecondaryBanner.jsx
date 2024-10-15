import React from 'react';
import powerhouse from "../assets/powerhouse-grafiti.png"
import logo from "../assets/logo-white-2.jpg"
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import crossfit from "../assets/crossfit-white.jpg"
import NewsLetter from './NewsLetter';
import skulls from "../assets/skulls.png"
import zIndex from '@mui/material/styles/zIndex';
import chainlink from "../assets/chainlink.png"


function SecondaryBanner() {
    return (


<div className='secondary-banner'>
                <img src={logo} className="logo" alt = "logo" />
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
        
        
    );
}

export default SecondaryBanner;