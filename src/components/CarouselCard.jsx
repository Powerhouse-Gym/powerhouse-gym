import React, { useMemo } from "react"
import Slider from "react-slick"
import "../carousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import newImage1 from "../assets/newImage1.jpeg"
import newImage2 from "../assets/newImage2.jpeg"
import newImage3 from "../assets/newImage3.jpeg"
import newImage5 from "../assets/newImage5.jpeg"
import newImage6 from "../assets/newImage6.jpeg"
import newImage7 from "../assets/newImage7.jpeg"
import newImage8 from "../assets/newImage8.jpeg"
import newImage9 from "../assets/newImage9.jpeg"
import newImage10 from "../assets/newImage10.jpeg"

const images = [
  newImage1, newImage2, newImage3, newImage5,
  newImage6, newImage7, newImage8, newImage9, newImage10
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function CarouselCard() {
  const shuffled = useMemo(() => shuffle(images), []);

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
    <div className="carousel-div">
      <Slider {...settings} className="carousel-slider">
        {shuffled.map((img, index) => (
          <div className="carousel-img" key={index}>
            <img src={img} alt={`carousel ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CarouselCard;
