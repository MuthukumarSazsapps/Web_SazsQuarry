import aboutData from '@data/App/about.json';
import aboutDataRTL from '@data/App/about-rtl.json';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';
import ChooseUs from '../Chooseus';

const About = ({ noFirstContent,noWave, rtl }) => {
  const data = rtl ? aboutDataRTL : aboutData;

  return (
    <>
      {/* <img src="/assets/img/header/header_4_wave.png" alt="" className="wave" width="100%"/> */}
      <section className={`about ${noWave ? "" : "section-padding"} style-4`}>
        {!noFirstContent && <FirstContent features={data.features} rtl={rtl} />}
        <SecondContent accordions={data.accordions} rtl={rtl} />
        {/* <ThirdContent features={data.thirdFeatures} rtl={rtl} /> */}
        <ChooseUs/>
        {/* {!noWave && (
          <>
            <img
              src="/assets/img/about/about_s4_wave.png"
              alt=""
              className="top-wave"
            />
            <img
              src="/assets/img/about/about_s4_wave.png"
              alt=""
              className="bottom-wave"
            />
          </>
        )} */}
      </section>
    </>
  );
}

export default About