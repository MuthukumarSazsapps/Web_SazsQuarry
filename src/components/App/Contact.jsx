import {useEffect, useRef} from "react";
import navbarScrollEffect from "@common/navbarScrollEffect";
import MainLayout from "@layouts/Main";
import Form from "@components/Contact/Form";
import Footer from "@components/Saas/Footer";

const PageContact5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <MainLayout>
        <main className="contact-page style-5 " data-scroll-index="6">
          <Form style="5" />
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7327518125508!2d77.86896027585837!3d9.178562486628177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b3486c024f79%3A0x8901bf7122369151!2sSazs%20Apps!5e0!3m2!1sen!2sin!4v1715678074119!5m2!1sen!2sin" width="800" height="600" style={{width:"100vw"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  );
};

export default PageContact5;
