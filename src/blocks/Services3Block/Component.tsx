import React, { Fragment } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import SideBar from '@/components/SideBar'
import { ACADEMY_URL, SALES_URL, SERVICES_URL } from '@/utilities/routes'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Services3Block: React.FC<any> = () => {
  return (
    <Fragment>
      <section
        className="page-banner-area bgs-cover py-135 rpy-100"
        style={{ backgroundImage: "url('/images/services/digital.jpg')" }}
      >
        <div className="container">
          <div className="banner-inner text-white text-center">
            <h1 className="page-title " data-aos="fade-up" data-aos-delay="200">
              Digital Marketing Services
            </h1>
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb justify-content-center mb-5 "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <li className="breadcrumb-item">
                  <Link href={SERVICES_URL}>services</Link>
                </li>
                <li className="breadcrumb-item active">Digital Marketing Services</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Welcome to Josue Digital, Your Digital Marketing Hub!</h2>
                </div>
                <p>
                  At Josue Digital, we understand the power of online presence and the impact it can
                  have on your business. That&apos;s why we specialize in a range of digital marketing
                  services to help you reach your target audience and achieve your business goals.
                </p>
                <p>
                  Our team of experts is well-versed in the latest trends and strategies to drive
                  organic traffic and increase your brand visibility. With our in-depth knowledge of
                  SEO/SEM, we can optimize your website to rank higher on search engine results
                  pages, ensuring that your business is easily discoverable by potential customers.
                </p>

                <p>
                  Growth marketing is another area where we excel. We go beyond traditional
                  marketing techniques to implement data-driven strategies that fuel your business
                  growth. By analyzing key metrics and consumer behavior, we identify opportunities
                  for expansion and develop tailored marketing campaigns that deliver measurable
                  results.
                </p>

                <p>
                  Content marketing is at the heart of what we do. Our team of talented content
                  creators crafts engaging, informative, and shareable content that resonates with
                  your target audience. From blog posts and articles to videos and infographics, we
                  ensure that your brand&apos;s message is effectively communicated and drives customer
                  engagement.
                </p>

                <p>
                  Digital marketing encompasses a wide range of channels, and we&apos;ve got you covered.
                  Our comprehensive digital marketing services cover everything from email marketing
                  and online advertising to affiliate marketing and influencer partnerships. We
                  leverage the power of digital platforms to maximize your brand&apos;s reach and create
                  meaningful connections with your audience.
                </p>

                <p>
                  Social media management is crucial in today&apos;s digital landscape, and we take pride
                  in our expertise in this area. We understand the power of social media platforms
                  to engage and interact with your customers. Our social media management strategies
                  are tailored to your business objectives, helping you build a loyal community and
                  generate valuable leads.
                </p>

                <p>
                  Lastly, we offer website creation and management services to ensure that your
                  online presence is polished and user-friendly. Our team of web designers and
                  developers creates visually stunning websites that are optimized for performance
                  and functionality. We also provide ongoing website management, ensuring that your
                  site remains up-to-date, secure, and fully optimized.
                </p>

                <p>
                  At Josue Digital, we are passionate about helping businesses succeed in the
                  digital realm. With our skills in SEO/SEM, growth marketing, content marketing,
                  digital marketing, social media management, and website creation and management,
                  we are your trusted partner for all your digital marketing needs. Contact us today
                  to elevate your online presence and drive your business forward.
                </p>
              </div>
            </div>

            <SideBar />
          </div>
        </div>
      </section>

      <div className="next-prev-service pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img src="/images/background/academy-banner.jpg" alt="Service" />
              </div>
              <div className="content">
                <h4>
                  <Link href={ACADEMY_URL}>Online Marketing Academy</Link>
                </h4>
                <Link href={ACADEMY_URL} className="read-more">
                  Read More <i className="fal fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
            <Link className="show-all" href="<?php echo site_url('/services') ?>"></Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link href={SALES_URL}>Sales and Lead Generation Solutions</Link>
                </h4>
                <Link href={SALES_URL} className="read-more">
                  Read More <i className="fal fa-angle-double-right"></i>
                </Link>
              </div>
              <div className="image">
                <img src="/images/services/service-sales.jpg" alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
