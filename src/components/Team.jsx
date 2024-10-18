import React from 'react';
import TrainingCoaches from './TrainingCoaches';
import CrossfitCoaches from './CrossfitCoaches';
import NewsLetter from './NewsLetter';
import MobileTrainingCoaches from './MobileTrainingCoaches';


function Team() {
    return (
        <div className='team-container'>
            <NewsLetter />
            <TrainingCoaches />
            <MobileTrainingCoaches />
            <CrossfitCoaches />
        </div>
    );
}

export default Team;