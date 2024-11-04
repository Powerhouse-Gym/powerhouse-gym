import { Divider } from "@mui/material";
import { cageAndFieldRentals } from "../training-data";
import { useNavigate } from "react-router-dom";

const PersonalTraining = () => {

    const teamTraining = cageAndFieldRentals.find(item => item.title === "Team Rentals");
    
    const navigate = useNavigate()


    return (
        <>
            <div className="crossfit-header-div">
                <div className="crossfit-header">
                    <h1 className="header-one">Together We Are</h1>
                    <h2>Stronger!</h2>
                </div>
            </div>
            <div className="intro-section">
                <h1>Personal Training Services</h1>
                <p>Transform your fitness with tailored programs led by certified trainers. Whether you're new to fitness or training for a specific goal, we have the right fit for you.</p>
            </div>
            <Divider sx={{backgroundColor: 'white'}}/>
            <div className="personal-training-container">
                <div className="personal-training-section pt-right">

                    <div className="service-section">
                        <h2>Sports-Specific Strength & Conditioning</h2>
                        <p>Customized training focused on building sport-specific strength and agility.</p>
                        <button onClick={() => navigate('/training')}>More Info</button>
                    </div>

                    <div className="service-section">
                        <h2>Team Strength & Conditioning</h2>
                        <p>Strength and conditioning sessions for teams (up to 12 athletes).</p>
                        <p><strong>$180 per session</strong></p>
                        <a href={teamTraining.url1}><button>{teamTraining.urlTitle1}</button></a>
                        <a href={teamTraining.url2}><button>{teamTraining.urlTitle2}</button></a>
                        <a href={teamTraining.url3}><button>{teamTraining.urlTitle3}</button></a>
                        <a href={teamTraining.url4}><button>{teamTraining.urlTitle4}</button></a>
                    </div>

                    <div className="service-section">
                        <h2>Small Group Training</h2>
                        <p>2-on-1 Training: <strong>$90 per hour</strong></p>
                        <p>4-on-1 Training: <strong>$150 per hour</strong></p>
                        < a href="tel:+15012471517" target="_blank" rel="noopener noreferrer">
                            <button>
                                Call for more information
                            </button>
                        </a>
                    </div>

                    <div className="service-section">
                        <h2>Crossfit Onboarding</h2>
                        <p>Four-week program, including two sessions per week and one CrossFit class each week.</p>
                        <p><strong>$250</strong></p>
                        < a href="tel:+15012471517" target="_blank" rel="noopener noreferrer">
                            <button>
                                Call for more information
                            </button>
                        </a>
                    </div>
                </div>
                <Divider orientation="vertical" flexItem sx={{backgroundColor: 'white'}}/>
                <div className="personal-training-section pt-left">
                    <div className="service-section">
                        <h1 style={{textDecoration: 'underline', fontStyle: 'italic'}}>Now Offering!</h1>
                        <h2>Inclusive & Adaptive Training</h2>
                        <p>Specialized training designed to be adaptive and inclusive for all abilities.</p>
                        <p><strong>Call for pricing</strong></p>
                        < a href="tel:+15012471517" target="_blank" rel="noopener noreferrer">
                            <button>
                                Call for more information
                            </button>
                        </a>
                    </div>
                    <div className="service-section">
                        <h1 style={{textDecoration: 'underline', fontStyle: 'italic'}}>Coming Soon in 2025</h1>
                        <h2>1-on-1 Personal Training</h2>
                        <p>Personalized, one-on-one training sessions.</p>
                        <p><strong>$70 per hour</strong></p>
                        < a href="tel:+15012471517" target="_blank" rel="noopener noreferrer">
                            <button>
                                Call for more information
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Divider sx={{backgroundColor: 'white'}}/>
        </>
    );
}

export default PersonalTraining;