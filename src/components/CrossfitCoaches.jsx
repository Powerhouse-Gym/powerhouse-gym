import React, { useState, useContext } from "react"
import eric from '../assets/crossfit-coaches/eric.webp'
import nicole from '../assets/crossfit-coaches/nicole.webp'
import rebecca from '../assets/crossfit-coaches/rebecca.webp'
import { DarkModeContext } from "../context/DarkModeProvider"
import chevronUp from '../assets/chevron-up.svg';
import chevronDown from '../assets/chevron-down.svg';
import darkmodeChevronUp from '../assets/darkmode-chevron-up.svg';
import darkmodeChevronDown from '../assets/darkmode-chevron-down.svg';



const CrossfitCoaches = () => {


    const { isDarkMode } = useContext(DarkModeContext)
    const coaches = [
        {
            name: 'Nicole Ruiz',
            title: "CrossFit Level 2 Trainer | Burgener Strength Weightlifting Level 1 Coach | CrossFit Gymnastics Trainer",
            img: nicole,
            description1: "With extensive certifications and a strong commitment to inclusive fitness, Nicole Ruiz brings a comprehensive approach to training that meets the needs of all athletes. As a CrossFit Level 2 Trainer, Burgener Strength Weightlifting Level 1 Coach, CrossFit Gymnastics Trainer, and certified CrossFit Kids Coach, Nicole has a unique skill set that allows her to provide targeted and effective training across various fitness domains.",
            description2: " Nicole holds a certification as an Adaptive & Inclusive Trainer(AIT), awarded in March 2024, and specializes in working with athletes with both physiological and intellectual conditions.She currently coaches at Powerhouse Training Complex and Powerhouse CrossFit & Combine in Cabot, where she leads sessions in functional fitness, Olympic weightlifting, bodybuilding, and sport - specific performance.",
            services: ["Inclusive Group Classes", "Adaptive Group Classes", "One-on-One Training"],
            mission: "Nicole's mission is to empower athletes of all backgrounds and abilities, creating an inclusive environment that fosters growth, confidence, and peak performance."
        },
    {
        name: 'Eric Roland',
        img: eric,
        title: "No Title",
        description1: "In progress",
        description2: "In progress2",
        services: ["1", "2", "3"],
        mission: "Work in progress"
    },
    {
        name: 'Rebecca Ward',
        img: rebecca,
        title: "CrossFit Level 1 Coach | CrossFit Kids Coach | Competitive CrossFit Athlete | Firefighter",
        description1: "With over a decade of experience in CrossFit, both as a coach and competitive athlete, Rebecca Ward brings a wealth of knowledge, passion, and dedication to every training session. As a certified CrossFit Level 1 Coach and CrossFit Kids Coach, she is deeply committed to helping individuals of all ages and fitness levels achieve their goals. Rebecca’s background as a firefighter also enhances her focus on functional, real-world fitness that translates to improved strength, resilience, and overall well-being.",
        description2: "Rebecca’s coaching approach is structured and results-driven, catering to individuals eager to make meaningful improvements in their health and fitness. Her mission is to provide detailed, personalized coaching to inspire and support each client on their fitness journey.",
        services: ["Group Classes", "Crossfit Kids Classes", "One-on-One Training"],
        mission: "Rebecca is dedicated to empowering clients of all backgrounds, creating an environment that fosters growth, confidence, and peak performance."
    },
    ]

const coachElements = coaches.map((coach, i) => {
    return (
        <div className='coach' key={i}>
            <img src={coach.img} alt={coach.name} className='crossfit-coach-img' />
            <h3>{coach.name}</h3>
        </div>
    )
})


const [selectedCoach, setSelectedCoach] = useState({
    name: 'Nicole Ruiz',
            title: "CrossFit Level 2 Trainer | Burgener Strength Weightlifting Level 1 Coach | CrossFit Gymnastics Trainer",
            img: nicole,
            description1: "With extensive certifications and a strong commitment to inclusive fitness, Nicole Ruiz brings a comprehensive approach to training that meets the needs of all athletes. As a CrossFit Level 2 Trainer, Burgener Strength Weightlifting Level 1 Coach, CrossFit Gymnastics Trainer, and certified CrossFit Kids Coach, Nicole has a unique skill set that allows her to provide targeted and effective training across various fitness domains.",
            description2: " Nicole holds a certification as an Adaptive & Inclusive Trainer(AIT), awarded in March 2024, and specializes in working with athletes with both physiological and intellectual conditions.She currently coaches at Powerhouse Training Complex and Powerhouse CrossFit & Combine in Cabot, where she leads sessions in functional fitness, Olympic weightlifting, bodybuilding, and sport - specific performance.",
            services: ["Inclusive Group Classes", "Adaptive Group Classes", "One-on-One Training"],
            mission: "Nicole's mission is to empower athletes of all backgrounds and abilities, creating an inclusive environment that fosters growth, confidence, and peak performance."
});

const [expandedCoachIndex, setExpandedCoachIndex] = useState(null);


const toggleCoachDetails = (index) => {
    setExpandedCoachIndex(expandedCoachIndex === index ? null : index); // Toggle expanded coach
};

const handleCoachClick = (coach) => {
    setSelectedCoach(coach);
};


return (
    <>

        <div className="mobile-coaches-container">
            <h1>Crossfit Coaches</h1>

            {/* mobile */}
            <div className="mobile-trainer-list">
                {coaches.map((coach, index) => (
                    <div className="mobile-trainer-item" key={index}>
                        <div className="mobile-trainer-header" onClick={() => toggleCoachDetails(index)}>
                            <img src={coach.img} alt={coach.name} className="mobile-trainer-thumbnail" />
                            <h3>{coach.name}</h3>
                            {expandedCoachIndex === index ? (
                                <img src={isDarkMode ? darkmodeChevronUp : chevronUp} alt="Chevron Up" className="chevron" />
                            ) : (
                                <img src={isDarkMode ? darkmodeChevronDown : chevronDown} alt="Chevron Down" className="chevron" />
                            )}
                        </div>
                        {expandedCoachIndex === index && (
                            <div className="mobile-trainer-details">
                                <p>Under Construction</p>
                                <p>Future Bio</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        {/* full */}
        <div className="full-coaches-container coaches-container">
            <h1 style={{ margin: "25px" }}>Meet Our Crossfit Coaches</h1>
            <div className="trainer-layout">
                {/* Left Side: List of Trainers */}
                <div className="trainer-list">
                    {coaches.map((coach, index) => (
                        <div className={coach.name === selectedCoach.name ? `trainer-item selected` : `trainer-item`} key={index} onClick={() => handleCoachClick(coach)}>
                            <img src={coach.img} alt={coach.name} className="trainer-thumbnail" />
                            <h3>{coach.name}</h3>
                        </div>
                    ))}
                </div>

                {/* Right Side: Trainer Details */}
                <div className="trainer-details">
                    {selectedCoach ? (
                        <>
                            <div className="image-container">
                                <img src={selectedCoach.img} alt={selectedCoach.name} className="coach-image" />
                            </div>

                            <h2 className="coach-name">{selectedCoach.name}</h2>
                            <p>{selectedCoach.title}</p>
                            <p>{selectedCoach.description1}</p>
                            <p>{selectedCoach.description2}</p>
                            <h4>Training Offered</h4>
                            <ul>{selectedCoach.services.map(service => {
                                return (
                                    <li>{service}</li>
                                )
                            })}</ul>
                            <p>{selectedCoach.mission}</p>
                        </>
                    ) : (
                        <p className='select-coach-txt'>Please select a trainer to see their details.</p>
                    )}
                </div>
            </div>


        </div>
    </>
);
}

export default CrossfitCoaches;