import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import "../components/NewServiceBanner.css";
import newWrestle1 from "../assets/newWrestle1.jpeg";
import crossfitNiki from "../assets/crossfitNiki.jpeg";
import crossfitLogo from "../assets/crossfit-white.jpg";
import logo from "../assets/logo-white.webp";
import powerhousegrafiti from "../assets/powerhouse-grafiti.png";
import newSports1 from "../assets/newSports1.jpeg";

// Defined outside component — static data, no stale closure risk
const allServices = [
    {
        title: "Sports Training",
        logo: logo,
        imgUrl: newSports1,
        imgStyle: { objectPosition: "center -20px" },
        listItems: [
            "Comprehensive Training Services",
            "State-of-the-Art Indoor Practice Field",
            "Advanced Batting and Training Cages",
            "Versatile Training Spaces"
        ]
    },
    {
        title: "Personal Training",
        logo: powerhousegrafiti,
        imgUrl: newWrestle1,
        imgStyle: { objectPosition: "center 25%" },
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
        imgUrl: crossfitNiki,
        imgStyle: { objectPosition: "center 15%" },
        logo: crossfitLogo,
        listItems: [
            "Holistic fitness programs for healthier lifestyles.",
            "Welcoming community fostering shared goals.",
            "Focus on physical fitness, nutrition, and support.",
            "Training for strong minds and resilient bodies.",
            "Nutritional guidance for recovery and performance."
        ]
    }
];

function NewServiceBanner() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const resumeTimer = useRef(null);
    const navigate = useNavigate();

    const activeService = allServices[activeIndex];

    // Auto-cycle every 3.5s, pauses on user interaction
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % allServices.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [isPaused]);

    // Cleanup resume timer on unmount
    useEffect(() => {
        return () => clearTimeout(resumeTimer.current);
    }, []);

    const handleServiceClick = (index) => {
        setActiveIndex(index);
        setIsPaused(true);
        // Resume auto-cycle after 8s of inactivity
        clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setIsPaused(false), 8000);
    };

    const handleLearnMore = (title) => {
        if (title === "Powerhouse Crossfit") navigate("/crossfit");
        else if (title === "Sports Training") navigate("/training");
        else if (title === "Personal Training") navigate("/personal-training");
        window.scrollTo(0, 0);
    };

    return (
        <div className='banner-container'>
            <h1>Services</h1>
            <div className="service-container">
                <button
                    type="button"
                    className={activeIndex === 0 ? "active" : ""}
                    onClick={() => handleServiceClick(0)}
                >
                    SPORTS
                </button>
                <button
                    type="button"
                    className={activeIndex === 1 ? "active" : ""}
                    onClick={() => handleServiceClick(1)}
                >
                    1 : 1
                </button>
                <button
                    type="button"
                    className={activeIndex === 2 ? "active" : ""}
                    onClick={() => handleServiceClick(2)}
                >
                    CROSSFIT
                </button>
            </div>
            <div className='service-description'>
                <h2>{activeService.title}</h2>
                <ul>
                    {activeService.listItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <img
                    src={activeService.imgUrl}
                    alt={`${activeService.title} service`}
                    style={activeService.imgStyle}
                />
                <button type="button" onClick={() => handleLearnMore(activeService.title)}>
                    LEARN MORE
                </button>
            </div>
        </div>
    );
}

export default NewServiceBanner;
