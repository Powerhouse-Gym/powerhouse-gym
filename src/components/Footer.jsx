import React from 'react';
import logo from "../assets/powerhouse-grafiti.png"

const Footer = () => {


const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  left: '0',
  bottom: '0',
  width: '100vw',
  fontSize: "12px",
  height: "10vh",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "25px"
};

  return (
    <div style={footerStyle}>
      <p>PowerHouse Crossfit and Training Complex</p>
      <p>1804 S. Pine Street, Cabot AR 72023</p>
    <img className = "footer-logo" src= {logo} alt="powerhouse logo" />
      <p>501.247.1517</p>
      <p>Powerhouse Training Complex, LLC</p>
    </div>
  );
};



export default Footer;
