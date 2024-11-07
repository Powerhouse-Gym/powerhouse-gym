import { useNavigate } from "react-router-dom";

const AdaptiveInclusive = () => {
  const navigate = useNavigate();

  const handleClick = (tag) => {
    navigate(`/crossfit#${tag}`);
  };

  return (
    <div className="adaptive-inclusive">
      <div className="ait-header">
        <h1>Now Offering Adaptive & Inclusive Training (AIT)</h1>

        <ul className="ait-list">
          <li>
            <strong style={{ color: "red" }}>Accessible Fitness</strong>
            <p>Fitness for everyone, all abilities welcome.</p>
          </li>
          <li>
            <strong style={{ color: "red" }}>Tailored Workouts</strong>
            <p>Custom workouts for all needs.</p>
          </li>
          <li>
            <strong style={{ color: "red" }}>Supportive Coaching</strong>
            <p>Expert guidance to meet your goals.</p>
          </li>
          <li>
            <strong style={{ color: "red" }}>Welcoming Environment</strong>
            <p>Friendly and adaptive for all.</p>
          </li>
          <li>
            <strong style={{ color: "red" }}>Strength & Confidence</strong>
            <p>Build strength, confidence, and community.</p>
          </li>
          <li>
            <strong style={{ color: "red" }}>Empowerment</strong>
            <p>Fitness that includes and empowers.</p>
          </li>
        </ul>

        <button
          className="inclusive-nav"
          onClick={() => handleClick("inclusive")}
        >
          LEARN MORE
        </button>
        <button
          className="inclusive-nav-mobile"
          onClick={() => handleClick("inclusive-mobile")}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default AdaptiveInclusive;
