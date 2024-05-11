
const Integration = ({ integrations, rtl }) => {
  return (
    <div className="integration pt-10" data-scroll-index="3">
      <div className="section-head text-center style-4">
        {/* <small className="title_small">
          {rtl ? "دفعة لمرة واحدة" : "Sazs Apps Community"}
        </small> */}
        <h2 className="mb-20">
          {rtl ? "متوافق مع" : " Our Other"}{" "}
          <span>{rtl ? "التطبيقات الشعبية" : "Special Integration"}</span>{" "}
        </h2>
        <p>
          {rtl
            ? "نوتيرو يتكامل مع التطبيقات الشعبية. تساعدك على التواصل والتعاون بسهولة"
            : "We Are Specially Known For This"}
        </p>
      </div>
      <div className="container">
        <div className="content">
          {integrations.map((integration, index) => (
            <div className="icon img-contain img text-center " key={index}>
              <img src={integration.image} alt="" className="mt-30" />
              <h6>
                <strong>
                  {integration.title.text1} <br /> {integration.title.text2}
                </strong>
              </h6>
            </div>
          ))}
        </div>
      </div>
      <img src="/assets/img/about/intg_back.webp" alt="" className="intg-back" />
    </div>
  );
}

export default Integration