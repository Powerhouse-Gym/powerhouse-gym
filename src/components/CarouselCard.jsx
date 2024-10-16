import React from "react"
import Slider from "react-slick"
import "../carousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import crossfit2 from "../assets/crossfit/crossfit2.jpg"
import crossfit3 from "../assets/crossfit/crossfit3.jpg"
import crossfit4 from "../assets/crossfit/crossfit4.jpg"
import crossfit5 from "../assets/crossfit/crossfit5.jpg"
import pullupgirl from "../assets/pullupgirl.png"

function CarouselCard() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    cssTransition: "3s",
    pauseOnHover: true,
    fade: true
  };
  return (
    <div className = "carousel-div" >
      <Slider {...settings}className = "carousel-slider" >
        <div className="carousel-img" >
          <img src={crossfit2} alt={"crossfit"} />
        </div>
        <div className="carousel-img" >
          <img src={crossfit3} alt={"crossfit pic"} />
        </div>
        <div className="carousel-img" >
          <img src={crossfit4} alt={"crossfit picture1"} />
        </div>
        <div className="carousel-img" >
          <img src={crossfit5} alt={"crossfit picture2"} />
        </div>
        <div className="carousel-img" >
          <img className = "pullupgirl"src={pullupgirl} alt={"crossfit picture3"} />
        </div>
      </Slider>
    </div>

  )
}

export default CarouselCard;