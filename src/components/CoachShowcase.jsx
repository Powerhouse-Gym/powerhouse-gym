import { useState, useRef, useEffect } from 'react';

const defaultRenderDetails = (coach) => (
    <>
        <h3 className="coach-card-name">{coach.name}</h3>
        {coach.title && <p className="coach-card-title">{coach.title}</p>}
        {coach.background && coach.background.length > 0 && (
            <div className="coach-card-section">
                <h4 className="coach-card-section-title">About</h4>
                <ul>
                    {coach.background.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        )}
        {coach.highlights && coach.highlights.length > 0 && (
            <div className="coach-card-section">
                <h4 className="coach-card-section-title">Career Highlights</h4>
                <ul>
                    {coach.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        )}
        {coach.services && coach.services.length > 0 && (
            <div className="coach-card-section">
                <h4 className="coach-card-section-title">Training Offered</h4>
                <ul>
                    {coach.services.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        )}
        {coach.quote && (
            <p className="coach-card-quote">
                <strong>Favorite Quote</strong>
                {coach.quote}
            </p>
        )}
    </>
);

function CoachShowcase({ title, coaches, renderDetails = defaultRenderDetails, thumbnailKey = 'image' }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const stripRef = useRef(null);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        if (!stripRef.current) return;
        const activeBtn = stripRef.current.querySelector(`[data-coach-index="${activeIndex}"]`);
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }, [activeIndex]);

    const activeCoach = coaches[activeIndex];
    const activeImg = activeCoach[thumbnailKey] ?? activeCoach.image ?? activeCoach.img;

    return (
        <section className="coach-showcase">
            <h2 className="coach-showcase-title">{title}</h2>

            <div className="coach-showcase-strip" ref={stripRef}>
                {coaches.map((coach, index) => {
                    const isActive = index === activeIndex;
                    const imgSrc = coach[thumbnailKey] ?? coach.image ?? coach.img;
                    return (
                        <button
                            type="button"
                            key={coach.name}
                            data-coach-index={index}
                            className={`coach-showcase-thumb ${isActive ? 'is-active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-pressed={isActive}
                        >
                            <span className="coach-showcase-thumb-img-wrap">
                                <img src={imgSrc} alt={coach.name} style={coach.imageStyle} />
                            </span>
                            <span className="coach-showcase-thumb-name">
                                {coach.name.split(' ')[0]}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="coach-showcase-card" key={activeIndex}>
                <div className="coach-showcase-card-image">
                    <img src={activeImg} alt={activeCoach.name} style={activeCoach.imageStyle} />
                </div>
                <div className="coach-showcase-card-content">
                    {renderDetails(activeCoach)}
                </div>
            </div>
        </section>
    );
}

export default CoachShowcase;
