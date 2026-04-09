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
            <div className="efa-banner-inner">
                <div className="efa-banner-badge">
                    <span className="efa-banner-tag">EFA Approved</span>
                    <span className="efa-banner-state">Arkansas</span>
                </div>
                <div className="efa-banner-content">
                    <h2 className="efa-banner-title">Use Your EFA Funds at Powerhouse</h2>
                    <p className="efa-banner-text">
                        Sports training, Crossfit, personal training, summer camps, after-school programs —
                        all eligible for Arkansas Education Freedom Account reimbursement.
                    </p>
                    <button className="efa-banner-btn" onClick={handleClick}>
                        See Eligible Programs
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EfaBanner;
