import React from 'react';
import youthMemberships from '../assets/26summerhours.jpeg';
import youthMembership from "../assets/youth-membership.jpeg";
import afterSchool from "../assets/26afterschool.png";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const cardSx = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: "30px",
    backgroundColor: "var(--secondary-background-color)",
    color: "var(--text-color)",
    boxShadow: "var(--box-shadow)"
};

const cardContentSx = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: '95%',
    textAlign: "center"
};

const cardActionsSx = {
    maxWidth: "95%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: 'wrap',
    gap: '6px'
};

const btnSx = {
    color: "var(--text-color)",
    backgroundColor: "var(--secondary-background-color)"
};

const youthCards = [
    {
        title: "Summer Membership",
        description: "Summer hours pass options",
        img: youthMemberships,
        actions: [
            { label: "1 Day Summer", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/154756-1-day-ptc-summer-membership" },
            { label: "3 Day Summer", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" },
            { label: "5 Day Summer", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" }
        ]
    },
    {
        title: "Youth Membership",
        description: "Year-round day pass options",
        img: youthMembership,
        actions: [
            { label: "1 Day Pass", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/51512-ptc-membership-1-day" },
            { label: "3 Day Pass", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" },
            { label: "5 Day Pass", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" }
        ]
    },
    {
        title: "After School Memberships",
        description: "Ages K–13",
        img: afterSchool,
        actions: [
            { label: "$150/mo — Pickup by 5pm", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/memberships" },
            { label: "$300/mo — Pickup by 6pm", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/memberships" },
            { label: "$350/mo — Before & After School", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/memberships" }
        ]
    }
];

function Youth() {
    return (
        <div className='youth-page'>
            <div className='youth-info'>
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

            <div className='training-container youth-cards'>
                {youthCards.map((card) => (
                    <Card key={card.title} className="service-section" sx={cardSx}>
                        <CardMedia className="image-container">
                            <img src={card.img} alt={card.title} />
                        </CardMedia>
                        <CardContent sx={cardContentSx}>
                            <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
                                {card.title}
                            </Typography>
                            <Typography variant="body2" sx={{ textAlign: "center" }}>
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions className='training-service-btns' sx={cardActionsSx}>
                            {card.actions.map((action) => (
                                <a
                                    key={action.label}
                                    style={{ color: 'black', margin: '1px' }}
                                    href={action.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button size="small" variant="outlined" color="dark" sx={btnSx}>
                                        {action.label}
                                    </Button>
                                </a>
                            ))}
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Youth;
