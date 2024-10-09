import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import sugarSkull from '../assets/sugar-skull.png'

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
                        height: '25%'

                    }}
                >
                    <Typography variant="h5" component="div">
                        {elem.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {elem.price}
                    </Typography>
                    <Typography variant="body2" >
                        {elem.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='outlined' color="dark">
                        Book Now
                    </Button>
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
