import React from "react";
import Slider from "react-slick";
import '../styles/HomeSlider.css'
import icon from '../img/Western Man.png'
import icon2 from '../img/testimonial-annotation.svg'
import { useState } from "react";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth:true,
    spaceBetween: 200,
    arrows:false,
  };
  return (
    <div className="slider-container" style={{
      width: "100%",
    }}>
      <Slider {...settings}>
        <div className="testimonials-slide">
          <div className="testimonials-slide-title">
            <img src={icon} alt="icon1" className="testimonials-icon"/>
            <div className="testimonials-slide-user">
              <div className="testimonials-name">
              Jhon Doe1
            </div>
            <div className="testimonials-country">
              USA, America
            </div>
            </div>
            <img src={icon2} alt="icon2" className="testimonial-annotation" />
          </div>
          <div className="testimonial-feedback">
          “ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”
          </div>
        </div>
        <div className="testimonials-slide">
          <div className="testimonials-slide-title">
            <img src={icon} alt="icon1" className="testimonials-icon"/>
            <div className="testimonials-slide-user">
              <div className="testimonials-name">
              Jhon Doe2
            </div>
            <div className="testimonials-country">
              USA, America
            </div>
            </div>
            <img src={icon2} alt="icon2" className="testimonial-annotation" />
          </div>
          <div className="testimonial-feedback">
          “ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”
          </div>
        </div>
        <div className="testimonials-slide">
          <div className="testimonials-slide-title">
            <img src={icon} alt="icon1" className="testimonials-icon"/>
            <div className="testimonials-slide-user">
              <div className="testimonials-name">
              Jhon Doe3
            </div>
            <div className="testimonials-country">
              USA, America
            </div>
            </div>
            <img src={icon2} alt="icon2" className="testimonial-annotation" />
          </div>
          <div className="testimonial-feedback">
          “ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”
          </div>
        </div>
        <div className="testimonials-slide">
          <div className="testimonials-slide-title">
            <img src={icon} alt="icon1" className="testimonials-icon"/>
            <div className="testimonials-slide-user">
              <div className="testimonials-name">
              Jhon Doe4
            </div>
            <div className="testimonials-country">
              USA, America
            </div>
            </div>
            <img src={icon2} alt="icon2" className="testimonial-annotation" />
          </div>
          <div className="testimonial-feedback">
          “ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;