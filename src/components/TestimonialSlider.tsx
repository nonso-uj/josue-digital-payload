"use client";

// components/TestimonialSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import './assets/TestimonialSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const TestimonialSlider: React.FC = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      image: "/images/people/woman1.jpg",
      title: "Excellent Works",
      text: "Loved the work Josue Digital did with us last December...",
      name: "Adebayor Jessica",
      role: "Head of HR"
    },
    {
      id: 2,
      image: "/images/people/man2.jpg",
      title: "Exceptional Partnership",
      text: "Josue Digital did an excellent work on our company...",
      name: "Nurudeen Ali",
      role: "Founder"
    },
    {
      id: 3,
      image: "/images/people/man1.jpg",
      title: "Record Breakers",
      text: "They sold 5000+ of our products in less than a month...",
      name: "Morgan Maxwell",
      role: "Sales Lead"
    }
  ];

  return (
    <div className="testimonial-slider" style={{marginBottom: "8px"}}>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <div className="image">
              <img src={testimonial.image} alt="Author" />
            </div>
            <div className="content">
              <div className="testi-header">
                <h4>{testimonial.title}</h4>
                <div className="ratting">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star" />
                  ))}
                </div>
              </div>
              <div className="testi-text">{testimonial.text}</div>
              <div className="testi-footer">
                <div className="icon"><i className="flaticon-quotation" /></div>
                <div className="title">
                  <h4>{testimonial.name}</h4>
                  <span className="designation">{testimonial.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;