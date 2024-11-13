import { Divider } from "@mui/material";
import { cageAndFieldRentals } from "../training-data";
import { useNavigate } from "react-router-dom";
import PTimg from "../assets/crossfit/personaltraining.jpg";
import baseballimg from "../assets/baseballbackground.jpg";
import adaptiveImg from "../assets/adaptive-img.jpg"
import deadlift from "../assets/deadlift.jpg"
import teampic from "../assets/teampic.jpg"
import grouppic from "../assets/groupic2.jpg"

const PersonalTraining = () => {
  const teamTraining = cageAndFieldRentals.find(
    (item) => item.title === "Team Rentals"
  );

  const navigate = useNavigate();

  return (
    <>
      <div className="pt-wrapper" style={{ backgroundImage: `url(${PTimg})` }}>
        <div className="intro-section">
          <h1>Powerhouse PERSONAL Training</h1>
          <p>
            Transform your fitness with tailored programs led by certified
            trainers. Whether you are new to fitness or training for a specific
            goal, we have the right fit for you.
          </p>
        </div>
      </div>
      {/* <Divider sx={{backgroundColor: 'white'}}/> */}
      <h1
        className="pt-service-header"
        style={{
            display: "flex",
            fontSize: "46px",
            textDecoration: "underline",
            height: "8vh",
            paddingTop: "20px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}
      >
        Services
      </h1>
      <div className="personal-training-container">
       
        <div className="service-section">
            <img src= {adaptiveImg} alt="adaptive training" />
          <h1 style={{ textDecoration: "underline", fontStyle: "italic" }}>
            Now Offering!
          </h1>
          <h2>Inclusive & Adaptive Training</h2>
          <p>
            Specialized training designed to be adaptive and inclusive for all
            abilities.
          </p>
          <a
            href="tel:+15012471517"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Call for more information</button>
          </a>
        </div>
          <div className="service-section">
          <img src= {deadlift} alt="deadlift training" />
            <h2>Sports-Specific Strength & Conditioning</h2>

            <p>
              Customized training focused on building sport-specific strength
              and agility.
            </p>
            <button onClick={() => navigate("/training")}>More Info</button>
          </div>

          <div className="service-section">
            <img src = {teampic} alt = "group" />
            <h2>Team Strength & Conditioning</h2>
            <p>
              Strength and conditioning sessions for teams (up to 12 athletes).
            </p>
            <p>
              <strong>$180 per session</strong>
            </p>
            <div style = {{display: "flex"}}> 

            <a href={teamTraining.url1}>
              <button>{teamTraining.urlTitle1}</button>
            </a>
            <a href={teamTraining.url2}>
              <button>{teamTraining.urlTitle2}</button>
            </a>
            <a href={teamTraining.url3}>
              <button>{teamTraining.urlTitle3}</button>
            </a>
            <a href={teamTraining.url4}>
              <button>{teamTraining.urlTitle4}</button>
            </a>
            </div>
          </div>

          <div className="service-section">
            <img src = {grouppic} alt = "group pic" />
            <h2>Small Group Training</h2>
            <p>
              2-on-1 Training: <strong>$90 per hour</strong>
            </p>
            <p>
              4-on-1 Training: <strong>$150 per hour</strong>
            </p>
            <a
              href="tel:+15012471517"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Call for more information</button>
            </a>
          </div>

          <div className="service-section">
            <h2>Crossfit Onboarding</h2>
            <p>
              Four-week program, including two sessions per week and one
              CrossFit class each week.
            </p>
            <p>
              <strong>$250</strong>
            </p>
            <a
              href="tel:+15012471517"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Call for more information</button>
            </a>
          </div>
        <div className="service-section">
          <h1 style={{ textDecoration: "underline", fontStyle: "italic" }}>
            Coming Soon in 2025
          </h1>
          <h2>1-on-1 Personal Training</h2>
          <p>Personalized, one-on-one training sessions.</p>
          <p>
            <strong>$70 per hour</strong>
          </p>
          <a
            href="tel:+15012471517"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Call for more information</button>
          </a>
        </div>
        </div>
        {/* <Divider
          orientation="vertical"
          flexItem
          sx={{ backgroundColor: "white" }}
        /> */}
        {/* <div className="personal-training-section pt-left">
        </div> */}
     
      {/* <Divider sx={{ backgroundColor: "white" }} /> */}
    </>
  );
};

export default PersonalTraining;
