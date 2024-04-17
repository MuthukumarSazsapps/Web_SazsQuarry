import Link from 'next/link';

const Footer = ({ noWave, rtl }) => {
  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  }

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  }

  return (
    <footer
      className={`style-4 ${noWave ? "mt-0 pt-100" : ""}`}
      data-scroll-index="8"
    >
      <div className="container">
        <div className="section-head text-center style-4">
          <h2 className="mb-10">
            Ready To <span>Download</span>{" "}
          </h2>
          <p>
            Discover your new feature Download from App Store or Google Play.
          </p>
          <div className="d-flex align-items-center justify-content-center mt-50">
            <a
              href="#"
              rel="noreferrer"
              className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
            >
              <small>
                {" "}
                <i className="fab fa-apple me-2 pe-2 border-end"></i> Download
                On App Store
              </small>
            </a>
            <a
              href="#"
              rel="noreferrer"
              className="btn rounded-pill hover-blue4 fw-bold border-blue4"
            >
              <small>
                {" "}
                <i className="fab fa-google-play me-2 pe-2 border-end"></i>{" "}
                Download On Google Play
              </small>
            </a>
          </div>
        </div>
        {/* <div className="foot mt-80">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <img
                  src="/assets/img/about/about_logos/Asset 1@2x-8.png"
                  alt=""
                />
              </div>
            </div>
            { <div className="col-lg-8">
              <ul className="links">
                <li>
                  <Link href="/home-app-landing">
                    <a className="active">{rtl ? "الرئيسية" : "Home"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-about-5">
                    <a>{rtl ? "من نحن" : "about"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-product-5">
                    <a>{rtl ? "المنتجات" : "product"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-portfolio-5">
                    <a>{rtl ? "المشاريع" : "portfolio"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-services-5">
                    <a>{rtl ? "الخدمات" : "services"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-shop-5">
                    <a>{rtl ? "المتجر" : "shop"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-blog-5">
                    <a>{rtl ? "الاخبار" : "blog"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-contact-5">
                    <a>{rtl ? "اتصل بنا" : "contact"}</a>
                  </Link>
                </li>
              </ul>
            </div> }
          </div>
        </div> */}
        <div className="copywrite text-center">
          <small className="small">
            © 2023 Copyrights by{" "}
            <a
              href="https://sazs-web-main.vercel.app/"
              className="fw-bold text-decoration-underline"
            >
              Sazs Apps.com
            </a>{" "}
            All Rights Reserved.
          </small>
        </div>
      </div>
      {!noWave && (
        <img
          src="/assets/img/footer/footer_4_wave.png"
          alt=""
          className="wave"
        />
      )}
    </footer>
  );
}

export default Footer