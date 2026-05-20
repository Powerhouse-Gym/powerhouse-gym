import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import "../components/NewServiceBanner.css";
import crossfitNiki from "../assets/crossfitNiki.jpeg";
import crossfitLogo from "../assets/crossfit-white.jpg";
import logo from "../assets/logo-white.webp";
import powerhousegrafiti from "../assets/powerhouse-grafiti.png";
import newSports1 from "../assets/newSports1.jpeg";
import coachAylin from "../assets/26volleyball3.jpeg";

const allServices = [
    {
        title: "Sports Training",
        shortLabel: "Sports",
        route: "/training",
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
        shortLabel: "1 on 1",
        route: "/personal-training",
        logo: powerhousegrafiti,
        imgUrl: coachAylin,
        imgStyle: { objectPosition: "center center" },
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
        title: "Powerhouse Crossfit/Hyrox",
        shortLabel: "Crossfit/Hyrox",
        route: "/crossfit",
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

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % allServices.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        return () => clearTimeout(resumeTimer.current);
    }, []);

    const handlePickerClick = (index) => {
        setActiveIndex(index);
        setIsPaused(true);
        clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setIsPaused(false), 8000);
    };

    return (
        <div className='banner-container'>
            <h1>Services</h1>
            <div className="service-container">
                {allServices.map((service, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <button
                            key={service.title}
                            type="button"
                            className={isActive ? "active" : ""}
                            onClick={() => handlePickerClick(index)}
                            aria-pressed={isActive}
                        >
                            <span className="service-picker-label">
                                {service.shortLabel}
                            </span>
                        </button>
                    );
                })}
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
                <button type="button" onClick={() => navigate(activeService.route)}>
                    LEARN MORE
                </button>
            </div>
        </div>
    );
}

export default NewServiceBanner;
