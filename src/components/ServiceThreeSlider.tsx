'use client'

import React from 'react'
import Slider from 'react-slick'
import Link from 'next/link'

const ACADEMY_URL = '/academy'
const MARKETING_URL = '/marketing'
const SALES_URL = '/sales'

const ServiceThreeSlider: React.FC = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    prevArrow: <button className="slide-n-arrow prev-n-arrow" />,
    nextArrow: <button className="slide-n-arrow next-n-arrow" />,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="service-three-slider">
      <Slider {...settings}>
        <div className="service-item-three " data-aos="fade-up" data-aos-delay="200">
          <Link href={ACADEMY_URL}>
            <div className="image">
              <img src="/images/services/online.jpg" alt="Service" />
            </div>
          </Link>
          <div className="content">
            <div className="top-part">
              <span className="number">01</span>
              <div className="icon">
                <i className="flaticon-coding-1"></i>
              </div>
              <h4>
                <Link href={ACADEMY_URL}>ONLINE MARKETING ACADEMY</Link>
              </h4>
            </div>
            <div className="bottom-part">
              <p>
                Unlock the power of digital marketing and content marketing with our comprehensive
                online courses.
              </p>
              <Link href={ACADEMY_URL} className="read-more">
                Read More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="service-item-three active " data-aos="fade-up" data-aos-delay="400">
          <Link href={MARKETING_URL}>
            <div className="image">
              <img src="/images/services/media.jpg" alt="Service" />
            </div>
          </Link>
          <div className="content">
            <div className="top-part">
              <span className="number">02</span>
              <div className="icon">
                <i className="flaticon-layers"></i>
              </div>
              <h4>
                <Link href={MARKETING_URL}>DIGITAL MEDIA SERVICES</Link>
              </h4>
            </div>
            <div className="bottom-part">
              <p>
                We specialize in a range of digital marketing services to help you reach your target
                audience and achieve your business goals.
              </p>
              <Link href={MARKETING_URL} className="read-more">
                Read More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="service-item-three " data-aos="fade-up" data-aos-delay="600">
          <Link href={SALES_URL}>
            <div className="image">
              <img src="/images/services/analysis.jpg" alt="Service" />
            </div>
          </Link>
          <div className="content">
            <div className="top-part">
              <span className="number">03</span>
              <div className="icon">
                <i className="flaticon-cyber-security-1"></i>
              </div>
              <h4>
                <Link href={SALES_URL}>SALES AND LEAD GENERATION SOLUTIONS</Link>
              </h4>
            </div>
            <div className="bottom-part">
              <p>Empower your business, unlock its potential today!</p>
              <Link href={SALES_URL} className="read-more">
                Read More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default ServiceThreeSlider
