import '../summer-banner.css';
import summerImg from '../assets/26summerhours.jpeg';
import PhoneLink from './PhoneLink';

function SummerBanner() {
    const handleSignUp = () => {
        window.open('https://app.upperhand.io/customers/1047/create_user', '_blank');
    };

    return (
        <section className="summer-banner">
            <div className="summer-banner-inner">
                <div className="summer-banner-img">
                    <img src={summerImg} alt="Summer Membership Hours" />
                </div>
                <div className="summer-banner-content">
                    <span className="summer-banner-tag">Summer Hours</span>
                    <h2 className="summer-banner-title">Summer Membership Hours</h2>
                    <p className="summer-banner-text">
                        Fun &amp; creative activities for boys &amp; girls ages K &amp; up.
                    </p>
                    <ul className="summer-banner-perks">
                        <li>Jun 1 – Aug 11 · Monday – Friday · 7 AM – 6 PM</li>
                        <li>1 Day — $40 · 3 Day — $90 · 5 Day — $125</li>
                        <li>Early Bird SIBLING Discount Registration: Apr 1 – May 30</li>
                    </ul>
                    <div className="summer-banner-actions">
                        <button className="summer-banner-btn" onClick={handleSignUp}>
                            Sign Up Now
                        </button>
                        <PhoneLink
                            as="button"
                            className="summer-banner-btn summer-banner-btn-outline"
                        >
                            Call for More Info
                        </PhoneLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SummerBanner;
