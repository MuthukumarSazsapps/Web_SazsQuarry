import { useEffect, useState } from 'react';
import Header from '@components/App/Header';
import AboutUs from './About';
import Featuress from './Features';
import CommunityPage from './Community';
import ContactUs from './Contact';
import Modal from '@components/App/Modal';
import Numbers from '@components/App/Numbers';

const LandingPreview = () => {
  useEffect(() => {
    // Show the modal when the component mounts
    const modal = new window.bootstrap.Modal(document.getElementById('myModal'));
    modal.show();
  }, []);
  return (
    <>
      <Modal />
      <Header />
      <AboutUs />
      <Featuress/>
      <CommunityPage/>
      <ContactUs />
      
    </>
  );
}

export default LandingPreview;