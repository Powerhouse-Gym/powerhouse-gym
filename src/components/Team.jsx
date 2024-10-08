import React from 'react';
import TrainingCoaches from './TrainingCoaches';
import CrossfitCoaches from './CrossfitCoaches';


function Team() {
    return (
        <div className='team-container'>
            <TrainingCoaches />
            <CrossfitCoaches />
        </div>
    );
}

export default Team;