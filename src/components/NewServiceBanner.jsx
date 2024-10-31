import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import "../components/NewServiceBanner.css"
import highfive from "../assets/traininghighfive.jpg"
import crossfit from "../assets/crossfit.jpg"
import crossfitLogo from "../assets/crossfit-white.jpg"
import logo from "../assets/logo-white.webp"
import powerhousegrafiti from "../assets/powerhouse-grafiti.png"
import swingaway from "../assets/swingaway.png"

function NewServiceBanner() {

    const [activeService, setActiveService] = useState({
        title: "Sports Training",
        logo: logo,
        imgUrl: swingaway,
        listItems: [ "Variety of services for team and individual sports goals",
            "Indoor practice field for soccer, volleyball, and more",
            "Enclosed cages with or without machines",
            "Customizable cages for hitting, pitching, throwing, and catching drills"]
    })

    const allServices = [
        {
        title: "Powerhouse Crossfit",
        imgUrl: crossfit,
        logo: crossfitLogo,
        listItems: [
            "Promoting healthier lifestyles for all.",
            "Family-based atmosphere with like-minded people.",
            "Physical fitness, nutrition, and positive interactions.",
            "Fitness for strong minds and bodies.",
            "Nutritional awareness for healing and recovery."
          ]
    },
    { 
        title: "Sports Training",
        logo: logo,
        imgUrl: swingaway,
        listItems: [ "Variety of services for team and individual sports goals",
            "Indoor practice field for soccer, volleyball, and more",
            "Enclosed cages with or without machines",
            "Customizable cages for hitting, pitching, throwing, and catching drills"]

    }, {
        title: "Personal Training",
        logo: powerhousegrafiti,
        imgUrl: highfive,
        listItems: 
        [
            "Coaches ready to help, whether for sports or fitness.",
            "Years of experience and multiple certifications.",
            "CF-L2 Programmer.",
            "Three CF-L1 Trainers.",
            "USAW & Powerlifting Coach.",
            "Burgener Strength Weightlifting L1 Coach."
        ]
        
    }
    ]

    const handleServiceClick = (title) => {
        console.log(title)
            if (title === "Powerhouse Crossfit"){
                setActiveService(allServices[0])
            }
            else if (title === "Sports Training"){
                setActiveService(allServices[1])
            }
            else if (title === "Personal Training"){
                setActiveService(allServices[2])
            }
    }

   const navigate = useNavigate()



   const handleLearnMore = (title) => {
        if (title === "Powerhouse Crossfit"){
            navigate("/crossfit")
            window.scrollTo(0, 0)
        }
        else if (title === "Sports Training"){
            navigate("/training")
            window.scrollTo(0, 0)
        }
        else if (title === "Personal Training"){
            navigate("/personal-training")
            window.scrollTo(0, 0)
        }
   }
    
  

    

    return ( 
        <div className='banner-container'>
            <h1>Services</h1>
            <div className = "service-container">
                <button onClick = {() => handleServiceClick("Sports Training")}>SPORTS</button>
                <button onClick = {() => handleServiceClick("Personal Training")}>1 : 1</button>
                <button onClick = {() => handleServiceClick("Powerhouse Crossfit")}>CROSSFIT</button>
            </div>
            <div className='service-description'>
                <h2>{activeService.title}</h2>
                <ul>
                    {activeService.listItems.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul>
                <img src={activeService.imgUrl} alt="img url" />
                <button onClick = {() => handleLearnMore(activeService.title)}>LEARN MORE</button>
            </div>
        </div>
     );
}

export default NewServiceBanner;