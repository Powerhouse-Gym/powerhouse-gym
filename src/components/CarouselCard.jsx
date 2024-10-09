import React from "react"
import Slider from "react-slick"
import "../carousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoWhite from "../assets/logo-white.webp"
import turfpic from "../assets/turfpic.webp"
import crossfitWhite from "../assets/crossfit-white.jpg"


function CarouselCard() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    cssTransition: "3s",
    cssBackdropFilter: "blur(10px)",
    pauseOnHover: true
  };
  return (
    <div style={{ backgroundColor: " #f4f4f4", height: "65vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Slider {...settings} style={{ height: "55vh", width: "55vw", borderRadius: "10px" }}>
        <div className="carousel-img" >
          <img src={logoWhite} alt={"logo-white"} />
        </div>
        <div className="carousel-img" >
          <img src={turfpic} alt={"turf-pic"} />
        </div>
        <div className="carousel-img" >
          <img src={crossfitWhite} alt={"crossfit-white"} />
        </div>
      </Slider>
    </div>

  )
}

export default CarouselCard;