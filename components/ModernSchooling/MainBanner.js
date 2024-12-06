import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="hero-banner-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="hero-banner-content pt-70">
              <h1>Trading Made Simple and Successful</h1>
              <p>
                Block Chained Snipers is creating the next generation of traders
                in the stock market, Bitcoin, Futures, and everything in
                between.
              </p>

              <Link href="/follow-us" className="default-btn">
                <i className="flaticon-user"></i>Follow Us<span></span>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="hero-banner-image d-none d-sm-block">
              <img
                src="/images/banner.png"
                className="banner-image"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="banner-shape19">
        <img src="/images/banner-shape20.png" alt="image" />
      </div>
      {/*
      <div className="divider"></div>
      */}
    </div>
  );
};

export default MainBanner;
