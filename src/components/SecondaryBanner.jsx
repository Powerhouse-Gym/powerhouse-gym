import React, {useContext} from 'react';
import logo from "../assets/logo-white-2.jpg"
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import darkmodeFacebook from '../assets/darkmode-facebook.svg'
import darkmodeInstagram from '../assets/darkmode-instagram.svg'
import crossfit from "../assets/crossfit-white.jpg"
import { DarkModeContext } from '../context/DarkModeProvider';


function SecondaryBanner() {

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className='secondary-banner'>
            <img src={logo} className="logo" alt="logo" />
            <div className="contact-banner">
                {/* <h2>501-247-1517</h2> */}
                <a href="tel:+15012471517" className="phone-link">501-247-1517</a>
            <h4>1804 S. Pine Street, Cabot, AR 72023</h4>
                <div className='banner-logos'>
                    <a id="facebook" href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                        <img src={isDarkMode ? darkmodeFacebook : facebook} alt="Facebook" />
                    </a>
                    <a id="instagram" href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                        <img src={isDarkMode ? darkmodeInstagram : instagram} alt='Instagram' />
                    </a>
                </div>
            </div>
            <img className="crossfit" src={crossfit} alt="crossfit lady" />
        </div>


    );
}

export default SecondaryBanner;