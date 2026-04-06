import React from 'react';
import youthMemberships from '../assets/26summerhours.jpeg';
import youthMembership from "../assets/youth-membership.jpeg";
import afterSchool from "../assets/26afterschool.png";
import Button from '@mui/material/Button';

const btnStyle = {
    color: "var(--text-color)",
    backgroundColor: "var(--secondary-background-color)",
    borderColor: "rgba(0, 0, 0, 0.23)"
};

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
                    <li>Coach Erica</li>
                    <li>Coach Sav</li>
                    <li>Coach Jettie</li>
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
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '6px',
                        marginTop: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/154756-1-day-ptc-summer-membership" target="_blank" rel="noopener noreferrer" style={{ margin: '1px' }}>
                            <Button size="small" variant="outlined" color="dark" sx={btnStyle}>1 day Summer</Button>
                        </a>
                        <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" target="_blank" rel="noopener noreferrer" style={{ margin: '1px' }}>
                            <Button size="small" variant="outlined" color="dark" sx={btnStyle}>3 day Summer</Button>
                        </a>
                        <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" target="_blank" rel="noopener noreferrer" style={{ margin: '1px' }}>
                            <Button size="small" variant="outlined" color="dark" sx={btnStyle}>5 day Summer</Button>
                        </a>
                    </div>
                </div>

                {/* Youth Membership Card */}
                <div className='youth-img' style={{ textAlign: 'center', flex: '1', maxWidth: '400px' }}>
                    <img
                        src={youthMembership}
                        alt="Youth Membership"
                        style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
                    />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '6px',
                        marginTop: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/51512-ptc-membership-1-day" target="_blank" rel="noopener noreferrer" style={{ margin: '1px' }}>
                            <Button size="small" variant="outlined" color="dark" sx={btnStyle}>1 day Pass</Button>
                        </a>
                        <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" target="_blank" rel="noopener noreferrer" style={{ margin: '1px' }}>
                            <Button size="small" variant="outlined" color="dark" sx={btnStyle}>3 day Pass</Button>
                        </a>
                        <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" target="_blank" rel="noopener noreferrer" style={{ margin: '1px' }}>
                            <Button size="small" variant="outlined" color="dark" sx={btnStyle}>5 day Pass</Button>
                        </a>
                    </div>
                </div>

                {/* After School Memberships Card */}
                <div className='youth-img' style={{ textAlign: 'center', flex: '1', maxWidth: '400px', paddingBottom: '1.5rem' }}>
                    <img
                        src={afterSchool}
                        alt="After School Memberships"
                        style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
                    />
                    <h3 style={{ marginTop: '0.75rem', marginBottom: '0.25rem' }}>After School Memberships</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>Ages K–13</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        alignItems: 'center'
                    }}>
                        <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/memberships" target="_blank" rel="noopener noreferrer" style={{ margin: '1px' }}>
                            <Button size="small" variant="outlined" color="dark" sx={{ ...btnStyle, minWidth: '250px' }}>$150/mo — Pickup by 5pm</Button>
                        </a>
                        <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/memberships" target="_blank" rel="noopener noreferrer" style={{ margin: '1px' }}>
                            <Button size="small" variant="outlined" color="dark" sx={{ ...btnStyle, minWidth: '250px' }}>$300/mo — Pickup by 6pm</Button>
                        </a>
                        <a href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/memberships" target="_blank" rel="noopener noreferrer" style={{ margin: '1px' }}>
                            <Button size="small" variant="outlined" color="dark" sx={{ ...btnStyle, minWidth: '250px' }}>$350/mo — Before & After School</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Youth;
