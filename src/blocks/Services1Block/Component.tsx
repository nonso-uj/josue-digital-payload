import React, { Fragment } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import SideBar from '@/components/SideBar'

import { ACADEMY_URL, MARKETING_URL, SERVICES_URL } from '@/utilities/routes'

export const Services1Block: React.FC<any> = (props) => {
  return (
    <Fragment>
      <section
        className="page-banner-area bgs-cover py-135 rpy-100"
        style={{ backgroundImage: "url('/images/services/service-sales.jpg')" }}
      >
        <div className="container">
          <div className="banner-inner text-white text-center">
            <h1 className="page-title " data-aos="fade-up" data-aos-delay="200">
              Sales and Lead Generation Solutions
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
                <li className="breadcrumb-item active">Sales and Lead Generation Solutions</li>
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
                  <h2>Introducing Josue Digital: Your Sales & Lead Solution</h2>
                </div>
                <p>
                  Unlock the power of digital marketing and content marketing with our comprehensive
                  online courses. Whether you're a seasoned professional looking to enhance your
                  skills or a beginner eager to dive into the exciting world of online marketing,
                  our academy has the tools and knowledge you need to succeed.
                </p>
                <p>
                  At our Online Marketing Academy, we believe that effective marketing is the key to
                  driving business growth in today's digital landscape. That's why our courses are
                  designed to equip you with the latest strategies and techniques that will propel
                  your brand forward.
                </p>

                <p>
                  Unlock the full potential of your business with Josue Digital's cutting-edge Sales
                  and Lead Generation Solutions. We understand that every industry has unique
                  requirements, which is why we have crafted custom-made business solutions tailored
                  specifically for the fashion and accessories, food, logistics, and manufacturing
                  sectors.
                </p>

                <p>
                  At Josue Digital, we take pride in offering unmatched expertise and a
                  results-driven approach. What sets us apart is our commitment to delivering
                  exceptional services that guarantee your satisfaction. We firmly believe in the
                  value of trust and strive to build long-lasting partnerships with our clients.
                </p>

                <p>
                  One of the key aspects that make us stand out is our payment after service model.
                  We understand the challenges businesses face in allocating resources, especially
                  during the initial stages. With Josue Digital, you can experience our top-notch
                  solutions and witness their impact before making any payment. Our focus is on your
                  success, and we believe in earning your trust through our performance.
                </p>

                <p>
                  In the fashion and accessories industry, we offer comprehensive solutions to help
                  you amplify your brand's reach, boost sales, and generate leads. From digital
                  marketing strategies that capture the attention of your target audience to
                  conversion optimization techniques that drive sales, we have you covered.
                </p>

                <p>
                  For the food sector, we understand the competitive landscape and the need to stand
                  out. Our Sales and Lead Generation Solutions are designed to enhance your online
                  presence, attract hungry customers, and increase order volumes. With our strategic
                  approach, your food business will thrive in the digital world.
                </p>

                <p>
                  In the logistics and manufacturing industries, efficiency and scalability are
                  paramount. Our custom solutions enable you to streamline operations, optimize
                  supply chain management, and generate high-quality leads. By leveraging the power
                  of digital technologies, we empower your business to expand its reach and achieve
                  unparalleled growth.
                </p>

                <p>
                  Partner with Josue Digital and witness a transformation in your sales and lead
                  generation efforts. Our team of experts will work closely with you to understand
                  your unique business goals and challenges, tailoring solutions that align
                  perfectly with your vision. With our payment after service model, you can
                  experience the tangible results of our solutions firsthand.
                </p>

                <p>
                  Don't let your business be left behind in this rapidly evolving digital landscape.
                  Contact us today to embark on a journey of success with Josue Digital's Sales and
                  Lead Generation Solutions. Together, let's create a thriving future for your
                  business.
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
            <Link className="show-all" href="/services"></Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link href={MARKETING_URL}>Digital Marketing Services</Link>
                </h4>
                <Link href={MARKETING_URL} className="read-more">
                  Read More <i className="fal fa-angle-double-right"></i>
                </Link>
              </div>
              <div className="image">
                <img src="/images/services/digital.jpg" alt="Service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
