import newlogo from "../assets/new-logo.png";
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import crossfit from "../assets/crossfit-white-remove-background.com.png";

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
    marginBottom: '0.75rem',
    transition: 'transform 0.3s ease',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '1.2rem',
    marginTop: '0.5rem',
  };

  const iconStyle = {
    width: '28px',
    height: '28px',
    transition: 'opacity 0.3s ease',
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
        <a href="tel:+15012471517" style={phoneLinkStyle}>
          <span className="contact-phone" style={contactStyle}>501-247-1517</span>
        </a>
        <p className="contact-address" style={addressStyle}>1804 S. Pine Street, Cabot, AR 72023</p>
      </div>

      {/* CrossFit Section */}
      <div className="crossfit-section" style={sectionStyle}>
        <img
          src={crossfit}
          alt="CrossFit Logo"
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
    </div>
  );
}

export default SecondaryBanner;
