import communityCards from '@data/App/community.json';
import communityCardsrRTL from '@data/App/community-rtl.json';
import Numbers from './Numbers';
import ChooseUs from './Chooseus';
import ThirdContent from './About/ThirdContent';
import aboutData from '@data/App/about.json';
import aboutDataRTL from '@data/App/about-rtl.json';

const Community = ({ rtl }) => {
  const data = rtl ? communityCardsrRTL : communityCards;
  const data1 = rtl ? aboutDataRTL : aboutData;


  return (
    <section className="about community section-padding pt-0 style-4">
      <div className="container">
        <div className="section-head text-center style-4 mt-30">
          <small className="title_small">Sazs Apps - The Best For You</small>
          <h2 className="mb-20 mt-30">
            Join Into {" "}
            <span>Our Team</span>{" "}
          </h2>
          <p className='mb-60'>
          "Continuing our trajectory of innovation, <strong> SASZ APPS </strong> is poised for exponential growth in the ERP sector. With a steadfast commitment to client satisfaction and a proven track record of success, we aim to expand our reach and exceed the needs of our ever-growing customer base. Our forward-thinking approach to technology and dedication to excellence sets us apart as leaders in the industry. Join us on our journey as we continue to revolutionize the way businesses operate through cutting-edge ERP solutions. Together, let's propel your business towards unparalleled efficiency and success with <strong> SASZ APPS </strong>."
          </p>
        </div>
         {/* <ChooseUs /> */}
        <ThirdContent features={data1.thirdFeatures} rtl={rtl} />

        <div className="content mt-30">
          {data.map((item, index) => (
            <a
              href={item.link}
              className="commun-card"
              key={index}
              target="blank"
            >
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <div className="inf">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Community