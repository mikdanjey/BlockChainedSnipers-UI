import React from "react";
import Head from "next/head";
import Layout from "../components/_App/Layout";

import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "react-18-image-lightbox/style.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.css";
// Global Responsive Styles
import "../styles/responsive.css";
// Global RTL Styles
import "../styles/rtl.css";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const seoData = {
    title: "Developers City",
    description:
      "Explore the best tools, resources for developers. From code editors to debugging tools, find everything you need to enhance your development workflow.",
    ogImage: "/images/logo.png",
    ogUrl: "https://developers.city",
    twitterHandle: "@YourDevToolsSite",
    favicon: "/favicon.ico",
    siteName: "YourSite - Developers Tools",
    keywords: "development tools, software development, coding resources",
    author: "Mikdan Tech Solutions",
    themeColor: "#00000",
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={seoData.favicon} />
        <link rel="manifest" href="/manifest.json" />

        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />

        {/* OpenGraph Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:url" content={seoData.ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={seoData.siteName} />

        {/* Twitter Card Tags */}
        <meta name="twitter:site" content={seoData.twitterHandle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />

        {/* Canonical Tag */}
        <link rel="canonical" href={seoData.ogUrl} />

        {/* Favicons */}
        <link
          rel="icon"
          href={seoData.favicon}
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href={seoData.favicon}
          sizes="192x192"
          type="image/png"
        />
        <link rel="apple-touch-icon" href={seoData.favicon} />

        {/* Other Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content={seoData.themeColor} />
        <meta name="author" content={seoData.author} />
        <meta name="keywords" content={seoData.keywords} />
      </Head>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;