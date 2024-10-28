import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import highfive from "../assets/traininghighfive.jpg"
import crossfit from "../assets/crossfit.jpg"
import crossfitLogo from "../assets/crossfit-white.jpg"
import logo from "../assets/logo-white.webp"
import powerhousegrafiti from "../assets/powerhouse-grafiti.png"
import swingaway from "../assets/swingaway.png"





function ServiceBanner() {

    const [activeService, setActiveService] = useState({
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
        title: "Powerhouse Sports Training",
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
            if (title === "Powerhouse Crossfit"){
                setActiveService(allServices[0])
            }
            else if (title === "Powerhouse Sports Training"){
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
        else if (title === "Powerhouse Sports Training"){
            navigate("/training")
            window.scrollTo(0, 0)
        }
        else if (title === "Personal Training"){
            navigate("/personal-training")
            window.scrollTo(0, 0)
        }
   }
    
  


    return (
        <div className="service-banner">
            <div className='service-layout'>

            <div className='column one'>
                <h2 onClick = {()=>handleServiceClick("Powerhouse Crossfit")}>CROSSFIT</h2>
                <h2 onClick = {() => handleServiceClick("Powerhouse Sports Training")}>SPORTS TRAINING</h2>
                <h2 onClick = {()=> handleServiceClick("Personal Training")}>PERSONAL TRAINING</h2>
            </div>
            <div className='column two'>
                <h1>{activeService.title}</h1>
                <div className = "service-img" style = {{backgroundImage: `url(${activeService.imgUrl})`}}></div>
                {activeService.listItems.map((item, i) => {
                    return (
                        <h3 key = {i}>{item}</h3>
                    )
                })}
                <button onClick = {() => handleLearnMore(activeService.title)}>LEARN MORE</button>
            </div>
                </div>
          
       
        </div>
    );
}

export default ServiceBanner;