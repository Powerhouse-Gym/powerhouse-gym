import React, { useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import athlete from "../assets/athlete.png"


function Home() {
    

    return (
        <div id="home">
            <h1>Come see us!</h1>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
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
            </APIProvider>
            <a href="https://www.flaticon.com/free-icons/gym" title="gym icons">Gym icons created by Freepik - Flaticon</a>
        </div>
    );
}

export default Home;
