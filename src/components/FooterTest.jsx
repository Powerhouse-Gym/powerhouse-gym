import React, { useContext } from 'react';
import "../components/footerTest.css"
import powerhouselogo from "../assets/new-logo.png"
import crossfit3 from "../assets/crossfit/crossfit3.jpg"
import { DarkModeContext } from '../context/DarkModeProvider';
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import darkmodeFacebook from '../assets/darkmode-facebook.svg'
import darkmodeInstagram from '../assets/darkmode-instagram.svg'


function FooterTest() {
    const { isDarkMode } = useContext(DarkModeContext);


    return (
        <footer>
            <div className='left-div'>
                <ul>
                    <li>Contact Us</li>
                    <li>About Powerhouse</li>
                    <li>Shop Merch</li>
                    <li>Sign Up</li>
                    <li>Drop In</li>

                </ul>
            </div>
            <div className='img-container'>
                <img src={powerhouselogo} alt="powerhouse" />
            </div>
            <div className='footer-logo-test'>
                <h2>Powerhouse Training Complex and Crossfit</h2>
                <p>1804 S. Pine Street, Cabot AR 72023</p>
                <p>501.247.1517</p>
                <p>Powerhouse Training Complex and Crossfit, LLC</p>
                <div className='banner-logos-footer'>
                    <a id="facebook-footer" href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                        <img src={darkmodeFacebook} alt="Facebook" />
                    </a>
                    <a id="instagram-footer" href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                        <img src={darkmodeInstagram} alt='Instagram' />
                    </a>
                </div>
            </div>

        </footer>
    );
}

export default FooterTest;