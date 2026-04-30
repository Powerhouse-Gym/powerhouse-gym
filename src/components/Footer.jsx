import "./Footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import { useNavigate } from "react-router-dom";
import PhoneLink from "./PhoneLink";

function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <div className="footer-inner">

                <div className="footer-nav">
                    {/* <h4>Navigate</h4> */}
                    <ul>
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/training")}>Sports Training</li>
                        <li onClick={() => navigate("/personal-training")}>Personal Training</li>
                        <li onClick={() => navigate("/crossfit")}>Crossfit</li>
                        <li onClick={() => navigate("/team")}>Meet the Team</li>
                        <li onClick={() => navigate("/aboutus")}>About Us</li>
                        <li onClick={() => navigate("/efa")}>EFA Vendor</li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>1804 S. Pine Street</p>
                    <p>Cabot, AR 72023</p>
                    <PhoneLink className="footer-phone">501.247.1517</PhoneLink>

                    <div className="footer-social-group">
                        <span className="footer-social-label">Training Complex</span>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer" aria-label="Training Complex Facebook">
                                <img src={facebook} alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer" aria-label="Training Complex Instagram">
                                <img src={instagram} alt="Instagram" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-social-group">
                        <span className="footer-social-label">CrossFit</span>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/powerhousecombine" target="_blank" rel="noopener noreferrer" aria-label="CrossFit Facebook">
                                <img src={facebook} alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/powerhousecombine" target="_blank" rel="noopener noreferrer" aria-label="CrossFit Instagram">
                                <img src={instagram} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Powerhouse Training Complex. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
