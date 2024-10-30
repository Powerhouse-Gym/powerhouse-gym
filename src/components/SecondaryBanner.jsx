import React, {useContext} from 'react';
import newlogo from "../assets/new-logo.png"
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import darkmodeFacebook from '../assets/darkmode-facebook.svg'
import darkmodeInstagram from '../assets/darkmode-instagram.svg'
import crossfit from "../assets/crossfit-white.jpg"
import { DarkModeContext } from '../context/DarkModeProvider';
import crossfitlogonobackground from "../assets/crossfit-white-remove-background.com.png"
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

function SecondaryBanner() {

    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className='secondary-banner'>
            {/* <div className = "logo-div">
            <img src={newlogo} className="logo" alt="logo" />
            </div> */}
            <div className="contact-banner">
                {/* <h2>501-247-1517</h2> */}
                <a href="tel:+15012471517" className="phone-link">501-247-1517</a>
            <h4>1804 S. Pine Street, Cabot, AR 72023</h4>
                <div className='banner-logos'>
                    <a id="facebook" href="https://www.facebook.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                        <img src={isDarkMode ? darkmodeFacebook : facebook} alt="Facebook" />
                    </a>
                    <a id="instagram" href="https://www.instagram.com/powerhousetrainingcomplex/" target="_blank" rel="noopener noreferrer">
                        <img src={isDarkMode ? darkmodeInstagram : instagram} alt='Instagram' />
                    </a>
                </div>
            </div>
            <div className="directions-container">
        {/* <div style={{ width: '55vw', height: '55vh', border: "4px solid black", borderRadius: "8px" }}>
          Map commented out during testing
          </div> */}
        {/* Google Maps code commented out to save API hits */}
        {/* <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <Map
            className="mapstyles"
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
        </div>
        </div>


    );
}

export default SecondaryBanner;