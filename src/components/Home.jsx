import React, { useContext, useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import background1 from "../assets/background-1.png";
import Carousel from './CarouselCard';
import '../home.css';
import ServiceBanner from './ServiceBanner';
import powerhouse from "../assets/powerhouse-grafiti.png"
import chainlink from "../assets/chainlink.png"
import SecondaryBanner from './SecondaryBanner';
import NewsLetter from './NewsLetter';
import MobileServiceBanner from './MobileServiceBanner';
import { DarkModeContext } from '../context/DarkModeProvider';
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import darkmodeFacebook from '../assets/darkmode-facebook.svg'
import darkmodeInstagram from '../assets/darkmode-instagram.svg'
import CrossfitCoaches from './CrossfitCoaches';
import AdaptiveInclusive from './AdaptiveInclusive';





function Home() {
  // use effect is turned off during development to save views on REVIEWS
  // upgrade will be needed to run efficiently at 100$ year

  const { isDarkMode } = useContext(DarkModeContext)


  useEffect(() => {
    // Check if the script is already added
    if (!document.querySelector("script[src='https://widget.trustmary.com/fpDyQf-wk']")) {
      const script = document.createElement('script');
      script.src = "https://widget.trustmary.com/fpDyQf-wk";
      script.async = true;
      document.getElementById("test").appendChild(script);
    }
  }, []); // Empty dependency array ensures the effect runs only once

  

  return (
    <div id="home">
      <div className='banner'>
        <h1>Welcome To</h1>
        <img src={powerhouse} alt="powerhouse" />

      </div>
      {/* <div className="skull-div" style={{ backgroundImage: `url(${chainlink})` }}>
      </div> */}
        <SecondaryBanner />
      <Carousel />
      <AdaptiveInclusive />
      <ServiceBanner />
      <MobileServiceBanner />
      <div id='test'>
        {/* This is where the Trustmary widget script will load */}
      </div>
      </div>
    
  );
}

export default Home;
