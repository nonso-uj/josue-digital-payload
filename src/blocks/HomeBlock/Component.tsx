import React, { Fragment } from 'react'
import TestimonialSlider from '@/components/TestimonialSlider'
import ServiceThreeSlider from '@/components/ServiceThreeSlider'
import Image from 'next/image'
import Link from 'next/link'
import { ABOUT_URL } from '@/utilities/routes'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HomeBlock: React.FC<any> = () => {
  return (
    <Fragment>
      <section className="feature-area-two rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="feature-item style-two mt-25 "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="flaticon-trust"></i>
                </div>
                <h4>Creative Innovators</h4>
                <p>Unique ideas for engaging content and campaigns.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-two wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-technical-support"></i>
                </div>
                <h4>Data-Driven Tactics</h4>
                <p>Strategies based on real-time data and consumer insights.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="feature-item style-two mt-45 "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="flaticon-social-media"></i>
                </div>
                <h4>Conversion Focus</h4>
                <p>Emphasis on turning visitors into customers.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-two mt-25 wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-brainstorming"></i>
                </div>
                <h4>Proven Success</h4>
                <p>Track record of satisfied clients and successful campaigns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area-three pt-25 rpt-0 pb-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-three-image rel z-1 mb-30 rmb-65 wow fadeInRight delay-0-2s">
                <Image
                  src="/images/about/about-front1.jpg"
                  width={595}
                  height={393.6}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">About Josue Digital</span>
                  <h2>
                    Elevate Your Brand, Boost Your Business: Where Ideas Meet Impact in the Digital
                    Realm
                  </h2>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-trophy"></i>
                      </div>
                      <h4>
                        <Link href={ABOUT_URL}>Targeted and Data-Driven Strategies:</Link>
                      </h4>
                      <p>
                        Empower your brand with precision. Stay ahead, make informed decisions, and
                        optimize your ROI with us.
                      </p>
                      <Link href={ABOUT_URL} className="read-more">
                        Read More <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-pie-chart"></i>
                      </div>
                      <h4>
                        <Link href={ABOUT_URL}>Comprehensive Online Presence:</Link>
                      </h4>
                      <p>
                        Engage your audience, boost visibility, and enhance your reputation – all
                        under one roof.
                      </p>
                      <Link href={ABOUT_URL} className="read-more">
                        Read More <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bg-shape">
          <Image
            src="/images/background/about-bg-shape.png"
            alt="About"
            width={720}
            height={1099.7}
          />
        </div>
      </section>

      <section className="what-we-provide rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 " data-aos="fade-up" data-aos-delay="200">
            <span className="sub-title mb-10">What We Provide</span>
            <h2>Digital Core Services</h2>
          </div>
          <div className="service-three-slider">
            <ServiceThreeSlider />
          </div>
        </div>
      </section>

      <section className="testimonials-area-two py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-30">
            <div className="col-lg-8">
              <div className="section-title mb-25 wow fadeInRight delay-0-2s">
                <span className="sub-title mb-15">Clients Feedback</span>
                <h2>What Our Clients Say About Us</h2>
              </div>
            </div>
          </div>

          <div>
            <TestimonialSlider />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
