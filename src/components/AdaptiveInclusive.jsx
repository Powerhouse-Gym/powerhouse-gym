import { useNavigate } from 'react-router-dom';



const AdaptiveInclusive = () => {

    const navigate = useNavigate();

    const handleClick = (tag) => {
        navigate(`/crossfit#${tag}`);
    };

    return (
        <div className='adaptive-inclusive'>
            <div>

            <h1>Now Offering Adaptive & Inclusive Training (AIT)</h1>

            <ul class="ait-list">
                <li><strong style={{ color: "red" }}>Accessible Fitness:</strong> Fitness for everyone, all abilities welcome.</li>
                <li><strong style={{ color: "red" }}>Tailored Workouts:</strong> Custom workouts for all needs.</li>
                <li><strong style={{ color: "red" }}>Supportive Coaching:</strong> Expert guidance to meet your goals.</li>
                <li><strong style={{ color: "red" }}>Welcoming Environment:</strong> Friendly and adaptive for all.</li>
                <li><strong style={{ color: "red" }}>Strength & Confidence:</strong> Build strength, confidence, and community.</li>
                <li><strong style={{ color: "red" }}> Empowerment:</strong> Fitness that includes and empowers.</li>
            </ul>
            </div>



            <button className='inclusive-nav' onClick={() => handleClick('inclusive')}>LEARN MORE</button>
            <button className='inclusive-nav-mobile' onClick={() => handleClick('inclusive-mobile')}>LEARN MORE</button>
        </div>
    );
}

export default AdaptiveInclusive;