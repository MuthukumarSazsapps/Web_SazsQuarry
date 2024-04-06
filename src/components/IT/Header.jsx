import { useState } from 'react';
import Link from 'next/link';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (event) => {
    event.preventDefault();
    setOpen(true);
  }

  return (
    <header className="style-2 overflow-hidden" data-scroll-index="1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="content text-center text-light text-capitalize">
              <div className="top_info">
                {/* <h1 className="text-uppercase">Sazs Apps</h1> */}
                {/* <h3 className="fw-light text-uppercase fw-bold">
                  {" "}
                  <strong>Apps</strong>{" "}
                </h3> */}
                {/* <h3 className="text-uppercase "> Apps</h3> */}

                {/* <p className="fw-light text-uppercase">
                  Best Solutions for <br />{" "}
                  <strong className="fw-bold">Big Data & TEchnology</strong>{" "}
                  Services
                </p> */}

                <p className="fw-light text-uppercase">
                  Boost Your Business With New Tech.
                  <br />{" "}
                  <strong className="fw-bold">
                    Customer Satisfaction = Our Reputation
                  </strong>{" "}
                </p>
                <a
                  href="https://www.youtube.com/watch?v=FmLpFO93DPE"
                  className="vid-btn"
                  onClick={openVideo}
                >
                  <i className="bi bi-play-fill wow heartBeat infinite slower"></i>
                </a>
              </div>
              <div className="mt-200  mb-80">
                <h2 className="text-uppercase">Core Values</h2>
                <div className="brands mt-40">
                  {/* <a href="#" className="logo wow fadeInUp" data-wow-delay="0">
                  <img src="/assets/img/about/about_logos/1.png" alt="" />
                </a> */}
                  <h3>
                    {" "}
                    <strong className=" fw-light">Innovation</strong>{" "}
                  </h3>
                  <h3>
                    {" "}
                    <strong className="fw-light">Goals</strong>{" "}
                  </h3>
                  <h3>
                    {" "}
                    <strong className="fw-light">Team Work</strong>{" "}
                  </h3>
                  <h3>
                    {" "}
                    <strong className="fw-light">Commitment</strong>{" "}
                  </h3>
                  <h3>
                    {" "}
                    <strong className="fw-light">Responsiblity</strong>{" "}
                  </h3>

                  {/* <a href="#" className="logo wow fadeInUp" data-wow-delay="0.2s">
                  <img src="/assets/img/about/about_logos/2.png" alt="" />
                </a>
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0.4s">
                  <img src="/assets/img/about/about_logos/3.png" alt="" />
                </a>
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0.6s">
                  <img src="/assets/img/about/about_logos/4.png" alt="" />
                </a>
                <a href="#" className="logo wow fadeInUp" data-wow-delay="0.8s">
                  <img src="/assets/img/about/about_logos/5.png" alt="" />
                </a> */}
                </div>
              </div>

              {/* <h4>
                We can help to maintain and modernize <br /> your IT
                infrastructure & solve various infrastructure-specific <br />{" "}
                issues a business may face.
              </h4> */}
              <h4>
                "We don't want to push our ideas on to customers, we simply want
                to make what they want"
              </h4>
              <p className="d-block mt-40">
                “SAZS Apps ERP” is a user friendly and powerful semi-automated
                software for stone crusher and quarry units to manage their
                regular activities end to end. The software exists by the
                compilation of innovation and futuristic thinking. We expertise
                in this exertion for the past 4 years and with 8 months of hard
                work and RND, first software has been generated and by the next
                2 months, the second software has been installed. Now the
                product is elated to have 150 + delightful customers so far and
                it is counting.
              </p>
              <Link href="/page-about-5">
                <a className="btn sm-butn border text-white radius-9 mt-60 hover-darkBlue">
                  <span>More About Us</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/header/header_2.png"
        alt=""
        className="head_shape2 wave"
      />
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="FmLpFO93DPE"
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
}

export default Header