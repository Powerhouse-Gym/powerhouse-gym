import '../after-school-banner.css';
import afterSchoolImg from '../assets/26afterschool.png';

function AfterSchoolBanner() {
    return (
        <div className="after-school-banner">
            <div className="after-school-banner-img">
                <img src={afterSchoolImg} alt="After School Membership" />
            </div>
            <div className="after-school-banner-content">
                <h2 className="after-school-banner-title">After School Memberships</h2>
                <p className="after-school-banner-subtitle">Ages K – 13 Years Old</p>
                <div className="after-school-banner-options">
                    <a
                        href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/memberships"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="after-school-banner-btn">$150/mo — Pickup by 5pm</button>
                    </a>
                    <a
                        href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/memberships"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="after-school-banner-btn">$300/mo — Pickup by 6pm</button>
                    </a>
                    <a
                        href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/memberships"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="after-school-banner-btn">$350/mo — Before & After School</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AfterSchoolBanner;
