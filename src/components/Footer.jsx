import React from 'react';
import logo from "../assets/powerhouse-grafiti.png"
import logoActual from "../assets/logo-white.webp"
import brickwall from "../assets/brick-wall-blank.png"

const Footer = () => {


const footerStyle = {
backgroundImage: `url(${brickwall})`,
 
};

  return (
    <div  className = "footer-div">
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
