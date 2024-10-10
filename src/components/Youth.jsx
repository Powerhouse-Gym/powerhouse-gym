import React from 'react';
import youthMemberships from '../assets/youth-memberships.webp';

function Youth() {
    return (
        <div className='youth-page'>
            <div >
                <h1>POWERHOUSE YOUTH MEMBERSHIPS</h1>
                <h3>Our Mission</h3>
                <p>
                    Our mission is to foster a deep connection with nature, promote physical activity, and cultivate teamwork and leadership skills in a digital-free environment. Through engaging outdoor activities and sports, we aim to inspire participants to develop a healthy lifestyle, enhance social interactions, and build resilience while disconnecting from screens and reconnecting with the world around them. Our commitment is to provide a supportive and inclusive environment where members can thrive physically, mentally, and emotionally, fostering a lifelong love for fitness.
                </p>
                <h3>Meet the Coaches</h3>
                <ul>
                    <li>Coach Nicole</li>
                    <li>Coach Sarah</li>
                    <li>Coach Savvy</li>
                    <li>Coach Erica</li>
                    <li>Coach Justin</li>
                </ul>
            </div>
            <div>
                <img src={youthMemberships} alt="Youth Memberships" />
            </div>
        </div>
    );
}

export default Youth;