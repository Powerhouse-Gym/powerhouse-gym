import React from 'react';

const Footer = () => {

  const linkStyle = {
    color: 'white'
  }

  return (
    <div className="footer-div">
      {/* <img className="footer-logo" src={logoActual} alt="powerhouse logo" /> */}
      <p>PowerHouse Crossfit and Training Complex</p>
      <p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=1804+S+Pine+Street,+Cabot+AR+72023"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          1804 S. Pine Street, Cabot AR 72023
        </a>
      </p>
      <p>
        <a
          style={linkStyle}
          href="tel:5012471517"
        >501.247.1517</a>
      </p>
      <p>Powerhouse Training Complex, LLC</p>
      <p>Website Created By: B&W Development</p>
      {/* <img className="footer-logo" src={logo} alt="powerhouse logo" /> */}
    </div>
  );
};

export default Footer;
