'use client'

import React, { useEffect, useRef } from 'react'

import type { Page } from '@/payload-types'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'

function SampleNextArrow(props: any) {
  const { style, onClick } = props
  return (
    <button className="next-arrow slick-arrow" style={{ ...style }} onClick={onClick}>
      <i className="fal fa-angle-right"></i>
    </button>
  )
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props
  return (
    <button className="prev-arrow slick-arrow" style={{ ...style }} onClick={onClick}>
      <i className="fal fa-angle-left"></i>
    </button>
  )
}

export const NewHeroImpact: React.FC<Page['hero']> = () => {
  const sliderRef = useRef<any>(null)

  const settings = {
    infinite: true,
    arrows: true,
    dots: false,
    fade: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  }

  // Re-initialize when route changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0)
    }
  }, [])

  return (
    <section
      className="slider-area bgs-cover pt-185 pb-160"
      style={{ backgroundImage: "url('/images/slider/slider-bg2.jpg')" }}
    >
      <div className="container">
        <Slider className="main-slider-active" ref={sliderRef} {...settings}>
          <div className="slider-item">
            <div className="slide-content text-white">
              <span className="sub-title">Your Success, Our Mission</span>
              {/* <!-- <span className="h2">We’re Digital</span> --> */}
              <h1>Growth Marketing</h1>
              <Link href={'/services'} className="theme-btn">
                Let’s Get Started <i className="fas fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="slider-item">
            <div className="slide-content text-white">
              <span className="sub-title">Your Success, Our Strategy</span>
              {/* <!-- <span className="h2">We’re Digital</span> --> */}
              <h1>Website and Brand Management</h1>
              <Link href={'/services'} className="theme-btn">
                Let’s Get Started <i className="fas fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="slider-item">
            <div className="slide-content text-white">
              <span className="sub-title">Turning Clicks into Customers</span>
              {/* <!-- <span className="h2">We’re Digital</span> --> */}
              <h1>Social Media Marketing</h1>
              <Link href={'/services'} className="theme-btn">
                Let’s Get Started <i className="fas fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}
