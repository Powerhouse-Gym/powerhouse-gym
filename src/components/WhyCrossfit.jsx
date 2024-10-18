import React from 'react';
import crossfit from "../assets/crossfit-white.jpg"
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { fontSize } from '@mui/system';
import SportsIcon from '@mui/icons-material/Sports';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { EmojiObjects } from '@mui/icons-material';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import ScaleIcon from '@mui/icons-material/Scale';
import CategoryIcon from '@mui/icons-material/Category';

function WhyCrossfit() {

    const emojiStyles = {
        fontSize: 70
    }
    return (
        <div className="whycrossfit-container">
            <div className='grid-container'>

            <div className='left-grid'>
            <Diversity3Icon sx={emojiStyles} />

            </div>

            <div className = "middle-grid">
            <h1>Why Crossfit?</h1>
            <img src={crossfit} alt='Crossfit Logo' />
            </div>

            <div className = "right-grid">

            </div>
            </div>
            {/* <FavoriteIcon sx={emojiStyles} />
            <DinnerDiningIcon sx={emojiStyles} />

        
                <ScaleIcon sx={emojiStyles} />
                <FitnessCenterIcon sx={emojiStyles} />
                <CategoryIcon sx={emojiStyles} /> */}



                {/* <div className="icon-title">
                    <h3>Community</h3>
                    <p>Find family and friends in fitness.</p>
                </div>
                <div className="icon-title">
                    <h3>Healthier Lifestyle</h3>
                    <p>Adopt good habits and stay close to those who encourage them.</p>
                </div>

                <div className="icon-title">
                    <h3>Nutrition Support</h3>
                    <p>Maintain healthy eating habits and connect with those who support your nutritional goals.</p>
                </div> */}

{/* 

                <div className="icon-title">
                    <h3>Scalable</h3>
                    <p>Workouts tailored to suit any fitness level.</p>
                </div>
                <div className="icon-title">
                    <h3>Strength Training</h3>
                    <p>Movements like lifting, squatting, pulling and pushing.</p>
                </div>

                <div className="icon-title">
                    <h3>Variety</h3>
                    <p>Wide range of workouts that constantly change.</p>
                </div> */}



            </div>
            );


}
            export default WhyCrossfit;