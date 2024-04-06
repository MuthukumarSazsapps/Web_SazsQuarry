import features from '@data/App/features.json';
import aboutData from "@data/App/about.json";
import featuresRTL from '@data/App/features-rtl.json';
import Integration from "./About/Integration";
import Modules from "@components/App/Modules";

const Features = ({rtl}) => {
  const featuresData = rtl ? featuresRTL : features;
  const data = rtl ? aboutDataRTL : aboutData;

  return (
    <section
      className="features pt-70 pb-70 style-4 bg-white "
      data-scroll-index="1"
    >
      <div className="container-fluid">
        <div className="section-head text-center style-4">
          <small className="title_small bg-white">
            Sazs Apps - Quarry King
          </small>
          <h2 className="mb-50">
            Awesome{" "}
            <span> Features</span>
          </h2>
        </div>
        <div className="content container ">
          {featuresData.map((feature, index) => (
            <div className="features-card" key={index}>
              <div className="icon img-contain">
                <img src={feature.image} alt="" />
                {/* { feature.new && <span className="label icon-40 alert-success text-success rounded-circle small text-uppercase fw-bold">{ rtl ? 'جديد' : 'new' }</span> } */}
              </div>
              <h6>
                {feature.title.text1} <br /> {feature.title.text2}
              </h6>
            </div>
          ))}
        </div>
        <div>
          <Modules />
        </div>
        <div>{<Integration integrations={data.integrations} rtl={rtl} />}</div>
      </div>
      <img src="/assets/img/feat_circle.png" alt="" className="img-circle" />
    </section>
  );
};

export default Features