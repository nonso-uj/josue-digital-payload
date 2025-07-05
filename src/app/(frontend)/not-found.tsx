import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <section className="error-page-area py-80">
        <div className="container">
          <div className="error-page-content text-center">
            <div
              className="logo w-75 mb-75 rmb-35 mx-auto "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link href={'/'}>
                {/* <!-- <img src="<?php bloginfo('template_directory');?>/assets/images/logos/logo-big.png" alt="Logo" title="Logo"> --> */}
                <h3 className="text-dark my-auto">Josue Digital</h3>
              </Link>
            </div>
            <div className="image mb-80 rmb-55 " data-aos="fade-up" data-aos-delay="400">
              <img src="/images/background/404.png" alt="Error" />
            </div>
            <div className="row justify-content-center " data-aos="fade-up" data-aos-delay="200">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title mb-20">
                  <h2>Oops, it looks like you took a wrong turn.</h2>
                </div>
                <p>
                  Don't worry, even the best explorers occasionally get lost. Let's guide you back
                  to where you intended to be. Click here to return to the main page and continue
                  your journey with us. Thank you for your understanding!
                </p>
              </div>
            </div>
            <div className="btn-social pt-15 " data-aos="fade-up" data-aos-delay="400">
              <Link href={'/'} className="theme-btn mb-30 mx-2">
                Go to Home <i className="fas fa-long-arrow-right"></i>
              </Link>
              <div className="social-style-two mb-30 mx-2">
                {/* <!-- <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                    <Link href="#"><i className="fab fa-linkedin-in"></i></Link> --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
