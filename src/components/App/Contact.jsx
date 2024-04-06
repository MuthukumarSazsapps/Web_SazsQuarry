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
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  );
};

export default PageContact5;
