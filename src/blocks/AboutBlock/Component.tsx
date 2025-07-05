import React, { Fragment } from 'react'

import TestimonialSlider from '@/components/TestimonialSlider'
// import Image from 'next/image'
import Link from 'next/link'
import { CONTACT_URL, MARKETING_URL, SALES_URL } from '@/utilities/routes'

export const AboutBlock: React.FC<any> = (props) => {
  return (
    <Fragment>
      <section
        className="page-banner-area bgs-cover py-135 rpy-100"
        style={{
          backgroundImage: "url('/images/background/about-banner.jpg')",
        }}
      >
        <div className="container">
          <div className="banner-inner text-white text-center">
            <h1 className="page-title " data-aos="fade-up" data-aos-delay="200">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb justify-content-center mb-5 "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <li className="breadcrumb-item">
                  <Link href={'/'}>home</Link>
                </li>
                <li className="breadcrumb-item active">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="about-area-five py-130 rpt-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                <img src="/images/about/about-front.jpg" alt="About" />
                <img src="/images/about/about-page2.jpg" alt="About" />
                <img
                  className="abut-bg-shape"
                  src="/images/about/about-five-bg.png"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-55 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-10 rmb-15">
                  <span className="sub-title mb-10">WHY WE ARE HERE</span>
                </div>
                <div className="row gap-40">
                  <p>
                    At Josue Digital, we understand that every industry is unique and requires a
                    customized approach to achieve optimal success. Our team of industry specialists
                    possesses extensive knowledge and experience across various sectors, enabling us
                    to develop targeted strategies that resonate with your specific audience.
                    Whether you are in retail, finance, healthcare, technology, or any other
                    industry, we have the expertise to create tailored solutions that will elevate
                    your brand's digital presence.
                  </p>
                  <p>
                    Our digital marketing services cover a wide spectrum of strategies designed to
                    enhance your online visibility, engage your target audience, and drive
                    conversions. From search engine optimization (SEO) and pay-per-click (PPC)
                    advertising to social media management and content marketing, we employ a
                    holistic approach that integrates various channels to maximize your online
                    reach. Our comprehensive approach ensures that your brand is consistently
                    represented across all platforms, creating a unified and impactful digital
                    presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area-six pb-100 rpb-70 rel z-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six " data-aos="fade-up" data-aos-delay="200">
                <div className="icon">
                  <i className="flaticon-agile"></i>
                </div>
                <h4>Comprehensive Services</h4>
                <p>
                  We offer a comprehensive range of services, including SEO/SEM, growth marketing,
                  content creation, social media management, and website design. Our holistic
                  approach ensures that all aspects of your digital presence are carefully crafted
                  and integrated for maximum impact
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six " data-aos="fade-up" data-aos-delay="600">
                <div className="icon">
                  <i className="flaticon-mission-1"></i>
                </div>
                <h4>Transparent Communication</h4>
                <p>
                  Transparency is key in our interactions. We maintain open lines of communication,
                  ensuring that our clients are informed at every step of the process. Transparent
                  reporting and clear insights empower our clients to make informed decisions about
                  their digital marketing initiatives.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six " data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <i className="flaticon-mission"></i>
                </div>
                <h4>Innovative Solutions</h4>
                <p>
                  Our agency stays ahead of industry trends, offering innovative solutions to keep
                  your brand at the forefront of the digital landscape. From cutting-edge techniques
                  to creative campaigns, we constantly strive to provide fresh and effective
                  marketing approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div
                className="section-title text-center mb-45 "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="sub-title mb-15">Why Choose Us</span>
                <h2>Elevate Your Brand with Digital Impact!</h2>
              </div>
            </div>
          </div>
          <div className="why-choose-tab">
            <ul
              className="nav nav-pills nav-fill mb-80 rmb-50 "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#wc-tap1">
                  <i className="flaticon-creativity"></i> <span>SEO/SEM</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#wc-tap2">
                  <i className="flaticon-test"></i> <span>Growth Marketing</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#wc-tap3">
                  <i className="flaticon-cyber-security-1"></i> <span>Content Marketing</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#wc-tap4">
                  <i className="flaticon-support"></i> <span>Social Media Management</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#wc-tap5">
                  <i className="flaticon-support"></i> <span>Website Creation and Management</span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="wc-tap1">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-image rmb-55">
                      <img src="/images/about/about-service1.jpg" alt="Why Choose" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        Harness the power of search engine optimization and marketing to ensure your
                        online presence shines.
                      </h3>
                      <p>
                        We optimize your website, making it easily discoverable by potential
                        customers. Our SEO/SEM strategies enhance your visibility, driving organic
                        traffic and increasing your online reach.
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Boost Visibility, Ignite Growth</li>
                        <li>Drive Traffic, Drive Sales</li>
                        <li>Be Found, Be Chosen</li>
                      </ul>
                      <Link href={CONTACT_URL} className="theme-btn mt-30">
                        Contact us to get started <i className="fas fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="wc-tap2">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        Experience exponential business growth with our data-driven strategies.
                      </h3>
                      <p>
                        {' '}
                        We analyze key metrics and consumer behavior, identifying opportunities for
                        expansion. Our growth marketing techniques are tailored to your business
                        objectives, ensuring sustainable growth and a competitive edge in the
                        market.
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Strategies that Scale</li>
                        <li>Unleash Potential</li>
                        <li>Beyond Limits</li>
                      </ul>
                      <Link href={CONTACT_URL} className="theme-btn mt-30">
                        Contact us to get started <i className="fas fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-image rmt-55">
                      <img src={'/images/about/about-service2.jpg'} alt="Why Choose" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="wc-tap3">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-image rmb-55">
                      <img src={'/images/about/about-service3.jpg'} alt="Why Choose" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>Engage your audience with compelling, shareable content.</h3>
                      <p>
                        Our team of talented content creators crafts impactful narratives, blog
                        posts, videos, and infographics that resonate with your target audience. By
                        delivering valuable content, we drive customer engagement, foster brand
                        loyalty, and establish your authority in the industry.
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Words That Connect, Stories That Convert</li>
                        <li>Shareable Stories, Lasting Impact</li>
                        <li>Turn Ideas into Influence</li>
                      </ul>
                      <Link href={CONTACT_URL} className="theme-btn mt-30">
                        Contact us to get started <i className="fas fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="wc-tap4">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        Cultivate a loyal community and generate valuable leads through our
                        strategic social media management services.
                      </h3>
                      <p>
                        We curate engaging content, interact with your audience, and implement
                        targeted campaigns to boost your brand presence on popular social platforms.
                        Our social media expertise helps you connect with your audience, build
                        relationships, and drive conversions.
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Community Builders, Lead Generators</li>
                        <li>Interact, Influence, Ignite</li>
                        <li>Your Brand, Our Voice</li>
                      </ul>
                      <Link href={CONTACT_URL} className="theme-btn mt-30">
                        Contact us to get started <i className="fas fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-image rmt-55">
                      <img src={'/images/about/about-service4.jpg'} alt="Why Choose" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="wc-tap5">
                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>
                        Your online presence begins with a visually stunning and user-friendly
                        website.
                      </h3>
                      <p>
                        {' '}
                        Our experienced web designers and developers create customized websites
                        optimized for performance and functionality. We not only craft visually
                        appealing designs but also ensure seamless navigation and optimal user
                        experience. Our website management services guarantee that your site remains
                        up-to-date, secure, and fully optimized, providing visitors with an engaging
                        and effortless browsing experience.
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Visual Appeal, Functional Excellence</li>
                        <li>Where Design Meets Functionality</li>
                        <li>Stay Ahead, Stay Polished</li>
                      </ul>
                      <Link href={CONTACT_URL} className="theme-btn mt-30">
                        Contact us to get started <i className="fas fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="why-choose-image rmt-55">
                      <img src={'/images/about/about-service5.jpg'} alt="Why Choose" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-area-two pb-115 rpb-85 rel z-1">
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
