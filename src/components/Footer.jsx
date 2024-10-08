import React from 'react';
import logo from "../assets/powerhouse-grafiti.png"
import logoActual from "../assets/logo-white.webp"

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
    <img className = "footer-logo" src= {logoActual} alt="powerhouse logo"/>
      <p>PowerHouse Crossfit and Training Complex</p>
      <p>1804 S. Pine Street, Cabot AR 72023</p>
      <p>501.247.1517</p>
      <p>Powerhouse Training Complex, LLC</p>
    <img className = "footer-logo" src= {logo} alt="powerhouse logo" />
    </div>
  );
};



export default Footer;
