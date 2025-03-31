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
                {/* Summer Card with Three Buttons */}
                <div className='youth-img' style={{ textAlign: 'center', flex: '1', maxWidth: '400px' }}>
                    <img 
                        src={youthMemberships} 
                        alt="Summer Youth Memberships" 
                        style={{ width: '100%', maxWidth: '400px', height: 'auto' }} 
                    />
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        gap: '0.5rem', 
                        marginTop: '1rem', 
                        justifyContent: 'center',
                        flexWrap: 'wrap' // Allows buttons to wrap if needed on smaller screens
                    }}>
                        <a 
                            href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/154756-1-day-ptc-summer-membership" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <button 
                                style={{ 
                                    padding: '0.5rem 1rem', 
                                    backgroundColor: '#ed1c26', 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    border: 'none', 
                                    borderRadius: '5px', 
                                    fontSize: '0.875rem', 
                                    cursor: 'pointer', 
                                    minWidth: '100px' 
                                }}
                            >
                                1 day Summer
                            </button>
                        </a>
                        <a 
                            href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <button 
                                style={{ 
                                    padding: '0.5rem 1rem', 
                                    backgroundColor: '#ed1c26', 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    border: 'none', 
                                    borderRadius: '5px', 
                                    fontSize: '0.875rem', 
                                    cursor: 'pointer', 
                                    minWidth: '100px' 
                                }}
                            >
                                3 day Summer
                            </button>
                        </a>
                        <a 
                            href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <button 
                                style={{ 
                                    padding: '0.5rem 1rem', 
                                    backgroundColor: '#ed1c26', 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    border: 'none', 
                                    borderRadius: '5px', 
                                    fontSize: '0.875rem', 
                                    cursor: 'pointer', 
                                    minWidth: '100px' 
                                }}
                            >
                                5 day Summer
                            </button>
                        </a>
                    </div>
                </div>

                {/* Youth Membership Card with Three Buttons */}
                <div className='youth-img' style={{ textAlign: 'center', flex: '1', maxWidth: '400px' }}>
                    <img 
                        src={youthMembership} 
                        alt="Youth Membership" 
                        style={{ width: '100%', maxWidth: '400px', height: 'auto' }} 
                    />
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        gap: '0.5rem', 
                        marginTop: '1rem', 
                        justifyContent: 'center',
                        flexWrap: 'wrap' // Allows buttons to wrap if needed on smaller screens
                    }}>
                        <a 
                            href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/51512-ptc-membership-1-day" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <button 
                                style={{ 
                                    padding: '0.5rem 1rem', 
                                    backgroundColor: '#ed1c26', 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    border: 'none', 
                                    borderRadius: '5px', 
                                    fontSize: '0.875rem', 
                                    cursor: 'pointer', 
                                    minWidth: '100px' 
                                }}
                            >
                                1 day Pass
                            </button>
                        </a>
                        <a 
                            href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <button 
                                style={{ 
                                    padding: '0.5rem 1rem', 
                                    backgroundColor: '#ed1c26', 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    border: 'none', 
                                    borderRadius: '5px', 
                                    fontSize: '0.875rem', 
                                    cursor: 'pointer', 
                                    minWidth: '100px' 
                                }}
                            >
                                3 day Pass
                            </button>
                        </a>
                        <a 
                            href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <button 
                                style={{ 
                                    padding: '0.5rem 1rem', 
                                    backgroundColor: '#ed1c26', 
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    border: 'none', 
                                    borderRadius: '5px', 
                                    fontSize: '0.875rem', 
                                    cursor: 'pointer', 
                                    minWidth: '100px' 
                                }}
                            >
                                5 day Pass
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Youth;