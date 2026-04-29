import '../summer-banner.css';
import summerImg from '../assets/26summerhours.jpeg';

function SummerBanner() {
    const handleClick = () => {
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
                        <li>Early Bird Registration: Apr 1 – May 30</li>
                    </ul>
                    <button className="summer-banner-btn" onClick={handleClick}>
                        Sign Up Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default SummerBanner;
