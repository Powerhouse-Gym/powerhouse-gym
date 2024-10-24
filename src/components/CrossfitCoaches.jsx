import React, {useState, useContext} from "react"
import eric from '../assets/crossfit-coaches/eric.webp'
import nicole from '../assets/crossfit-coaches/nicole.webp'
import rebecca from '../assets/crossfit-coaches/rebecca.webp'
import { DarkModeContext } from "../context/DarkModeProvider"
import chevronUp from '../assets/chevron-up.svg';
import chevronDown from '../assets/chevron-down.svg';
import darkmodeChevronUp from '../assets/darkmode-chevron-up.svg';
import darkmodeChevronDown from '../assets/darkmode-chevron-down.svg';



const CrossfitCoaches = () => {


    const {isDarkMode} = useContext(DarkModeContext)
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

    return (
        <div className="mobile-coaches-container">
        <h1>Crossfit Coaches</h1>
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
    );
}

export default CrossfitCoaches;