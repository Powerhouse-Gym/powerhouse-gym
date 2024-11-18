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
        title: "Powerhouse Sports Training",
        logo: logo,
        imgUrl: swingaway,
        listItems: [
            "Comprehensive Training Services",
            "State-of-the-Art Indoor Practice Field",
            "Advanced Batting and Training Cages",
            "Versatile Training Spaces"
        ]
    })

    const allServices = [
        {
        title: "Powerhouse Crossfit",
        imgUrl: crossfit,
        logo: crossfitLogo,
        listItems:  [
            "Holistic fitness programs for healthier lifestyles.",
            "Welcoming community fostering shared goals.",
            "Focus on physical fitness, nutrition, and support.",
            "Training for strong minds and resilient bodies.",
            "Nutritional guidance for recovery and performance."
        ]
    },
    { 
        title: "Powerhouse Sports Training",
        logo: logo,
        imgUrl: swingaway,
        listItems:  [
            "Comprehensive Training Services",
            "State-of-the-Art Indoor Practice Field",
            "Advanced Batting and Training Cages",
            "Versatile Training Spaces"
        ]

    }, {
        title: "Personal Training",
        logo: powerhousegrafiti,
        imgUrl: highfive,
     
        listItems: [
            "Inclusive & Adaptive Training",
            "Sports-Specific Training",
            "Individual & Team Strength Training",
            "Small Group Training",
            "Crossfit Onboarding",
            "1-on-1 Personal Training"
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
                <h1>Services</h1>
                <h2 onClick = {() => handleServiceClick("Powerhouse Sports Training")}>SPORTS TRAINING</h2>
                <h2 onClick = {()=> handleServiceClick("Personal Training")}>PERSONAL TRAINING</h2>
                <h2 onClick = {()=>handleServiceClick("Powerhouse Crossfit")}>CROSSFIT</h2>
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