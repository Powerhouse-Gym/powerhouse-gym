import "../components/footerTest.css"
import powerhouselogo from "../assets/new-logo.png"
import darkmodeFacebook from '../assets/darkmode-facebook.svg'
import darkmodeInstagram from '../assets/darkmode-instagram.svg'
import { useNavigate } from 'react-router-dom';

function FooterTest() {
    const navigate = useNavigate()

    return (
        <footer className="site-footer">
            <div className="footer-inner">

                <div className="footer-col footer-nav">
                    <h4>Navigation</h4>
                    <ul>
                        <li onClick={() => navigate("/training")}>Sports Training</li>
                        <li onClick={() => navigate("/personal-training")}>Personal Training</li>
                        <li onClick={() => navigate("/crossfit")}>Crossfit</li>
                        <li onClick={() => navigate("/team")}>Meet the Team</li>
                        <li onClick={() => navigate("/aboutus")}>About Us</li>
                    </ul>
                </div>

                <div className="footer-col footer-brand">
                    <img src={powerhouselogo} alt="Powerhouse Training Complex" />
                </div>

                <div className="footer-col footer-contact">
                    <h4>Contact</h4>
                    <p>1804 S. Pine Street</p>
                    <p>Cabot, AR 72023</p>
                    <p>501.247.1517</p>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                            <img src={darkmodeFacebook} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                            <img src={darkmodeInstagram} alt="Instagram" />
                        </a>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Powerhouse Training Complex. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default FooterTest;
