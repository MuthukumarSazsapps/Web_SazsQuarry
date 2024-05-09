import { useEffect } from 'react';
import Header from '@components/App/Header';
import AboutUs from './About';
import Featuress from './Features';
import CommunityPage from './Community';
import ContactUs from './Contact';

const LandingPreview = () => {

  return (
    <>
      <Header />
      <AboutUs />
      <Featuress/>
      <CommunityPage/>
      <ContactUs />
    </>
  );
}

export default LandingPreview;