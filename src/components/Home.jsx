import React, { useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import background1 from "../assets/background-1.png"
import Carousel from './Carousel';
import '../home.css'


function Home() {
    

    return (
        <div id="home" >
            <Carousel />
            <h1>Need Directions?!</h1>
            <div style={{ width: '55vw', height: '55vh', border: "4px solid black", borderRadius: "8px" }}>
                Map commented out during testing
            </div>
            {/* commented out below map to save hits on google account */}
            {/* <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map
                    style={{ width: '55vw', height: '55vh', border: "4px solid black", borderRadius: "8px" }}
                    defaultCenter={{ lat: 34.94580, lng: -92.00977 }}
                    defaultZoom={17}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    mapId={import.meta.env.VITE_MAP_ID}
                />
                <AdvancedMarker position={{ lat: 34.94580, lng: -92.00977 }} title="PowerHouse Crossfit and Training"  >
                    <Pin background={'#ed1c26'} glyphColor={'#000'} borderColor={'#000'} scale={2.0} glyph={"PH"} />
                </AdvancedMarker>
            </APIProvider> */}
        </div>
    );
}

export default Home;
