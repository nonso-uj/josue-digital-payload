import React, { Fragment } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { ACADEMY_URL, MARKETING_URL, SALES_URL } from '@/utilities/routes'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ServicesBlock: React.FC<any> = () => {
  return (
    <Fragment>
      <section
        className="page-banner-area bgs-cover py-135 rpy-100"
        style={{ backgroundImage: "url('/images/background/service-bg.jpg')" }}
      >
        <div className="container">
          <div className="banner-inner text-white text-center">
            <h1 className="page-title " data-aos="fade-up" data-aos-delay="200">
              Our Services
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
                <li className="breadcrumb-item active">Services</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="what-we-provide overflow-hidden py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 " data-aos="fade-up" data-aos-delay="200">
            <span className="sub-title mb-10">What We Provide</span>
            <h2>Digital Core Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 service-item-three " data-aos="fade-up" data-aos-delay="200">
              <div className="image">
                <img src="/images/services/service-page1.jpg" alt="Service" />
                <Link className="plus" href="/images/services/service-page1.jpg">
                  <i className="fal fa-plus"></i>
                </Link>
              </div>
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
                    Unlock the power of digital marketing and content marketing with our
                    comprehensive online courses.
                  </p>
                  <Link href={ACADEMY_URL} className="read-more">
                    Read More <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-item-three " data-aos="fade-up" data-aos-delay="400">
              <div className="image">
                <img src="/images/services/service-page2.jpg" alt="Service" />
                <Link className="plus" href="/images/services/service-page2.jpg">
                  <i className="fal fa-plus"></i>
                </Link>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">02</span>
                  <div className="icon">
                    <i className="flaticon-layers"></i>
                  </div>
                  <h4>
                    <Link href={MARKETING_URL}>DIGITAL MARKETING SERVICES</Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    We specialize in a range of digital marketing services to help you reach your
                    target audience and achieve your business goals.
                  </p>
                  <Link href={MARKETING_URL} className="read-more">
                    Read More <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-item-three " data-aos="fade-up" data-aos-delay="600">
              <div className="image">
                <img src="/images/services/service-page3.jpg" alt="Service" />
                <Link className="plus" href={'/images/services/service-page3.jpg'}>
                  <i className="fal fa-plus"></i>
                </Link>
              </div>
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
          </div>
        </div>
        <div className="about-bg-shape">
          <img src="/images/background/what-we-provide.png" alt="Shape" />
        </div>
      </section>
    </Fragment>
  )
}
