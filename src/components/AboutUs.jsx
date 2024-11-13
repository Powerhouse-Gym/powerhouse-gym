import "../components/AboutUs.css";
import nikki from "../assets/crossfit-coaches/nicole.webp";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import NewsLetter from "./NewsLetter";

function AboutUs() {
  return (
    <div>
      <div className="main-div">
        <h1>OUR GOAL IS TO HELP YOU REACH YOURS.</h1>
        <h3>
          Powerhouse Training Complex & Crossfit
          <br />
          Cabot, AR
        </h3>
      </div>
      <div className="about-us-section">
        <div className="right-about-us">
          <img src={nikki} alt="gym pic" />
        </div>
        <div className="left-about-us">
          <h1>About The Gym</h1>
          <p>
            At our CrossFit gym, we’re passionate about helping you push past
            your limits and reach new fitness milestones. Our community-driven
            approach fosters motivation and accountability, creating a space
            where athletes of all levels feel welcome. With carefully crafted
            workouts that balance strength, endurance, and agility, we’re
            committed to guiding you through every stage of your fitness
            journey.
          </p>

          <p>
            Our experienced coaches bring expertise and energy to each class,
            ensuring you receive personalized guidance to safely and effectively
            master each movement. Whether you’re here to get stronger, boost
            your endurance, or simply enjoy an active lifestyle, we provide a
            supportive environment designed to inspire. Join us and experience
            the CrossFit difference — transforming not just your body, but your
            confidence and resilience as well.
          </p>
        </div>
      </div>
      <NewsLetter />
      <div className="directions-container">
        <h1 style ={{textAlign: "center"}}>Located @ 1804 S. Pine Street <br/>Behind The Popcorn Spot</h1>
        
        {/* <div style={{ width: '55vw', height: '55vh', border: "4px solid black", borderRadius: "8px" }}>
          Map commented out during testing
          </div> */}
        {/* Google Maps code commented out to save API hits */}
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
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
        </APIProvider>
            <h1>Call us @ 501-247-1517</h1>
      </div>
    </div>
  );
}

export default AboutUs;
