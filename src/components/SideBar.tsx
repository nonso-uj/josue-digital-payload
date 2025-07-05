import Link from 'next/link'
// import { ACADEMY_URL, CONTACT_URL, MARKETING_URL, SALES_URL } from '../utils/Routes'

const ACADEMY_URL = '/academy'
const MARKETING_URL = '/marketing'
const SALES_URL = '/sales'
const CONTACT_URL = '/contact'

const SideBar = () => {
  return (
    <div className="col-lg-4">
      <div className="service-sidebar">
          <div className="widget widget-category " data-aos="fade-up" data-aos-delay="200">
              <h4 className="widget-title">Services Category</h4>
              <ul>
                  <li><Link href={ACADEMY_URL}>Online Marketing Academy</Link></li>
                  <li><Link href={MARKETING_URL}>Digital Marketing Services</Link></li>
                  <li><Link href={SALES_URL}>Sales and Lead Generation Solutions</Link></li>
              </ul>
          </div>
          <div className="widget widget-cta" style={{backgroundImage: "url('/images/widgets/cta-widget-bg.jpg')"}}>
              <span className="h5">Let's Work Together</span>
              <h2>Josue Digital</h2>
              <Link href={CONTACT_URL} className="theme-btn style-four">Contact Us <i className="fas fa-angle-double-right"></i></Link><br />
              <a href="tel:+2349040014613" className="number"><i className="fas fa-phone"></i> +234 0904 001 4613</a>
              <img className="bg-shape" src="/images/widgets/cta-bg-lines.png" alt="Shape" />
          </div>
          {/* <!-- <div className="widget widget-download " data-aos="fade-up" data-aos-delay="200">
              <h4 className="widget-title">Download</h4>
              <ul>
                  <li><a href="#">Download pdf <i className="far fa-file-pdf"></i></a></li>
                  <li><a href="#">Download doc <i className="far fa-file-word"></i></a></li>
              </ul>
          </div> --> */}
      </div>
    </div>
  )
}

export default SideBar