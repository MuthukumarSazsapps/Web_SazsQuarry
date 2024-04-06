import React from "react";
import Script from "next/script";
import Head from "next/head";
import "../styles/preloader.css";
import "../styles/globals.css";
import { useEffect, useRef } from 'react';
import MainLayout from '@layouts/Main';
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/AppNav/OnePageNav';
import Footer from '@components/App/Footer';
import navbarScrollEffect from "@common/navbarScrollEffect";

function MyApp({ Component, pageProps }) {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);
  return (
    <>
      <Head>
        <title>Sazs Apps</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <Component {...pageProps} />
        <Footer />
      </MainLayout>
      <Script strategy="beforeInteractive" src="/assets/js/lib/pace.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/lib/bootstrap.bundle.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/lib/mixitup.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/lib/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/assets/js/lib/html5shiv.min.js"></Script>
      <Script strategy="lazyOnload" src="/assets/js/main.js"></Script>
    </>
  );
}

export default MyApp;
