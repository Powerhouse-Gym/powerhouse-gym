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
          <a href="tel:+15012471517" target="_blank" rel="noopener noreferrer">
            <button>
              <strong style = {{color: "#ed1c26"}}>CALL</strong> for more information
            </button>{" "}
          </a>
        </div>
        <div className="personal-service-section">
          <img src={deadlift} alt="deadlift training" />
          <h3>Sports-Specific Strength & Conditioning</h3>

          <p>
            Customized training focused on building sport-specific strength and
            agility.
          </p>
          <button onClick={() => navigate("/training")}>
            <strong style = {{color: "#ed1c26"}}>CLICK</strong> for more information
          </button>
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
              width: "100%",
            }}
            className="button-scroll"
          >
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

        <div className="personal-service-section">
          <img src={grouppic} alt="group pic" />
          <h3>Small Group Training</h3>
          <p>
            2-on-1 Training: <strong>$90 per hour</strong>
          </p>
          <p>
            4-on-1 Training: <strong>$150 per hour</strong>
          </p>
          <a href="tel:+15012471517" target="_blank" rel="noopener noreferrer">
            <button>
              <strong style = {{color: "#ed1c26"}}>CALL</strong> for more information
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
          <a href="tel:+15012471517" target="_blank" rel="noopener noreferrer">
            <button>
              <strong style = {{color: "#ed1c26"}}>CALL</strong> for more information
            </button>
          </a>
        </div>
        <div className="personal-service-section">
          <img src={ptPic} alt="pt picture" />
          <h3 style={{ textDecoration: "underline", fontStyle: "italic" }}>
            Coming Soon in 2025
          </h3>
          <h2>1-on-1 Personal Training</h2>
          <p>Personalized, one-on-one training sessions.</p>
          <p>
            <strong>$70 per hour</strong>
          </p>
          <a href="tel:+15012471517" target="_blank" rel="noopener noreferrer">
            <button>
              <strong style = {{color: "#ed1c26"}}>CALL</strong> for more information
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
