import CoachShowcase from './CoachShowcase';
import { crossfitCoaches } from '../team-data';
import '../coach-showcase.css';

const CrossfitCoaches = () => (
    <CoachShowcase title="Crossfit/Hyrox Coaches" coaches={crossfitCoaches} />
);

export default CrossfitCoaches;
