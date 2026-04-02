import { useNavigate } from 'react-router-dom';
import '../summer-banner.css';
import summerImg from '../assets/26summerhours.jpeg';

function SummerBanner() {
    const navigate = useNavigate();

    const handleClick = () => {
        window.open('https://app.upperhand.io/customers/1047/create_user', '_blank');
    };

    return (
        <div className="summer-banner">
            <div className="summer-banner-img">
                <img src={summerImg} alt="Summer Membership Hours" />
            </div>
            <div className="summer-banner-content">
                <h2 className="summer-banner-title">Summer Membership Hours</h2>
                <p className="summer-banner-subtitle">Fun & Creative Activities for Boys & Girls Ages K & Up</p>
                <div className="summer-banner-details">
                    <div className="summer-banner-info">
                        <span>Jun 1 – Aug 11</span>
                        <span>Monday – Friday</span>
                        <span>7 AM – 6 PM</span>
                    </div>
                    <div className="summer-banner-pricing">
                        <span>1 Day — $40</span>
                        <span>3 Day — $90</span>
                        <span>5 Day — $125</span>
                    </div>
                </div>
                <p className="summer-banner-early">Early Bird Registration: Apr 1 – May 30</p>
                <button className="summer-banner-btn" onClick={handleClick}>
                    Sign Up Now
                </button>
            </div>
        </div>
    );
}

export default SummerBanner;
