import React from 'react';
import pullupgirl from "../assets/pullupgirl.png"
import ballglove from "../assets/baseballglove.jpg"
import logo from "../assets/logo-white.webp"


function ServiceBanner() {
    return (
        <div className="service-banner">
            <div className='column one'>
                <img src = {logo} alt = "logo" />
                <h3>Uniting nutrition, fitness and community through physical activities!</h3>
                <h3>Together we are STRONGER</h3>
                <button>Visiting Athlete</button>
            </div>
            <div className='column two'>
                <img src = {pullupgirl} alt = "pullupgirl"/>
                <h3>CROSSFIT</h3>
                <p>Join our CrossFit classes and boost your strength and endurance with high-intensity workouts that deliver big results in a short amount of time!</p>
                <h4>START YOUR FREE TRIAL!</h4>
            </div>
            <div className='column three'>
                <h3>SPORTS TRAINING</h3>
                <p>Train with a personal coach! Tailored to meet your unique fitness and athletic goals, this program offers customized workout plans, nutrition advice, and continuous support from a dedicated sports trainer.</p>
                <h4>CONTACT FOR MORE INFO!</h4>
                <img src = {ballglove} alt = 'glove' />
            </div>
        </div>
    );
}

export default ServiceBanner;