import React from 'react';
import TrainingCoaches from './TrainingCoaches';
import CrossfitCoaches from './CrossfitCoaches';
import NewsLetter from './NewsLetter';


function Team() {
    return (
        <div className='team-container'>
            <NewsLetter />
            <TrainingCoaches />
            <CrossfitCoaches />
        </div>
    );
}

export default Team;