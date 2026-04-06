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
import crossfitkids from "../assets/crossfitkids.jpeg"
import crossfitsquat from "../assets/crossfitsquat.jpeg"
import grouppic from "../assets/grouppic.jpg"
import kidsbench from "../assets/kidsbench.jpeg"
import kbpic from "../assets/kbpic.jpeg"
import kidspushup from "../assets/kidshspushup.jpeg"
import momstrength from "../assets/26momstrength.jpeg"
import newImage2 from "../assets/newImage2.jpeg"
import newImage9 from "../assets/newImage9.jpeg"
import newImage10 from "../assets/newImage10.jpeg"

function CarouselCardCrossfit() {
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
          <img src={grouppic} alt={"crossfit picture2"} />
        </div>
        {/* <div className="carousel-img" >
          <img src={crossfit2} alt={"crossfit"} />
        </div> */}
        {/* <div className="carousel-img" >
          <img src={crossfit4} alt={"crossfit picture1"} />
        </div> */}
        {/* <div className="carousel-img" >
          <img src={crossfit5} alt={"crossfit picture2"} />
        </div> */}
        <div className="carousel-img" >
          <img src={crossfitkids} alt={"crossfit picture2"} />
        </div>
        <div className="carousel-img" >
          <img src={kidsbench} alt={"crossfit picture2"} />
        </div>
        <div className="carousel-img" >
          <img src={kbpic} alt={"crossfit picture2"} />
        </div>
        <div className="carousel-img" >
          <img src={crossfitsquat} alt={"crossfit picture2"} />
        </div>
        <div className="carousel-img" >
          <img src={kidspushup} alt={"crossfit picture2"} />
        </div>
        <div className="carousel-img" >
          <img src={momstrength} alt={"mom strength training"} />
        </div>
        <div className="carousel-img" >
          <img src={newImage2} alt={"crossfit picture"} />
        </div>
        <div className="carousel-img" >
          <img src={newImage9} alt={"crossfit picture"} />
        </div>
        <div className="carousel-img" >
          <img src={newImage10} alt={"crossfit picture"} />
        </div>
      </Slider>
    </div>

  )
}

export default CarouselCardCrossfit;