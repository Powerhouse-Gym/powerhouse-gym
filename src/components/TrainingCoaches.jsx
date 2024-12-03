import React, { useState } from 'react';
import Aden from '../assets/training-coaches/Aden.webp'
import Bri from '../assets/training-coaches/Bri.webp'
import Stephen from "../assets/stephen.jpg"
import Bryant from "../assets/bryant-laning.jpg"


const TrainingCoaches = () => {

    const [selectedCoach, setSelectedCoach] = useState({
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
    });

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
            name: "Bryant Laning",
            image:Bryant,
            bio : "Bryant brings a wealth of athletic and leadership experience to his coaching role. A multi-sport athlete in high school, he excelled in football, wrestling, cross country, and track. During this time, he also took on the immense responsibility of joining the Army National Guard, where he served with distinction, deploying to Iraq, Afghanistan, and Kuwait. As a remedial PT instructor for his unit, he developed a passion for helping others achieve their physical and mental best. He continues his dedication to sports and youth development. He has coached six successful seasons of flag football and is currently shaping young athletes as a wrestling coach for Panthers Youth Wrestling in Cabot, Arkansas.  A proud husband and father of two sons, Bryant Laning values family and community. His coaching philosophy focuses on building discipline, teamwork, and resilience both on and off the mat.",
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
        {
            name: "Stephen Swagerty",
            image: Stephen,
            bio: "Stephen Swagerty is a highly regarded baseball player and coach hailing from central Arkansas with experience playing 7 seasons of professional baseball in the USA, Australia, and the Czech Republic, Stephen brings a wealth of expertise and a global perspective to the game. As a seasoned pitcher, he takes pride in mentoring young athletes, focusing on mastering mechanics, sports specific strength training, and mental skills. For the past six years, Stephen has been dedicated to coaching youth baseball/showcase baseball, helping players grow both on and off the field. At home, Stephen shares his passion for the sport with his wife, Liv, and their 7-month-old son, Ace, creating a family that truly lives and breathes baseball."
        }
        
    ];

    const handleCoachClick = (coach) => {
        setSelectedCoach(coach);
    };


    return (
        <div className="coaches-container">
            <h1 id = "sports-coaches-h1">Sports Coaches</h1>
            <div className="trainer-layout">
                {/* Left Side: List of Trainers */}
                <div className="trainer-list">
                    {coaches.map((coach, index) => {
                        console.log(coach.name === "Bryant Laning")
                            const dynamicStyle = coach.name === "Bryant Laning" ? {objectPosition: "center top"} : {};

                       return  (

                        <div className={coach.name === selectedCoach.name ? `trainer-item selected` : `trainer-item`} key={index} onClick={() => handleCoachClick(coach)} style = {{position: "relative"}}>
                            <img src={coach.image} alt={coach.name} className="trainer-thumbnail" style = {dynamicStyle}/>
                            <h3>{coach.name}</h3>
                        </div>
                    )})}
                </div>

                {/* Right Side: Trainer Details */}
                <div className="trainer-details">
                    {selectedCoach ? (
                        <>
                            <div className="image-container">
                               <img src={selectedCoach.image} alt={selectedCoach.name} className="coach-image"  />
                            </div>

                            <h2 className="coach-name">{selectedCoach.name}</h2>
                            <p className="bio">{selectedCoach.bio}</p>
                            {selectedCoach.highSchoolCareer && (
                                <div className="career-section">
                                    <h3>High School Career</h3>
                                    <ul>
                                        {selectedCoach.highSchoolCareer.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {selectedCoach.collegeCareer && (
                                <div className="career-section">
                                    <h3>College Career</h3>
                                    {Array.isArray(selectedCoach.collegeCareer) ? (
                                        <ul>
                                            {selectedCoach.collegeCareer.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{selectedCoach.collegeCareer}</p>
                                    )}
                                </div>
                            )}
                            {selectedCoach.baseballCareer && (
                                <div className="career-section">
                                    <h3>Baseball Career</h3>
                                    <ul>
                                        {selectedCoach.baseballCareer.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {selectedCoach.gymnasticsCareer && (
                                <div className="career-section">
                                    <h3>Gymnastics Career</h3>
                                    <ul>
                                        {selectedCoach.gymnasticsCareer.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {selectedCoach.career && (
                                <div className="career-section">
                                    <h3>Career</h3>
                                    <ul>
                                        {selectedCoach.career.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {selectedCoach.favoriteQuote && (
                                <p className="quote">
                                    <strong>Favorite Quote:</strong> <em>{selectedCoach.favoriteQuote}</em>
                                </p>
                            )}
                        </>
                    ) : (
                        <p className='select-coach-txt'>Please select a trainer to see their details.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrainingCoaches;