import React, { Fragment } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import SideBar from '@/components/SideBar'
import { MARKETING_URL, SALES_URL, SERVICES_URL } from '@/utilities/routes'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Services2Block: React.FC<any> = () => {
  return (
    <Fragment>
      <section className="page-banner-area bgs-cover py-135 rpy-100" style={{backgroundImage: "url('/images/background/academy-banner.jpg')"}}>
        <div className="container">
            <div className="banner-inner text-white text-center">
                <h1 className="page-title " data-aos="fade-up" data-aos-delay="200">Online Marketing Academy</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-5 " data-aos="fade-up" data-aos-delay="400">
                        <li className="breadcrumb-item"><Link href={SERVICES_URL}>services</Link></li>
                        <li className="breadcrumb-item active">Online Marketing Academy</li>
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
                              <h2>Welcome to our Online Marketing Academy!</h2>
                          </div>
                          <p>Unlock the power of digital marketing and content marketing with our comprehensive online courses. Whether you&apos;re a seasoned professional looking to enhance your skills or a beginner eager to dive into the exciting world of online marketing, our academy has the tools and knowledge you need to succeed.</p> 
                          <p>At our Online Marketing Academy, we believe that effective marketing is the key to driving business growth in today&apos;s digital landscape. That&apos;s why our courses are designed to equip you with the latest strategies and techniques that will propel your brand forward.</p>

                          <div className="pt-10 mx-4">
                              <h3>Why choose our academy? </h3>
                              <p>Here are just a few reasons:</p>

                              <div className="mb-30 wow fadeInLeft delay-0-2s mx-5">
                                  <ul className="list-style-one">
                                      <li>Expert instructors: Learn from industry-leading experts who have hands-on experience and a deep understanding of the digital marketing landscape. Our instructors are passionate about sharing their knowledge and helping you achieve your marketing goals.</li>

                                      <li>Comprehensive curriculum: Our courses cover a wide range of topics, including content marketing, social media marketing, search engine optimization (SEO), email marketing, and more. Whether you want to master a specific area or gain a holistic understanding of digital marketing, our curriculum has you covered.</li>

                                      <li>Interactive learning: We believe that practical application is key to mastering marketing skills. That&apos;s why our courses are designed with interactive elements, such as real-world case studies, hands-on exercises, and collaborative projects. Get ready to roll up your sleeves and put your knowledge into action.</li>

                                      <li>Flexible learning options: Our online academy offers flexibility, allowing you to learn at your own pace and on your own schedule. Access our courses from anywhere in the world, and replay lessons as many times as you need to fully grasp the concepts.</li>

                                      <li>Networking opportunities: Connect with fellow marketers, entrepreneurs, and industry professionals through our exclusive community. Share insights, collaborate on projects, and build valuable relationships that can help propel your career or business to new heights.</li>

                                      <li>Whether you&apos;re a business owner looking to expand your online presence or an aspiring marketer ready to launch your career, our Online Marketing Academy is your gateway to success.</li>

                                      <li>Don&apos;t miss out on the opportunity to learn from the best and stay ahead in the rapidly evolving world of digital marketing. Join our academy today and unlock your marketing potential!</li>
                                  </ul>
                              </div>
                          </div>

                          <div className="image my-40 " data-aos="fade-up" data-aos-delay="200">
                              <img src="/images/services/service-page12.jpg" alt="Service Details" />
                          </div>
                          <h3 className="text-center">Who should take this course?</h3>
                          <p>Looking to enter the tech industry? Whether you&apos;re a professional shifting careers, a recent graduate eager to start, or a university student passionate about tech, our Online Marketing Academy is your gateway to success.</p>
                          <p>For professionals, we offer tailored training programs led by experts. Study at your pace, fitting around your schedule, gaining essential skills in SEO, social media, and more.</p>
                          <p>If you&apos;ve just completed NYSC and want a tech career, our specialized courses provide practical knowledge, ensuring you stand out to employers. Dive into social media marketing, SEO, and content creation, gaining a competitive edge.</p>
                          <p>University students, complement your studies with our practical courses. Developed by industry professionals, our program bridges theory and real-world application, preparing you with skills demanded by employers. Network, collaborate, and grow with our vibrant community.</p>
                          <p>Join us and unlock a future filled with endless tech possibilities. Enroll in our Online Marketing Academy now!</p>
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
                        <h4><Link href={MARKETING_URL}>Digital Marketing Services</Link></h4>
                        <Link href={MARKETING_URL} className="read-more">Read More <i className="fal fa-angle-double-right"></i></Link>
                    </div>
                </div>
                <Link className="show-all" href="<?php echo site_url('/services') ?>"></Link>
                <div className="next-prev-item wow fadeInRight delay-0-2s">
                    <div className="content">
                        <h4><Link href={SALES_URL}>Sales and Lead Generation Solutions</Link></h4>
                        <Link href={SALES_URL} className="read-more">Read More <i className="fal fa-angle-double-right"></i></Link>
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
