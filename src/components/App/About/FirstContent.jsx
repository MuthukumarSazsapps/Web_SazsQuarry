
const FirstContent = ({ features, rtl }) => {
  return (
    <div className="content frs-content" id="about" data-scroll-index="2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              {/* <img src="/assets/img/about/ipad.png" alt="" /> */}
              <img src="/assets/img/about/aboutus1.webp" alt="team image" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">Sazs Apps - Quarry King</small>
                <h2 className="mb-30">
                  About <span>US </span>{" "}
                </h2>
              </div>
              <p className="text mb-40">
                {!rtl && (
                  <>
                    Welcome to <strong>SASZ APPS</strong> ,A high-octane company
                    that set sail in the year <strong> 2018</strong> as a "small
                    unit action". Starting with 2 clients, we now serve more
                    than
                    <strong> 150+</strong> happy customers. where innovation
                    meets efficiency in the world of Enterprise Resource
                    Planning (ERP) solutions. We are a dynamic and
                    forward-thinking software company dedicated to transforming
                    businesses through cutting-edge ERP technology.
                  </>
                )}
              </p>
              <ul>
                {features.map((item, index) => (
                  <li className="d-flex align-items-center mb-3" key={index}>
                    <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                      <i className={item.icon}></i>
                    </small>
                    <h6 className="fw-bold">{item.title}</h6>
                  </li>
                ))}
              </ul>
              {/* <a
                href="page-contact-5.html"
                className="btn rounded-pill bg-blue4 fw-bold text-white mt-50"
              >
                <small> Free Register </small>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_lines.png"
        alt=" bubble"
        className="lines"
      />
      <img
        src="/assets/img/about/about_s4_bubble.png"
        alt="bubble"
        className="bubble"
      />
    </div>
  );
}

export default FirstContent;