import React from 'react';
import youthMemberships from '../assets/summer-youth.jpeg';
import youthMembership from "../assets/youth-membership.jpeg";
import NewsLetter from './NewsLetter';

function Youth() {
    return (
        <div className='youth-page' style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header and Description */}
            <div className='youth-info' style={{ 
                textAlign: 'left', 
                maxWidth: '1200px', 
                marginBottom: '2rem' 
            }}>
                <h1 style={{ marginBottom: '1rem' }}>POWERHOUSE YOUTH MEMBERSHIPS</h1>
                <h3 style={{ marginBottom: '0.5rem' }}>Our Mission</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Our mission is to foster a deep connection with nature, promote physical activity, and cultivate teamwork and leadership skills in a digital-free environment. Through engaging outdoor activities and sports, we aim to inspire participants to develop a healthy lifestyle, enhance social interactions, and build resilience while disconnecting from screens and reconnecting with the world around them. Our commitment is to provide a supportive and inclusive environment where members can thrive physically, mentally, and emotionally, fostering a lifelong love for fitness.
                </p>
                <h3 style={{ marginBottom: '0.5rem' }}>Meet the Coaches</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: '0' }}>
                    <li>Coach Nicole</li>
                    <li>Coach Sarah</li>
                    <li>Coach Savvy</li>
                    <li>Coach Erica</li>
                    <li>Coach Justin</li>
                </ul>
            </div>

            {/* Cards in Flexbox Row */}
            <div className='youth-cards' style={{ 
                display: 'flex', 
                gap: '2rem', 
                justifyContent: 'center',
                width: '100%',
                maxWidth: '1200px'
            }}>
                {/* Summer Card */}
                <div className='youth-img' style={{ textAlign: 'center', flex: '1', maxWidth: '400px' }}>
                    <img 
                        src={youthMemberships} 
                        alt="Summer Youth Memberships" 
                        style={{ width: '100%', maxWidth: '400px', height: 'auto' }} 
                    />
                    <button 
                        style={{ 
                            marginTop: '1rem',
                            backgroundColor: '#ed1c26', 
                            color: 'white', 
                            fontWeight: 'bold', 
                            border: 'none', 
                            borderRadius: '5px', 
                            fontSize: '1rem', 
                            cursor: 'pointer',
                            width: "100%"
                        }}
                    >
                        Purchase Now!
                    </button>
                </div>

                {/* Youth Membership Card */}
                <div className='youth-img' style={{ textAlign: 'center', flex: '1', maxWidth: '400px' }}>
                    <img 
                        src={youthMembership} 
                        alt="Youth Membership" 
                        style={{ width: '100%', maxWidth: '400px', height: 'auto' }} 
                    />
                    <button 
                        style={{ 
                            marginTop: '1rem', 
                            padding: '0.75rem 1.5rem', 
                            backgroundColor: '#ed1c26', 
                            color: 'white', 
                            fontWeight: 'bold', 
                            border: 'none', 
                            borderRadius: '5px', 
                            fontSize: '1rem', 
                            cursor: 'pointer',
                            width: '100%',
                            maxWidth: '200px'
                        }}
                    >
                        Purchase Now!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Youth;