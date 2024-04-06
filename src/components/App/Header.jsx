import { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className="style-4" data-scroll-index="0">
      <div className="content">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-6">
              <div className="info">
                <small className="mb-50 title_small">
                  Sazs Apps - Quarry King
                </small>
                <h1 className="mb-30">
                  The Ultimate
                  <span>Quarry & Crusher</span> Management Software
                </h1>
                <p className="text">
                  We don't want to push our ideas on to customers,
                  <br />
                  we simply want to make what they want.
                </p>
                <div className="d-flex align-items-center mt-50">
                  <a
                    href="#"
                    rel="noreferrer"
                    className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
                    target="_blank"
                  >
                    <small>
                      {" "}
                      <i className="fab fa-apple me-2 pe-2 border-end"></i>
                      Download App
                    </small>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=FmLpFO93DPE"
                    data-lity
                    className="play-btn"
                    onClick={openVideo}
                  >
                    <span className="icon me-2">
                      <i className="fas fa-play ms-1"></i>
                    </span>
                    <strong className="small">
                      View <br />
                      Promotion
                    </strong>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <img src="/assets/img/header/header45.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/img/header/header_4_bubble.png"
          alt=""
          className="bubble"
        />
      </div>
      {/* <img src="/assets/img/header/header_4_wave.png" alt="" className="wave" /> */}
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