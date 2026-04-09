import '../newsletter-banner.css';

function NewsLetter() {
    return (
        <section className="newsletter-banner">
            <div className="newsletter-banner-inner">
                <div className="newsletter-banner-content">
                    <span className="newsletter-banner-tag">Member Access</span>
                    <h2 className="newsletter-banner-title">One Account. Every Class.</h2>
                    <p className="newsletter-banner-text">
                        Book classes, manage your membership, reserve drop-ins, and get first access
                        to new programs — all from one place.
                    </p>
                    <ul className="newsletter-banner-perks">
                        <li>Online class booking &amp; schedule</li>
                        <li>Membership &amp; drop-in management</li>
                        <li>Event &amp; camp registration</li>
                    </ul>
                </div>
                <a
                    href="https://app.upperhand.io/accounts/new_user?customer_id=1047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="newsletter-banner-btn"
                >
                    Create Account
                </a>
            </div>
        </section>
    );
}

export default NewsLetter;