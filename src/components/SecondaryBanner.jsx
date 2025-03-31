import React, { useContext } from 'react';
import newlogo from "../assets/new-logo.png";
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import darkmodeFacebook from '../assets/darkmode-facebook.svg';
import darkmodeInstagram from '../assets/darkmode-instagram.svg';
import crossfit from "../assets/crossfit-white-remove-background.com.png";
import { DarkModeContext } from '../context/DarkModeProvider';

function SecondaryBanner() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className="secondary-banner" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem', 
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
    }}>
      {/* Left Section: PTC Logo with Social Icons */}
      <div className="logo-div" id="ptc-logo" style={{ textAlign: 'center' }}>
        <img 
          src={newlogo} 
          className="logo" 
          alt="PTC Logo" 
          style={{ maxWidth: '300px', marginBottom: '0.5rem' }} 
        />
        <div className="social-icons-left" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a 
            href="https://www.facebook.com/powerhousetrainingcomplex/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={isDarkMode ? darkmodeFacebook : facebook} 
              alt="Facebook" 
              style={{ width: '24px', height: '24px' }} 
            />
          </a>
          <a 
            href="https://www.instagram.com/powerhousetrainingcomplex/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={isDarkMode ? darkmodeInstagram : instagram} 
              alt="Instagram" 
              style={{ width: '24px', height: '24px' }} 
            />
          </a>
        </div>
      </div>

      {/* Center Section: Contact Info */}
      <div className="contact-banner" style={{ textAlign: 'center' }}>
        <a href="tel:+15012471517" className="phone-link" style={{ 
          fontSize: '2rem', 
          color: isDarkMode ? '#fff' : '#000', 
          textDecoration: 'none' 
        }}>
          501-247-1517
        </a>
        <h4 style={{ margin: '0.5rem 0 0', fontSize: '1.5rem' }}>
          1804 S. Pine Street, Cabot, AR 72023
        </h4>
      </div>

      {/* Right Section: CrossFit Logo with Social Icons */}
      <div className="logo-div" style={{ textAlign: 'center' }}>
        <img 
          src={crossfit} 
          className="logo" 
          alt="CrossFit Logo" 
          id="crossfit-logo" 
          style={{ maxWidth: '300px', marginBottom: '0.5rem' }} 
        />
        <div className="social-icons-right" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a 
            href="https://www.facebook.com/powerhousetrainingcomplex/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={isDarkMode ? darkmodeFacebook : facebook} 
              alt="Facebook" 
              style={{ width: '24px', height: '24px' }} 
            />
          </a>
          <a 
            href="https://www.instagram.com/powerhousetrainingcomplex/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={isDarkMode ? darkmodeInstagram : instagram} 
              alt="Instagram" 
              style={{ width: '24px', height: '24px' }} 
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SecondaryBanner;