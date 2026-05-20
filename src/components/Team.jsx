import CoachShowcase from './CoachShowcase';
import { sportsCoaches, crossfitCoaches } from '../team-data';
import '../coach-showcase.css';


function Team() {
    return (
        <div className='team-container'>
            <div className="team-background">
                <h1>United in Strength, Built by Community</h1>
            </div>
            <h1 className="schedule-title">Meet Our Team</h1>
            <CoachShowcase title="Sports Coaches" coaches={sportsCoaches} />
            <CoachShowcase title="Crossfit/Hyrox Coaches" coaches={crossfitCoaches} />
        </div>
    );
}

export default Team;
