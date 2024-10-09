import React, { useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import background1 from "../assets/background-1.png";
import Carousel from './CarouselCard';
import '../home.css';
import ServiceBanner from './ServiceBanner';
import Reviews from './Reviews';

function Home() {
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
      <Carousel />
      <ServiceBanner />
        <div id='test'>
          {/* This is where the Trustmary widget script will load */}
        </div>
      <div className="directions-container">
        <div style={{ width: '55vw', height: '55vh', border: "4px solid black", borderRadius: "8px" }}>
          Map commented out during testing
        </div>
        {/* Google Maps code commented out to save API hits */}
        {/* <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <Map
            style={{ width: '55vw', height: '55vh', border: "4px solid black", borderRadius: "8px" }}
            defaultCenter={{ lat: 34.94580, lng: -92.00977 }}
            defaultZoom={17}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId={import.meta.env.VITE_MAP_ID}
          />
          <AdvancedMarker position={{ lat: 34.94580, lng: -92.00977 }} title="PowerHouse Crossfit and Training">
            <Pin background={'#ed1c26'} glyphColor={'#000'} borderColor={'#000'} scale={2.0} glyph={"PH"} />
          </AdvancedMarker>
        </APIProvider> */}
        <div className='directions-text'>
          <h2>Need Directions?!</h2>
          <p>PowerHouse Crossfit and Training Complex</p>
          <p>1804 S. Pine Street, Cabot AR 72023</p>
          <p>501.247.1517</p>
          <p>Powerhouse Training Complex, LLC</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
