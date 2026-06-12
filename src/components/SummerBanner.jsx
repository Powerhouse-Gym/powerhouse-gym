import '../summer-banner.css';
import summerImg from '../assets/26summerhoursupdated.png';
import PhoneLink from './PhoneLink';
import ImageLightbox from './ImageLightbox';

function SummerBanner() {
    const handleSignUp = () => {
        window.open('https://app.upperhand.io/customers/1047/create_user', '_blank');
    };

    return (
        <section className="summer-banner">
            <div className="summer-banner-inner">
                <ImageLightbox
                    src={summerImg}
                    alt="Summer Membership Hours"
                    className="summer-banner-img"
                />
                <div className="summer-banner-content">
                    <span className="summer-banner-tag">Summer Hours</span>
                    <h2 className="summer-banner-title">Summer Membership Hours</h2>
                    <p className="summer-banner-text">
                        Fun &amp; creative activities for boys &amp; girls ages K &amp; up.
                    </p>
                    <ul className="summer-banner-perks">
                        <li>Jun 1 – Aug 11 · Monday – Friday · 7 AM – 6 PM</li>
                        <li>1 Day — $50 · 3 Day — $115 · 5 Day — $150</li>
                        <li>Athletes bring a lunch, snacks, and water bottle each day</li>
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
