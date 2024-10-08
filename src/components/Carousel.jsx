import React from 'react';
import sugarskull from "../assets/background-1.png"
import turfpic from "../assets/turfpic.webp"


function Carousel() {
    return ( 
        <div style = {{backgroundImage: `url(${sugarskull})`, height: "500px", width: "100vw",  display: "flex", justifyContent: "center", alignItems: "center", backgroundSize: "130%", backgroundPositionY: "50%", backgroundPositionX: "50%"} }>

        <div style = {{height: "400px", width: "50vw", border: "1px solid grey", backgroundColor: "rgba(0, 0, 0, 0.5)" /* Black with 50% transparency */
, display: "flex", flexDirection: "column", gap: "25px", alignItems: "center", justifyContent: "center"} }>
            <h1 style = {{color: "white"}}>Batting Cages</h1>
            <img src = {turfpic} style = {{border: "1px solid black", height: "75%", width: "75%"}}/>
        </div>
        </div>
     );
}

export default Carousel;