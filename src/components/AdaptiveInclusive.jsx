import { useNavigate } from 'react-router-dom';



const AdaptiveInclusive = () => {

    const navigate = useNavigate();

    const handleClick = (tag) => {
        navigate(`/crossfit#${tag}`);
    };

    return (
        <div className='adaptive-inclusive'>
            <h1>Now Offering Adaptive & Inclusive Training (AIT)</h1>
            
            <p>Our Adaptive and Inclusive Training (AIT) program is designed to make fitness accessible to everyone, regardless of ability level. We offer tailored workouts and supportive coaching for individuals with physical, intellectual, or sensory disabilities, ensuring that every participant can safely and confidently work towards their health and fitness goals. With AIT-certified trainers, we create a welcoming environment where adaptive exercises are thoughtfully customized, building strength, confidence, and a sense of belonging. Join us to experience fitness that empowers and includes all.</p>

            <button className='inclusive-nav' onClick={() => handleClick('inclusive')}>Meet the Trainer</button>
            <button className='inclusive-nav-mobile' onClick={() => handleClick('inclusive-mobile')}>Meet the Trainer</button>
        </div>
    );
}

export default AdaptiveInclusive;