import React from 'react';
import pullupgirl from "../assets/pullupgirl.png"
import highfive from "../assets/traininghighfive.jpg"
import crossfit from "../assets/crossfit.jpg"
import ballglove from "../assets/baseballglove.jpg"
import logo from "../assets/logo-white.webp"
import powerhousegrafiti from "../assets/powerhouse-grafiti.png"
import swingaway from "../assets/swingaway.png"




function ServiceBanner() {
    return (
        <div className="service-banner">
            <div className='column one'>
                <h2>PERSONAL TRAINING</h2>
                <ul>
                    <li>Coaches ready to help, whether for sports or fitness.</li>
                    <li>Years of experience and multiple certifications.</li>
                    <li>CF-L2 Programmer.</li>
                    <li>Three CF-L1 Trainers.</li>
                    <li>USAW & Powerlifting Coach.</li>
                    <li>Burgener Strength Weightlifting L1 Coach.</li>
                </ul>
                <button className = "button-42">VISITING ATHLETE</button>
                <img src={highfive} alt='highfive' />


            </div>
            <div className='column two'>
                <img src={crossfit} alt="pullupgirl" />
                <h2>CROSSFIT</h2>
                <ul>
                    <li>Variety of services for team and individual sports goals</li>
                    <li>Indoor practice field for soccer, volleyball, and more</li>
                    <li>Enclosed cages with or without machines</li>
                    <li>Customizable cages for hitting, pitching, throwing, and catching drills</li>

                </ul>

                <button className='button-42'>START YOUR FREE TRIAL!</button>
            </div>
            <div className='column three'>
                <h2>SPORTS TRAINING</h2>


                <ul>
                    <li>Variety of services for team and individual sports goals</li>
                    <li>Indoor practice field for soccer, volleyball, and more</li>
                    <li>Enclosed cages with or without machines</li>
                    <li>Customizable cages for hitting, pitching, throwing, and catching drills</li>
                </ul>

                <button className="button button-42">CONTACT FOR INFO!</button>
                <img src={swingaway} alt="swingaway" />

            </div>
        </div>
    );
}

export default ServiceBanner;