import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img from "./img22.jpg";
import "./styles.scss";

const proprieteSlide = {
  duration: 3000,
  transitionDuration: 800,
  infinite: true,
  arrows: true,
};

const Carrousel = () => {
  return (
    <div className="slide-container">
      <Slide {...proprieteSlide} className="second">
        <div className="each-slide">
          <img className="imgSlide" src={img} />
        </div>

        <div className="each-slide">
          <img className="imgSlide" src={img} />
        </div>

        <div className="each-slide">
          <img className="imgSlide" src={img} />
        </div>
      </Slide>
    </div>
  );
};

export default Carrousel;
