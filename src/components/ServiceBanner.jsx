import React from 'react';
import pullupgirl from "../assets/pullupgirl.png"
import ballglove from "../assets/baseballglove.jpg"
import logo from "../assets/logo-white.webp"
import highfive from "../assets/traininghighfive.jpg"
import crossfit from "../assets/crossfit.jpg"


function ServiceBanner() {
    return (
        <div className="service-banner">
            <div className='column one'>
                <img src={logo} alt="logo" />
                <h3>Uniting nutrition, fitness and community through physical activities!</h3>
                <h3>Together we are STRONGER</h3>
                <button>VISITING ATHLETE</button>
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

                <button>START YOUR FREE TRIAL!</button>
            </div>
            <div className='column three'>
                <h2>SPORTS TRAINING</h2>
                <ul>
    <li>Promote healthier lifestyles within our community for all walks of life</li>
    <li>Create a family-based atmosphere for like-minded individuals</li>
    <li>Assist in adopting positive changes through physical fitness and nutrition</li>
    <li>Provide nutritional awareness for healing, recovery, and daily demands</li>
    <li>Encourage strength in unity over individual efforts</li>
</ul>

                <img src={highfive} alt='glove' />
                <button>CONTACT FOR INFO!</button>
            </div>
        </div>
    );
}

export default ServiceBanner;