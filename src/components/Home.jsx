import React, {useEffect} from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';


function Home() {
const marker = {lat:34.9749, lng: -92.0163}
    return (
        <div id ="home">
            <h1>Come see us!</h1>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map
                    style={{ width: '55vw', height: '55vh', border: "4px solid black" }}
                    defaultCenter= {{lat: 34.94580, lng: -92.00977}}
                    defaultZoom={17}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                />
            </APIProvider>
        </div>
    );
}

export default Home;