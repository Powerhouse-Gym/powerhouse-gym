import { useState, useContext } from "react";
import {useNavigate} from "react-router-dom"
import chevronUp from '../assets/chevron-up.svg';
import chevronDown from '../assets/chevron-down.svg';
import highfive from "../assets/traininghighfive.jpg"
import crossfit from "../assets/crossfit.jpg"
import crossfitLogo from "../assets/crossfit-white.jpg"
import logo from "../assets/logo-white.webp"
import powerhousegrafiti from "../assets/powerhouse-grafiti.png"
import swingaway from "../assets/swingaway.png"
import darkmodeChevronUp from '../assets/darkmode-chevron-up.svg';
import darkmodeChevronDown from '../assets/darkmode-chevron-down.svg';
import { DarkModeContext } from "../context/DarkModeProvider";
import { DrawTwoTone } from "@mui/icons-material";

const MobileServiceBanner = () => {

    const [expandedCoachIndex, setExpandedCoachIndex] = useState(null);

    const {isDarkMode} = useContext(DarkModeContext)

    const [activeService, setActiveService] = useState(
        {
            title: "Personal Training",
            logo: powerhousegrafiti,
            imgUrl: highfive,
           
            listItems: [
                "Inclusive & Adaptive Training",
                "Sports-Specific Training",
                "Individual & Team Strength Training",
                "Small Group Training",
                "Crossfit Onboarding",
                "1-on-1 Personal Training"
              ]
            
        }
       )

    const allServices = [
        { 
            title: "Sports Training",
            logo: logo,
            imgUrl: swingaway,
            listItems: [ "Variety of services for team and individual sports goals",
                "Indoor practice field for soccer, volleyball, and more",
                "Enclosed cages with or without machines",
                "Customizable cages for hitting, pitching, throwing, and catching drills"]
    
        },
        {
            title: "Personal Training",
            logo: powerhousegrafiti,
            imgUrl: highfive,
       
            listItems: [
                "Inclusive & Adaptive Training",
                "Sports-Specific Training",
                "Individual & Team Strength Training",
                "Small Group Training",
                "Crossfit Onboarding",
                "1-on-1 Personal Training"
              ]
            
        },
            
    {
        title: "Powerhouse Crossfit",
        imgUrl: crossfit,
        logo: crossfitLogo,
        listItems:  [
            "Holistic fitness programs for healthier lifestyles.",
            "Welcoming community fostering shared goals.",
            "Focus on physical fitness, nutrition, and support.",
            "Training for strong minds and resilient bodies.",
            "Nutritional guidance for recovery and performance."
        ]
    }
   
    ]

    const navigate = useNavigate()

    const toggleCoachDetails = (title, index) => {
        setExpandedCoachIndex(expandedCoachIndex === index ? null : index); // Toggle expanded coach
        if (title === "Powerhouse Crossfit"){
            setActiveService(allServices[2])
        }
        else if (title === "Sports Training"){
            setActiveService(allServices[1])
        }
        else if (title === "Personal Training"){
            setActiveService(allServices[0])
        }
    };

    const handleLearnMore = (title) => {
        if (title === "Powerhouse Crossfit"){
            navigate("/crossfit")
            window.scrollTo(0, 0)
        }
        else if (title === "Sports Training"){
            navigate("/training")
            window.scrollTo(0, 0)
        }
        else if (title === "Personal Training"){
            navigate("/personal-training")
            window.scrollTo(0, 0)
        }
   }
    

    return (
        <div className="mobile-coaches-container mobile-service-container">
            <div className="mobile-trainer-list">
            <h1 className="service-title">SERVICES</h1>
                {allServices.map((service, index) => (
                    <div className="mobile-trainer-item" key={index}>
                        <div className="mobile-trainer-header" onClick={() => toggleCoachDetails(service.title, index)}>
                            {/* <img src={service.imgUrl} alt={service.title} className="mobile-trainer-thumbnail" /> */}
                            <h3 style = {{width: "70%", fontWeight: "700"}}>{service.title}</h3>
                            {expandedCoachIndex === index ? (
                                    <img src={isDarkMode ? darkmodeChevronUp : chevronUp} alt="Chevron Up" className="chevron" />
                                ) : (
                                    <img src={isDarkMode ? darkmodeChevronDown : chevronDown} alt="Chevron Down" className="chevron" />
                                )}
                        </div>
                        {expandedCoachIndex === index && (
                            <div className="mobile-trainer-details mobile-service-details">
                                 {activeService.listItems.map((item, i) => {
                    return (
                        <h3 key = {i}>{item}</h3>
                    )
                })}
            
                <button className = "mobile-learn-btn"onClick = {() => handleLearnMore(activeService.title)}>LEARN MORE</button>
                            </div>

                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MobileServiceBanner;