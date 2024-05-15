
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
                    Welcome Aboard <strong>SASZ APPS</strong> ,A high Energy company
                    that embarked on its journey in <strong> 2018</strong> with a "small
                    but Determined team". From  humble beginnings just with 2 clients, We"ve grown to proudly serve over 
                    <strong> 150+</strong> Satisfied customers. At the intersection of innovation and efficiency lies our passion: 
                    delivering cutting-edge Enterprise Resource Planning (ERP) solutions. We're a dynamic,
                    forward-thinking software company commited to revolutionizing
                    businesses through advanced ERP technology.
                  </>
                )}
              </p>
              <ul>
                {features.map((item, index) => (
                  <li className="d-flex align-items-center mb-3" key={index}>
                    <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                      <i className={item.icon}></i>
                    </small>
                    <p className=""><strong>{item.title}</strong>{item.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/aboutus_s4_lines.webp"
        alt="bubble"
        className="lines"
      />
      <img
        src="/assets/img/about/about_s4_bubble.webp"
        alt="bubble"
        className="bubble"
      />
    </div>
  );
}

export default FirstContent;