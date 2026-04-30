import { Link } from 'react-router-dom';
import newlogo from "../assets/new-logo.png";
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import crossfit from "../assets/crossfit-white-remove-background.com.png";
import PhoneLink from './PhoneLink';

function SecondaryBanner() {
  const bannerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    backgroundColor: 'white',
    color: '#333',
    margin: '0rem 0',
    flexWrap: 'wrap',
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    minWidth: '200px',
    margin: '0.5rem',
  };

  const logoStyle = {
    maxWidth: '180px',
    marginBottom: '0.25rem',
    transition: 'transform 0.3s ease',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '1.2rem',
    marginTop: 0,
  };

  const iconStyle = {
    width: '28px',
    height: '28px',
    transition: 'opacity 0.3s ease',
  };

  const hyroxTagStyle = {
    display: 'inline-block',
    backgroundColor: '#f5e042',
    color: '#0a0a0a',
    fontWeight: 700,
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: '5px 14px',
    borderRadius: '2px',
    marginTop: '-1.1rem',
    marginBottom: '0.6rem',
    transform: 'rotate(-4deg)',
    boxShadow: '0 4px 12px rgba(245, 224, 66, 0.35)',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    position: 'relative',
    zIndex: 2,
  };

  const contactStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const addressStyle = {
    fontSize: '1.2rem',
    color: '#666',
  };

  const phoneLinkStyle = {
    color: '#000',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  return (
    <div className="secondary-banner" style={bannerStyle}>
      {/* PTC Section */}
      <div className="ptc-section" style={sectionStyle}>
        <img
          src={newlogo}
          alt="PTC Logo"
          className="ptc-logo"
          style={logoStyle}
        />
        <div style={socialIconsStyle}>
          <a href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
            <img
              src={facebook}
              alt="Facebook"
              style={iconStyle}
            />
          </a>
          <a href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
            <img
              src={instagram}
              alt="Instagram"
              style={iconStyle}
            />
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" style={sectionStyle}>
        <PhoneLink style={phoneLinkStyle}>
          <span className="contact-phone" style={contactStyle}>501-247-1517</span>
        </PhoneLink>
        <p className="contact-address" style={addressStyle}>1804 S. Pine Street, Cabot, AR 72023</p>
      </div>

      {/* CrossFit Section */}
      <div className="crossfit-section" style={sectionStyle}>
        <img
          src={crossfit}
          alt="CrossFit Logo"
          style={logoStyle}
        />
        <Link to="/crossfit#hyrox" className="hyrox-affiliate-tag" style={hyroxTagStyle}>Hyrox Affiliate</Link>
        <div style={socialIconsStyle}>
          <a href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
            <img
              src={facebook}
              alt="Facebook"
              style={iconStyle}
            />
          </a>
          <a href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
            <img
              src={instagram}
              alt="Instagram"
              style={iconStyle}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SecondaryBanner;
