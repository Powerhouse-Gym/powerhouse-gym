import React from 'react';
import pullupgirl from "../assets/pullupgirl.png"
import highfive from "../assets/traininghighfive.jpg"
import crossfit from "../assets/crossfit.jpg"
import ballglove from "../assets/baseballglove.jpg"
import logo from "../assets/logo-white.webp"
import powerhousegrafiti from "../assets/powerhouse-grafiti.png"
import swingaway from "../assets/swingaway.png"
import AccordionComponent from "./AccordionComponent"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Fade from '@mui/material/Fade';




function ServiceBanner() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const personalTrainingElements =

        <ul className = "dropdown">
            <li>Coaches ready to help, whether for sports or fitness.</li>
            <li>Years of experience and multiple certifications.</li>
            <li>CF-L2 Programmer.</li>
            <li>Three CF-L1 Trainers.</li>
            <li>USAW & Powerlifting Coach.</li>
            <li>Burgener Strength Weightlifting L1 Coach.</li>
        </ul>
    const sportsTrainingElements =

        <ul className = "dropdown">
            <li>Variety of services for team and individual sports goals</li>
            <li>Indoor practice field for soccer, volleyball, and more</li>
            <li>Enclosed cages with or without machines</li>
            <li>Customizable cages for hitting, pitching, throwing, and catching drills</li>
        </ul>

    const crossfitElements =
        <ul className='dropdown'>
            <li>Promoting healthier lifestyles for all.</li>
            <li>Family-based atmosphere with like-minded people.</li>
            <li>Physical fitness, nutrition, and positive interactions.</li>
            <li>Working together to achieve common goals and build friendships.</li>
            <li>Fitness for strong minds and bodies.</li>
            <li>Nutritional awareness for healing and recovery.</li>
            <li>Stronger together!</li>
        </ul>


    return (
        <div className="service-banner">
            <div className='column one'>
                <h1>PERSONAL TRAINING</h1>
                <img src={highfive} alt='highfive' />
                <AccordionComponent text={personalTrainingElements} />
            </div>
            <div className='column two'>
                <h1>CROSSFIT</h1>
                <img src={crossfit} alt="crossfit" />
                <AccordionComponent text={crossfitElements} />
            </div>
            <div className='column three'>
                <h1>SPORTS TRAINING</h1>
                <img src={swingaway} alt="swingaway" />
               <AccordionComponent text = {sportsTrainingElements}/>




            </div>
       
        </div>
    );
}

export default ServiceBanner;