import { useNavigate } from 'react-router-dom';



const AdaptiveInclusive = () => {

    const navigate = useNavigate();

    const handleClick = (tag) => {
        navigate(`/crossfit#${tag}`);
    };

    return (
        <div className='adaptive-inclusive'>
            <h1>Now Offering Adaptive & Inclusive Training (AIT)</h1>

            <ul>
                <li><strong>Accessible Fitness:</strong> Our Adaptive and Inclusive Training (AIT) program makes fitness available to everyone, regardless of ability level.</li>
                <li><strong>Tailored Workouts:</strong> We provide customized workouts for individuals with physical, intellectual, or sensory disabilities.</li>
                <li><strong>Supportive Coaching:</strong> Our AIT-certified trainers offer guidance to help participants achieve their health and fitness goals safely and confidently.</li>
                <li><strong>Welcoming Environment:</strong> We foster a friendly atmosphere where adaptive exercises are thoughtfully designed to meet individual needs.</li>
                <li><strong>Building Strength and Confidence:</strong> Our program focuses on developing strength, confidence, and a sense of belonging for all participants.</li>
                <li><strong>Empowerment Through Fitness:</strong> Join us to experience an inclusive fitness journey that empowers every individual.</li>
            </ul>


            <button className='inclusive-nav' onClick={() => handleClick('inclusive')}>Meet the Trainer</button>
            <button className='inclusive-nav-mobile' onClick={() => handleClick('inclusive-mobile')}>Meet the Trainer</button>
        </div>
    );
}

export default AdaptiveInclusive;