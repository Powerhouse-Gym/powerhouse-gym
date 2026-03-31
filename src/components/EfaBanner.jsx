import { useNavigate } from 'react-router-dom';
import '../efa-banner.css';

function EfaBanner() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/efa');
        window.scrollTo(0, 0);
    };

    return (
        <div className="efa-banner">
            <div className="efa-banner-content">
                <h2 className="efa-banner-title">Arkansas EFA Approved Vendor</h2>
                <p className="efa-banner-text">
                    We proudly accept Education Freedom Account funds. Invest in your child's athletic development today!
                </p>
                <button className="efa-banner-btn" onClick={handleClick}>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default EfaBanner;
