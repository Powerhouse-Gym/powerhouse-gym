import { Divider } from "@mui/material";
import { cageAndFieldRentals } from "../training-data";
import { useNavigate } from "react-router-dom";
import PTimg from "../assets/crossfit/personaltraining.jpg";
import baseballimg from "../assets/baseballbackground.jpg";
import adaptiveImg from "../assets/adaptive-img.jpg";
import deadlift from "../assets/deadlift.jpg";
import teampic from "../assets/teampic.jpg";
import grouppic from "../assets/groupic2.jpg";
import oneOnone from "../assets/101.jpg";
import ptPic from "../assets/pt-pic.jpg";
import rowerpic from "../assets/rowerpic.jpg";

const PersonalTraining = () => {
  const teamTraining = cageAndFieldRentals.find(
    (item) => item.title === "Team Rentals"
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className="pt-wrapper"
        style={{ backgroundImage: `url(${rowerpic})` }}
      >
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Personal Training Services
      </h1>
      <div className="personal-training-container">
        <div className="personal-service-section">
          <img src={adaptiveImg} alt="adaptive training" />
          <div style = {{display: "flex", flexDirection: "column"}}>

          <h2
            style={{
              textDecoration: "underline",
              fontStyle: "italic",
              textAlign: "center",
            }}
            >
            Now Offering!
          </h2>
          <h3>Inclusive & Adaptive Training</h3>
          <p>
            Specialized training designed to be adaptive and inclusive for all
            abilities.
          </p>
            </div>
         <a href = "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140947-adaptive-and-inclusive-personal-training">

            <button style = {{cursor: "pointer"}}>
              <strong>BOOK NOW</strong> 
            </button>
         </a>
          
        </div>
        <div className="personal-service-section">
          <img src={deadlift} alt="deadlift training" />
          <h3>Sports-Specific Strength & Conditioning</h3>

          <p>
            Customized training focused on building sport-specific strength and
            agility.
          </p>
          <a href = "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/112727-sports-specific-team-strength-and-conditioning">
          <button style = {{cursor: "pointer"}}>
            <strong>BOOK NOW</strong> 
          </button>
          </a>
        </div>

        <div className="personal-service-section">
          <img src={teampic} alt="group" />
          <h3>Team Strength & Conditioning</h3>
          <p>
            Strength and conditioning sessions for teams (up to 12 athletes).
          </p>
          <p>
            <strong>$180 per session</strong>
          </p>
          <div
            style={{
              paddingBottom: "15px",
              display: "flex",
              overflowX: "auto",
              whiteSpace: "nowrap",
              justifyContent: "center",
              width: "100%",
              gap: ".2vw",
            }}
            className="button-scroll"
          >
            <a href={'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/89114-baseball-team-training'}>
              <button>Baseball</button>
            </a>
            <a href={'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/89115-softball-team-training'}>
              <button>Softball</button>
            </a>
            <a href={'https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/87548-volleyball-team-training'}>
              <button>Volleyball</button>
            </a>
          </div>
        </div>

        <div className="personal-service-section">
          <img src={grouppic} alt="group pic" />
          <h3>Small Group Training</h3>
          <p>
            2-on-1 Training: <strong>$90 per hour</strong>
          </p>
          <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140951-strength-and-conditioning-2-on-1">
            <button>
              <strong>BOOK NOW</strong> 
            </button>
          </a>
          <p>
            4-on-1 Training: <strong>$150 per hour</strong>
          </p>
          <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140954-strength-and-conditioning-4-on-1">
            <button>
              <strong>BOOK NOW</strong> 
            </button>
          </a>
        </div>

        <div className="personal-service-section">
          <img src={oneOnone} alt="crossfit class" />
          <h3>Crossfit Onboarding</h3>
          <p>
            Four-week program, including two sessions per week and one CrossFit
            class each week.
          </p>
          <p>
            <strong>$250</strong>
          </p>
          <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes">
            <button style = {{cursor: "pointer"}}>
              <strong>BOOK NOW</strong> 
            </button>
          </a>
        </div>
        <div className="personal-service-section">
          <img src={ptPic} alt="pt picture" />
          <h2>1-on-1 Personal Training</h2>
          <p>Personalized, one-on-one training sessions.</p>
          <p>
            <strong>$70 per hour</strong>
          </p>
          <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/46891-personal-training">
            <button style = {{cursor: "pointer"}}>
              <strong>BOOK NOW</strong>
            </button>
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
