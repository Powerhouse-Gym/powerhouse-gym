import '../hyrox-banner.css';
import hyroxImg from '../assets/26hyrox.jpeg';
import ImageLightbox from './ImageLightbox';

function HyroxBanner() {
    return (
        <div id="hyrox" className="hyrox-banner">
            <ImageLightbox
                src={hyroxImg}
                alt="Powerhouse Hyrox Affiliate"
                className="hyrox-banner-img"
            />
            <div className="hyrox-banner-content">
                <span className="hyrox-banner-tag">Hyrox Affiliate</span>
                <h2 className="hyrox-banner-title">Train Like a Hyrox Athlete</h2>
                <p className="hyrox-banner-subtitle">
                    Official Hyrox Training Club — built for endurance, strength,
                    and the world's fastest growing fitness race.
                </p>
                <a
                    href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/160911-powerhouse-hyrox-drop-in"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="hyrox-banner-btn">Drop In Now</button>
                </a>
            </div>
        </div>
    );
}

export default HyroxBanner;
