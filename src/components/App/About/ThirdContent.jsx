import Link from 'next/link';

const ThirdContent = ({ features, rtl }) => {
  return (
    <div className="content trd-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              {/* <img src="/assets/img/about/about_s4_img3.png" alt="" /> */}
              <img src="/assets/img/about/gainprofitaboutus3.webp" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">
                  {rtl ? "ثيمات جميلة" : "Sazs Apps - Quarry King"}
                </small>
                <h2 className="mb-30">
                  {rtl ? "ركز أكثر مع" : "WHAT YOU"}{" "}
                  <span>{rtl ? "المظهر الداكن" : "GAIN?"}</span>{" "}
                </h2>
              </div>
              <p className="text mb-40">
                {rtl
                  ? "قم بتطبيق سمات نوتيرو الأنيقة حسب ذوقك. تعمل السمات المظلمة بشكل ممتاز لأولئك الذين يفضلون الوضع الخالي من الإلهاء."
                  : "you really know what Kind of Operation to your crusher or Quarry "}
              </p>
              <ul>
                {features.map((feature, index) => (
                  <li
                    className={`d-flex align-items-center ${
                      feature.active ? "" : "op-4"
                    }`}
                    key={index}
                  >
                    <i className="bi bi-dot fs-2 me-2 lh-1 color-blue4"></i>
                    <h6 className="fw-bold">{feature.title}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_bubble.webp"
        alt="bubble"
        className="bubble"
      />
    </div>
  );
}

export default ThirdContent