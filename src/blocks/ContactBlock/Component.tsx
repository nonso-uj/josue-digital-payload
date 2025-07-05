import React, { Fragment } from 'react'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const ContactBlock: React.FC<any> = (props) => {
  return (
    <Fragment>
      <section
        className="page-banner-area bgs-cover py-135 rpy-100"
        style={{ backgroundImage: "url('/images/background/contact.jpg')" }}
      >
        <div className="container">
          <div className="banner-inner text-white text-center">
            <h1 className="page-title " data-aos="fade-up" data-aos-delay="200">
              Contact Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb justify-content-center mb-5 "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <li className="breadcrumb-item">
                  <Link href={"/"}>home</Link>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="contact-page-info pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div
            className="row text-center mb-35 justify-content-center "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-xl-8 col-lg-10">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">Need any Help?</span>
                <h2>Contact Information</h2>
              </div>
              <p>
                Feel free to reach out to us for inquiries, collaborations, or
                any questions you might have. Our dedicated team is eager to
                assist you in any way possible.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="contact-info-box "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <h4>Locations</h4>
                <span>No 26/27 Olusola, Iwaya, Lagos, Nigeria.</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="contact-info-box "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="fal fa-envelope-open"></i>
                </div>
                <h4>Email Us</h4>
                <a href="mailto:contact@josuedigital.com" target="_blank">
                  contact@josuedigital.com
                </a>
                <br />
                <a href="mailto:info@josuedigital.com" target="_blank">
                  info@josuedigital.com
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="contact-info-box "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="fal fa-phone-plus"></i>
                </div>
                <h4>Hotlines</h4>

                <span className="mb-2">
                  <Link href="tel:+2349040014613">
                    <img
                      src="/images/contact/call.png"
                      style={{
                        width: "2rem",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      alt=""
                    />{" "}
                    +2349040014613
                  </Link>
                </span>

                <span>
                  <a
                    href="https://wa.me/2349040014613"
                    target="_blank"
                    style={{ color: "#00b66c" }}
                  >
                    <img
                      style={{
                        width: "2rem",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      src="/images/contact/whatsapp.png"
                      alt=""
                    />{" "}
                    +2349040014613
                  </a>
                </span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="contact-info-box "
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="icon">
                  <i className="fal fa-clock"></i>
                </div>
                <h4>Working Hours</h4>
                <b>Monday _ Friday,</b>
                <span>08:00am - 06:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- <div className="contact-page-map " data-aos="fade-up" data-aos-delay="200">
          <div className="our-location">
              <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd" style="border:0; width: 100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div> --> */}

      {/* <section className="contact-page-form pb-130 rpb-100">
        <div className="container">
          <div
            className="contact-form-wrap form-style-two bgc-lighter "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row text-center mb-35 justify-content-center">
              <div className="col-xl-9 col-lg-11">
                <div
                  className="section-title mb-25 "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>Send Us A Message</h2>
                </div>
                <p>
                  Have a project in mind? Need assistance with your digital
                  marketing strategy? Fill out the form below, and one of our
                  experts will get back to you shortly. We look forward to
                  helping you achieve digital success!
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section> */}
    </Fragment>
  )
}
