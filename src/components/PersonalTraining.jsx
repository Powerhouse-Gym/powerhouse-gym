import adaptiveImg from "../assets/26NikiAdaptive.jpeg";
import deadlift from "../assets/deadlift.jpg";
import teampic from "../assets/teampic.jpg";
import grouppic from "../assets/groupic2.jpg";
import oneOnone from "../assets/101.jpg";
import ptPic from "../assets/pt-pic.jpg";
import rowerpic from "../assets/turfpic.webp";
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

const ptCards = [
  {
    tag: "Now Offering",
    title: "Inclusive & Adaptive Training",
    description: "Specialized training designed to be adaptive and inclusive for all abilities.",
    img: adaptiveImg,
    actions: [
      { label: "Book Now", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140947-adaptive-and-inclusive-personal-training" }
    ]
  },
  {
    title: "Sports-Specific Strength & Conditioning",
    description: "Customized training focused on building sport-specific strength and agility.",
    img: deadlift,
    actions: [
      { label: "Book Now", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/112727-sports-specific-team-strength-and-conditioning" }
    ]
  },
  {
    title: "Team Strength & Conditioning",
    description: "Strength and conditioning sessions for teams (up to 12 athletes).",
    price: "$180 per session",
    img: teampic,
    actions: [
      { label: "Baseball", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/89114-baseball-team-training" },
      { label: "Softball", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/89115-softball-team-training" },
      { label: "Volleyball", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/87548-volleyball-team-training" },
      { label: "Soccer", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/112727-sports-specific-team-strength-and-conditioning" }
    ]
  },
  {
    title: "Small Group Training",
    description: "Train with friends in a focused small-group setting.",
    img: grouppic,
    actions: [
      { label: "2-on-1 — $90/hr", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140951-strength-and-conditioning-2-on-1" },
      { label: "4-on-1 — $150/hr", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/140954-strength-and-conditioning-4-on-1" }
    ]
  },
  {
    title: "CrossFit Onboarding",
    description: "Four-week program with two sessions per week and one CrossFit class each week.",
    price: "$250",
    img: oneOnone,
    actions: [
      { label: "Book Now", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/credit_passes" }
    ]
  },
  {
    title: "1-on-1 Personal Training",
    description: "Personalized one-on-one training sessions.",
    price: "$70 per hour",
    img: ptPic,
    actions: [
      { label: "Book Now", url: "https://app.upperhand.io/customers/1047-powerhouse-training-complex/events/46891-personal-training" }
    ]
  }
];

const PersonalTraining = () => {
  return (
    <>
      <div
        className="pt-wrapper"
        style={{ backgroundImage: `url(${rowerpic})` }}
      >
        <div className="intro-section">
          <h1>Powerhouse PERSONAL Training</h1>
          <p>
            Transform your fitness with tailored programs led by certified
            trainers. Whether you are new to fitness or training for a specific
            goal, we have the right fit for you.
          </p>
        </div>
      </div>
      <h1
        className="pt-service-header"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Personal Training Services
      </h1>
      <div className="personal-training-container training-container">
        {ptCards.map((card) => (
          <Card key={card.title} className="service-section" sx={cardSx}>
            <CardMedia className="image-container">
              <img src={card.img} alt={card.title} />
            </CardMedia>
            <CardContent sx={cardContentSx}>
              {card.tag && <span className="pt-card-tag">{card.tag}</span>}
              <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
                {card.title}
              </Typography>
              {card.price && (
                <Typography variant="h6">{card.price}</Typography>
              )}
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
    </>
  );
};

export default PersonalTraining;
