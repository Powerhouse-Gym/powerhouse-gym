import React, { useContext } from 'react';
import "../components/footerTest.css"
import powerhouselogo from "../assets/new-logo.png"
import crossfit3 from "../assets/crossfit/crossfit3.jpg"
import { DarkModeContext } from '../context/DarkModeProvider';
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import darkmodeFacebook from '../assets/darkmode-facebook.svg'
import darkmodeInstagram from '../assets/darkmode-instagram.svg'
import { useNavigate } from 'react-router-dom';

function FooterTest() {
    const { isDarkMode } = useContext(DarkModeContext);
    const navigate = useNavigate()

    return (
        <footer>
            <div className='left-div'>
                <ul>
                    <li onClick={()=> navigate("/training")}>Sports Training</li>
                    <li onClick={()=> navigate("/personal-training")}>Personal Training</li>
                    <li onClick={()=> navigate("/crossfit")}>Crossfit</li>
                    <li onClick = {()=> navigate("/merch")}>Shop Merch</li>
                    <li onClick={()=> navigate("/aboutus")}>About Us</li>

                </ul>
            </div>
            <div className='img-container'>
                <img src={powerhouselogo} alt="powerhouse" />
            </div>
            <div className='footer-logo-test'>
                <h2>Powerhouse Training Complex and Crossfit</h2>
                <p>1804 S. Pine Street, Cabot AR 72023</p>
                <p>501.247.1517</p>
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