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
                className="service-section"
                key={i}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: "30px",
                    backgroundColor: "var(--secondary-background-color)",
                    color: "var(--text-color)",
                    boxShadow: "var(--box-shadow)"

                }}
            >
                <CardMedia className="image-container">
                    <img src={elem.img} alt={elem.title} />
                </CardMedia>
                <CardContent
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: '95%',
                        textAlign: "center"
                    }}
                >
                    <Typography variant="h5" component="div" sx = {{textAlign: "center"}} >
                        {elem.title}
                    </Typography>
                    <Typography variant="h6" >
                        {elem.price}
                    </Typography>
                    <Typography variant="body2" sx = {{textAlign: "center"}} >
                        {elem.description}
                    </Typography>
                </CardContent>
                <CardActions sx = {{width: "95%", display: "flex", alignItems: "center" , justifyContent: "center"}}>
                    {
                        elem.url1 && !elem.urlTitle1 &&
                        < a style={{ color: 'black' }} href={elem.url1} target="_blank" rel="noopener noreferrer">
                            <Button size="small" variant='outlined' color="dark" sx = {{color: "var(--text-color)" , backgroundColor: "var(--secondary-background-color)"}}>
                                Book Now
                            </Button>
                        </a>
                    }
                    {
                        elem.url1 && elem.urlTitle1 &&
                        < a style={{ color: 'black' }} href={elem.url1} target="_blank" rel="noopener noreferrer">
                            <Button size="small" variant='outlined' color="dark" sx = {{color: "var(--text-color)" , backgroundColor: "var(--secondary-background-color)"}}>
                                {elem.urlTitle1}
                            </Button>
                        </a>
                    }
                    {
                        elem.url2 && elem.urlTitle2 &&
                        < a style={{ color: 'black' }} href={elem.url2} target="_blank" rel="noopener noreferrer" >
                            <Button size="small" variant='outlined' color="dark" sx = {{color: "var(--text-color)" , backgroundColor: "var(--secondary-background-color)"}}>
                                {elem.urlTitle2}
                            </Button>
                        </a>
                    }
                    {
                        elem.url3 && elem.urlTitle3 &&
                        < a style={{ color: 'black' }} href={elem.url3} target="_blank" rel="noopener noreferrer">
                            <Button size="small" variant='outlined' color="dark" sx = {{color: "var(--text-color)" , backgroundColor: "var(--secondary-background-color)"}}>
                                {elem.urlTitle3}
                            </Button>
                        </a>
                    }
                    {
                        elem.url4 && elem.urlTitle4 &&
                        < a style={{ color: 'black' }} href={elem.url4} target="_blank" rel="noopener noreferrer">
                            <Button size="small" variant='outlined' color="dark" sx = {{color: "var(--text-color)" , backgroundColor: "var(--secondary-background-color)"}}>
                                {elem.urlTitle4}
                            </Button>
                        </a>
                    }
                    {
                        !elem.url1 &&
                        < a style={{ color: 'black' }} href="tel:+15012471517" target="_blank" rel="noopener noreferrer">
                            <Button size="small" variant='outlined' color="dark" sx = {{color: "var(--text-color)" , backgroundColor: "var(--secondary-background-color)"}}>
                                Call for more information
                            </Button>
                        </a>
                    }
                </CardActions>
            </Card >
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
                {/* <div
                    // style={{
                    //     width: '75vw',
                    //     height: '10px',
                    //     backgroundImage: `url(${chainLink})`,
                    //     backgroundRepeat: 'repeat-x',
                    //     backgroundSize: 'auto 10px',
                    //     position: 'absolute',
                    //     top: 0,
                    //     left: '50%', // Centering the chain
                    //     transform: 'translateX(-50%)', // Centering the chain
                    //     zIndex: 0, // Send it behind other content
                    // }}
                /> */}

                {trainingElements}


                {/* Bottom Chain */}
                {/* <div
                    style={{
                        width: '75vw',
                        height: '10px',
                        backgroundImage: `url(${chainLink})`,
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: 'auto 10px',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%', // Centering the chain
                        transform: 'translateX(-50%)', // Centering the chain
                        zIndex: 0, // Send it behind other content
                    }}
                /> */}
            </div>
        </>
    );
};


export default TrainingItem;
