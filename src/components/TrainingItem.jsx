import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import chainLink from '../assets/chainlink.png'

const TrainingItem = ({ arr }) => {

    const trainingElements = arr.map((elem, i) => {
        return (
            <Card
                className="training-item"
                key={i}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <CardMedia className="image-container">
                    <img src={elem.img} alt={elem.title} />
                </CardMedia>
                <CardContent
                    sx={{
                        flexGrow: 1,
                        alignSelf: 'flex-start',
                        width: '100%',
                        backgroundColor: 'black',
                        color: 'white'
                    }}
                >
                    <Typography variant="h5" component="div" >
                        {elem.title}
                    </Typography>
                    <Typography variant="h6" >
                        {elem.price}
                    </Typography>
                    <Typography variant="body2" >
                        {elem.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <a style={{ color: 'black' }} href="https://app.upperhand.io/customers/1047-powerhouse-training-complex/events" target="_blank" rel="noopener noreferrer">
                        <Button size="small" variant='outlined' color="dark">
                            Book Now
                        </Button>
                    </a>
                </CardActions>
            </Card>
        );
    });

    return (
        <>
            <div
                className="training-container"
                style={{
                    position: 'relative',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                }}
            >
                {/* Top Chain */}
                <div
                    style={{
                        width: '100%',
                        height: '10px',
                        backgroundImage: `url(${chainLink})`,
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: 'auto 10px',
                        position: 'absolute',
                        top: 0,
                    }}
                />

                {trainingElements}

                {/* Bottom Chain */}
                <div
                    style={{
                        width: '100%',
                        height: '10px',
                        backgroundImage: `url(${chainLink})`,
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: 'auto 10px',
                        position: 'absolute',
                        bottom: 0,
                    }}
                />
            </div>
        </>
    );
};


export default TrainingItem;
