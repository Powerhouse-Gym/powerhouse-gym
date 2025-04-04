import React from "react"
import Slider from "react-slick"
import "../carousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import battingcage from "../assets/training/batting-cage.webp"
import catchinglessons from "../assets/training/catching-lessons.webp"
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
import fieldinglessons from "../assets/training/fielding-lessons.webp"
import hittinglessons from "../assets/training/hitting-lessons.webp"
import swingaway from "../assets/swingaway.png"
import softballcatching from "../assets/training/softball-catching-lessons.webp"
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
          <img src={battingcage} alt={"batting cage"} />
        </div>
        <div className="carousel-img" >
          <img src={catchinglessons} alt={"catching lessons"} />
        </div>
        <div className="carousel-img" >
          <img src={fieldinglessons} alt={"fieldin lessons"} />
        </div>
        <div className="carousel-img" >
          <img src={hittinglessons} alt={"hittinglessons"} />
        </div>
        <div className="carousel-img" >
          <img src={swingaway} alt={"swingaway"} />
        </div>
        <div className="carousel-img" >
          <img src={softballcatching} alt={"softball catching"} />
        </div>
        {/* <div className="carousel-img" >
          <img src={kidsbench} alt={"crossfit picture2"} />
        </div> */}
        {/* <div className="carousel-img" >
          <img src={kbpic} alt={"crossfit picture2"} />
        </div> */}
        {/* <div className="carousel-img" >
          <img src={crossfitsquat} alt={"crossfit picture2"} />
        </div> */}
        {/* <div className="carousel-img" >
          <img src={kidspushup} alt={"crossfit picture2"} />
        </div> */}
        {/* <div className="carousel-img" >
          <img className = "pullupgirl"src={pullupgirl} alt={"crossfit picture3"} />
        </div> */}
      </Slider>
    </div>

  )
}

export default CarouselCard;