import React from 'react';
import crossfit from "../assets/crossfit-white.jpg"
import crossfitlogo from "../assets/crossfit-white-remove-background.com.png"
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
            <div className="section-container">
                <div className='left-title'>
                    <h3>Community</h3>
                    <Diversity3Icon sx={emojiStyles} />
                </div>
                <p>Strength and support through community.</p>
            </div>
            <div className='section-container'>
                <div className='left-title'>
                    <h3>Healthier Lifestyle</h3>
                    <FavoriteIcon sx={emojiStyles} />
                </div>
                <p>Join like-minded individuals on a health journey.</p>
            </div>
            <div className='section-container'>
                <div className='left-title'>
                    <h3>Nutrition Support</h3>
                    <DinnerDiningIcon sx={emojiStyles} />
                </div>
                <p>Community-driven nutrition guidance for success.</p>
            </div>
        </div>

        <div className="middle-grid">
            <h1>Why Crossfit?</h1>
            <img src={crossfit} alt='Crossfit Logo' />
        </div>

        <div className="right-grid">
            <div className='section-container-right'>
                <div className='left-title'>
                    <ScaleIcon sx={emojiStyles} />
                    <h3>Scaleable</h3>
                </div>
                <p>Workouts adapted for every fitness level.</p>
            </div>
            <div className='section-container-right'>
                <div className='left-title'>
                    <FitnessCenterIcon sx={emojiStyles} />
                    <h3>Strength</h3>
                </div>
                <p>Discover the benefits of strength training.</p>
            </div>
            <div className='section-container-right'>
                <div className='left-title'>
                    <CategoryIcon sx={emojiStyles} />
                    <h3>Variety</h3>
                </div>
                <p>Engaging workouts that yield great results.</p>
            </div>
        </div>
    </div>
</div>

    );


}
export default WhyCrossfit;