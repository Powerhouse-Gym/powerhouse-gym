import React, {useState, useContext} from "react"
import TrainingCoaches from './TrainingCoaches';
import CrossfitCoaches from './CrossfitCoaches';
import NewsLetter from './NewsLetter';
import MobileTrainingCoaches from './MobileTrainingCoaches';
import eric from '../assets/crossfit-coaches/eric.webp'
import nicole from '../assets/crossfit-coaches/nicole.webp'
import rebecca from '../assets/crossfit-coaches/rebecca.webp'
import { DarkModeContext } from "../context/DarkModeProvider"
import chevronUp from '../assets/chevron-up.svg';
import chevronDown from '../assets/chevron-down.svg';
import darkmodeChevronUp from '../assets/darkmode-chevron-up.svg';
import darkmodeChevronDown from '../assets/darkmode-chevron-down.svg';



function Team() {
    const coaches = [
        {
            name: 'Nicole Ruiz',
            img: nicole
        },
        {
            name: 'Eric Roland',
            img: eric
        },
        {
            name: 'Rebecca Ward',
            img: rebecca
        },
    ]

    const [selectedCoach, setSelectedCoach] = useState({
        name: "Nicole Ruiz",
        img: nicole
    });

    
    const {isDarkMode} = useContext(DarkModeContext)

    const coachElements = coaches.map((coach, i) => {
        return (
            <div className='coach' key={i}>
                <img src={coach.img} alt={coach.name} className='crossfit-coach-img' />
                <h3>{coach.name}</h3>
            </div>
        )
    })

    
    const [expandedCoachIndex, setExpandedCoachIndex] = useState(null);


    const toggleCoachDetails = (index) => {
        setExpandedCoachIndex(expandedCoachIndex === index ? null : index); // Toggle expanded coach
    };



    const handleCoachClick = (coach) => {
        setSelectedCoach(coach);
    };


    return (
        <div className='team-container'>
            <NewsLetter />
            <TrainingCoaches />
            <MobileTrainingCoaches />
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
            <div className="full-coaches-container coaches-container">
                <h1 style={{ margin: "25px" }}>Crossfit Coaches</h1>
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
                                <p>Bio under construction!</p>
                            </>
                        ) : (
                            <p className='select-coach-txt'>Please select a trainer to see their details.</p>
                        )}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Team;