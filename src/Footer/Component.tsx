import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'
import {
  ABOUT_URL,
  ACADEMY_URL,
  BLOG_URL,
  CONTACT_URL,
  MARKETING_URL,
  SALES_URL,
  SERVICES_URL,
} from '@/utilities/routes'
import Image from 'next/image'

export async function Footer() {
  // const footerData: Footer = await getCachedGlobal('footer', 1)()

  // const navItems = footerData?.navItems || []

  return (
    <footer className="main-footer bgc-gray footer-white rel z-1 mt-80">
      {/* <nav className="flex flex-col md:flex-row gap-4">
        {navItems.map(({ link }, i) => {
          return <CMSLink className="text-white" key={i} {...link} />
        })}
      </nav> */}
      <div className="footer-cta-wrap">
        <div className="container">
          <div
            className="footer-cta-inner bgs-cover"
            style={{
              backgroundImage: "url('/images/footer/footer-cta-bg.jpg')",
            }}
          >
            <div className="section-title wow fadeInLeft delay-0-2s">
              <span className="sub-title">Need Any Consultations ?</span>
              <h2>We’re Ready to Growth Your Business</h2>
            </div>
            <Link href={CONTACT_URL} className="theme-btn style-three wow fadeInRight delay-0-2s">
              Get Free Quote <i className="fas fa-long-arrow-right"></i>
            </Link>
            <div className="hotline wow fadeInRight delay-0-2s">
              <i className="fas fa-phone"></i>
              <div className="content">
                <span>Hotline</span>
                <br />
                <a href="tel:+2349040014613">+234 0904 001 4613</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row medium-gap">
          <div className="col-xl-4 col-sm-6">
            <div className="footer-widget widget_about " data-aos="fade-up" data-aos-delay="200">
              <div className="footer-logo mb-30">
                <Link href={'/'}>
                  <h3 className="text-white my-auto">Josue Digital</h3>
                </Link>
              </div>
              <p>
                At Josue Digital, we are deeply dedicated to your success. Explore our journey, get
                acquainted with our team, and experience our unwavering dedication to ensuring your
                success.
              </p>
              <Link href={ABOUT_URL} className="read-more">
                Learn More Us <i className="fas fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 order-xl-2">
            <div
              className="footer-widget widget_newsletter "
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4 className="footer-title">Newsletter</h4>
              <p>Sed perspiciatis unde omnste natus error voluptatem accusante.</p>
              <form action="#">
                <label htmlFor="email">
                  <i className="far fa-envelope"></i>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="support@gmail.com"
                  className="text-white"
                  required
                />
                <button>Sign Up</button>
              </form>
              <h5>Follow Us</h5>
              <div className="social-style-one">
                <a href="https://web.facebook.com/josuedigital29" target='_blank'>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/josue_digital" target='_blank'>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/josuedigital__" target='_blank'>
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="row">
              <div className="col-md-6 col-6 col-small">
                <div
                  className="footer-widget widget_nav_menu "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link href={ABOUT_URL}>About Company</Link>
                    </li>
                    <li>
                      <Link href={SERVICES_URL}>Latest Services</Link>
                    </li>
                    <li>
                      <Link href={BLOG_URL}>Blog & News</Link>
                    </li>
                    <li>
                      <Link href={CONTACT_URL}>Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-6 col-small">
                <div
                  className="footer-widget widget_nav_menu "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h4 className="footer-title">Services</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link href={ACADEMY_URL}>Online Marketing Academy</Link>
                    </li>
                    <li>
                      <Link href={MARKETING_URL}>Digital Marketing Services</Link>
                    </li>
                    <li>
                      <Link href={SALES_URL}>Sales and Lead Generation Solutions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bgc-black mt-20 pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="copyright-text text-center wow fadeInLeft delay-0-2s">
                <p>© 2025 Josue Digital. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shapes">
        <Image
          className="shape one"
          src="/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
          width={495}
          height={475}
        />
        <Image
          className="shape two"
          src="/images/footer/footer-bg-line-shape.png"
          alt="Shape"
          width={533}
          height={434}
        />
        <Image
          className="shape three wow fadeInRight delay-0-8s"
          src="/images/footer/footer-right.png"
          alt="Shape"
          width={247}
          height={146}
        />
      </div>
    </footer>
  )
}
