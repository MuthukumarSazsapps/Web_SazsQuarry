import { useEffect } from "react";
import scrollToSection from "@common/scrollToSection";
import { useRouter } from "next/router";

const OnePageNav = ({ navbarRef }) => {
  const downloadPdf = () => {
    const pdfUrl = "/assets/pdf/broucher.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Sazs Broucher.pdf"; // You can change the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    const router = useRouter();
    
  useEffect(() => {
    const sections = document.querySelectorAll("[data-scroll-index]");
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const index = section.getAttribute("data-scroll-index");
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const scroll = window.scrollY;

        if (scroll + 200 > offset && scroll + 200 < offset + height) {
          document
            .querySelector(`[data-scroll-nav="${index}"]`)
            ?.classList?.add("active");
        } else {
          document
            .querySelector(`[data-scroll-nav="${index}"]`)
            ?.classList?.remove("active");
        }
      });
    });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light style-4"
      id="main-nav"
      ref={navbarRef}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="#"
          data-scroll-nav="0"
          onClick={scrollToSection}
        >
          <img
            src="/assets/img/about/about_logos/sazsquarry.png"
            alt="app-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item">

              <div
                className="nav-link"
                data-scroll-nav="0"
                onClick={() => router.push('/')}
              >
                Home
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-scroll-nav="2"
                onClick={() => router.push('/About')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-scroll-nav="1"
                onClick={() => router.push('/Features')}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-scroll-nav="3"
                onClick={() => router.push('/Community')}
              >
                  Support Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-scroll-nav="6"
                onClick={() => router.push('/Contact')}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              <span
                className="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold"
                onClick={downloadPdf}
              >
                <span>
                  download
                  <i className="bi bi-download ms-1"></i>{" "}
                </span>
              </span>
            </div>
          </div>
          <div className="nav-side ms-2">
            <div className="d-flex align-items-center">
              <a href="tel:7666628000">
                <span className="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold">
                  <span>
                    +91 7666628000
                    <i className="bi bi-telephone-fill ms-1"></i>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default OnePageNav;
