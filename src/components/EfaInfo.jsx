import '../efa-info.css';
import logo from '../assets/logo-white.webp';

function EfaInfo() {
    return (
        <div className="efa-info-page">
            <img src={logo} alt="Powerhouse Training Complex" className="efa-logo" />
            <h1>Arkansas EFA Approved Vendor</h1>
            <p className="efa-subtitle">Powerhouse Training Complex is a proud Arkansas Education Freedom Account (EFA) Approved Vendor.</p>

            <section className="efa-section">
                <h2>What is the Arkansas EFA Program?</h2>
                <p>
                    The Arkansas Education Freedom Account (EFA) program provides families with state-funded accounts
                    that can be used toward approved educational expenses. The program empowers parents to customize their
                    child's education by directing funds to qualified vendors and services that best meet their child's needs.
                </p>
            </section>

            <section className="efa-section">
                <h2>What Can EFA Funds Be Used For?</h2>
                <ul>
                    <li>Private school tuition and fees</li>
                    <li>Tutoring services</li>
                    <li>Educational therapies</li>
                    <li>Curriculum and instructional materials</li>
                    <li>Sports and athletic training programs</li>
                    <li>Other approved educational services</li>
                </ul>
            </section>

            <section className="efa-section">
                <h2>How to Use Your EFA at Powerhouse</h2>
                <ol>
                    <li><strong>Apply for an EFA</strong> — Visit the <a href="https://efa.arkansas.gov" target="_blank" rel="noopener noreferrer">Arkansas EFA website</a> to apply for an Education Freedom Account.</li>
                    <li><strong>Get Approved</strong> — Once approved, you'll receive access to your EFA funds.</li>
                    <li><strong>Choose Powerhouse</strong> — Select Powerhouse Training Complex as your approved vendor for athletic training services.</li>
                    <li><strong>Book & Pay</strong> — Use your EFA funds to pay for eligible training programs, lessons, and memberships at our facility.</li>
                </ol>
            </section>

            <section className="efa-section">
                <h2>Eligible Services at Powerhouse</h2>
                <p>As an approved vendor, many of our programs qualify for EFA funding, including:</p>
                <ul>
                    <li>Private sports lessons (baseball, softball, soccer, volleyball, football, wrestling)</li>
                    <li>Speed & agility training</li>
                    <li>Gymnastics, tumbling, and cheer</li>
                    <li>Strength & conditioning</li>
                </ul>
            </section>

            <section className="efa-section">
                <h2>Questions?</h2>
                <p>
                    Contact us at <a href="tel:+15012471517">(501) 247-1517</a> for more information about using your
                    EFA funds at Powerhouse Training Complex. We're happy to help you get started!
                </p>
            </section>
        </div>
    );
}

export default EfaInfo;
