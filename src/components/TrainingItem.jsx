import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import sugarSkull from '../assets/sugar-skull-2.jpg'

const TrainingItem = ({ arr }) => {

    const trainingElements = arr.map((elem, i) => {
        return (
            <Card
                className="training-item"
                key={i}
                sx={{
                    margin: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%' // Ensures cards have uniform height
                }}
            >
                <CardMedia
                    component="img"
                    image={elem.img}
                    alt={elem.title}
                    sx={{
                        height: '70%', // Adjust the height as needed
                        objectFit: 'contain', // Ensures the image covers the entire CardMedia
                        backgroundColor: 'black'
                    }}
                />
                <CardContent
                    sx={{
                        flexGrow: 1,
                        backgroundImage: ` url(${sugarSkull})`, // Add your background image here
                        backgroundSize: 'contain', // Ensures the image covers the entire CardContent
                        backgroundPosition: 'right', // Centers the background image
                        backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
                        alignSelf: 'flex-start',
                        width: '100%', // Ensures the background image covers the entire CardContent
                        height: '25%',
                        backgroundColor: 'black',
                        color: 'white'

                    }}
                >
                    <Typography variant="h5" component="div" sx={{ width: '70%' }}>
                        {elem.title}
                    </Typography>
                    <Typography variant="h6" sx={{ width: '70%' }}>
                        {elem.price}
                    </Typography>
                    <Typography variant="body2" sx={{ width: '70%' }}>
                        {elem.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <a style={{color: 'black'}} href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/events" target="_blank" rel="noopener noreferrer">
                        <Button size="small" variant='outlined' color="dark">
                            Book Now
                        </Button>
                    </a>
                </CardActions>
            </Card>
        )
    })

    return (
        <div className="training-container">
            {trainingElements}
        </div>
    );
}

export default TrainingItem;
