import { useState, useContext } from "react";
import Aden from '../assets/training-coaches/Aden.webp';
import Bri from '../assets/training-coaches/Bri.webp';
import Brooke from '../assets/training-coaches/Brooke.webp';
import Holly from '../assets/training-coaches/Holly.webp';
import Tyler from '../assets/training-coaches/Tyler.webp';
import chevronUp from '../assets/chevron-up.svg';
import chevronDown from '../assets/chevron-down.svg';
import darkmodeChevronUp from '../assets/darkmode-chevron-up.svg';
import darkmodeChevronDown from '../assets/darkmode-chevron-down.svg';
import { DarkModeContext } from "../context/DarkModeProvider";

const MobileTrainingCoaches = () => {

    const {isDarkMode} = useContext(DarkModeContext)

    const [expandedCoachIndex, setExpandedCoachIndex] = useState(null);

    const coaches = [
        {
            name: "Bri Guiste",
            image: Bri,
            bio: "My name is Bri, and I have been playing softball since I was 4 years old. I had a successful career throughout high school and college.  I took a break from softball to get married and start a family, but felt like I was missing a part of me when I stepped away from the game.  I have always had a passion to help the younger generations learn to play this sport, and I am excited to pass on my knowledge.",
            highSchoolCareer: [
                "2010 Idaho 5A State Champion",
                "3 time First Team All-Conference",
                "3 time team Defensive player of the year",
                "4 years on Varsity as the leadoff hitter and starting 2nd baseman"
            ],
            collegeCareer: [
                "DI scholarship to Bradley University in Peoria, IL",
                "2014 Missouri Valley Conference (MVC) Champion",
                "2014 MVC All-Tournament team",
                "Finished career as one of three players to rank in Bradley’s career top 10 in hits, runs and stolen bases",
                "2 years as leadoff hitter and led team in hits as a junior and senior"
            ],
            favoriteQuote: "Hard work beats talent when talent doesn't work hard. — Tim Notke"
        },
        {
            name: "Aden Velasquez",
            image: Aden,
            bio: 'Aden loves baseball, and has committed himself to teaching and passing all his baseball knowledge and experiences onto young ball players. “My family for the most part, other than my sister were born up in the north and both my parents were military at one point. Now my mom is a nurse. We are a Christian family, and we all love baseball and my sister plays softball. My parents have done so much for me to be able to accomplish what I have so far.”',
            highSchoolCareer: [
                "Aden attends Cabot High School in Cabot, AR.",
                "Aden has been a Varsity starter all 3 years as a pitcher and middle infielder.",
                "6A Central ALL-CONFERENCE in 2022 and 2023",
                "6A Central ALL-STATE in 2023",
                "Leading the Cabot Panthers to 6A Central Conference Victory in 2023"
            ],
            baseballCareer: [
                "Aden played 4 summers for Prospects, and 2 summers with Sticks.",
                "Aden currently pitches for the Sticks 17U White Sox National Scout Team."
            ],
            collegeCareer: "Committed to University of Central Arkansas",
            favoriteQuote: "Do not let your heart be troubled. I am the way, the truth, and the life. — Jesus Christ"
        },
    ];

    const toggleCoachDetails = (index) => {
        setExpandedCoachIndex(expandedCoachIndex === index ? null : index); // Toggle expanded coach
    };

    return (
        <div className="mobile-coaches-container">
            <h1>Sports Coaches</h1>
            <div className="mobile-trainer-list">
                {coaches.map((coach, index) => (
                    <div className="mobile-trainer-item" key={index}>
                        <div className="mobile-trainer-header" onClick={() => toggleCoachDetails(index)}>
                            <img src={coach.image} alt={coach.name} className="mobile-trainer-thumbnail" />
                            <h3>{coach.name}</h3>
                            {expandedCoachIndex === index ? (
                                <img src={isDarkMode ? darkmodeChevronUp : chevronUp} alt="Chevron Up" className="chevron" />
                            ) : (
                                <img src={isDarkMode ? darkmodeChevronDown : chevronDown} alt="Chevron Down" className="chevron" />
                            )}
                        </div>
                        {expandedCoachIndex === index && (
                            <div className="mobile-trainer-details">
                                <p>{coach.bio}</p>
                                {coach.highSchoolCareer && (
                                    <div className="career-section">
                                        <h4>High School Career</h4>
                                        <ul>
                                            {coach.highSchoolCareer.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {coach.collegeCareer && (
                                    <div className="career-section">
                                        <h4>College Career</h4>
                                        {Array.isArray(coach.collegeCareer) ? (
                                            <ul>
                                                {coach.collegeCareer.map((achievement, i) => (
                                                    <li key={i}>{achievement}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>{coach.collegeCareer}</p>
                                        )}
                                    </div>
                                )}
                                {coach.favoriteQuote && (
                                    <p className="quote">
                                        <strong>Favorite Quote:</strong> <em>{coach.favoriteQuote}</em>
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MobileTrainingCoaches;