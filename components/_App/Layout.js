import React from "react";
import Head from "next/head";
import Router from "next/router";
import GoTop from "./GoTop";
import Preloader from "./Preloader";

const Layout = ({ children }) => {
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  Router.events.on("routeChangeStart", () => {
    setLoader(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoader(false);
  });
  Router.events.on("routeChangeError", () => {
    setLoader(false);
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Home | Block Chained Snipers" />
        <meta
          name="og:title"
          property="og:title"
          content="Home | Block Chained Snipers"
        ></meta>
        <meta name="twitter:card" content="Home | Block Chained Snipers"></meta>
        <link rel="canonical" href="https://mikdantech.local"></link>
      </Head>

      {loader && <Preloader />}
      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
