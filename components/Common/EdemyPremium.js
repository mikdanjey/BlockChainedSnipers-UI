import React from "react";
import Link from "next/link";

const EdemyPremium = () => {
  return (
    <div>
      <div className="view-all-courses-area-three bg-fff8f8">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="view-all-courses-image-style-two">
                <img src="/images/strategy.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="view-all-courses-content-style-two">
                <span className="sub-title">ONLINE LEARNING</span>
                <h2>Always know what's happening in the markets</h2>
                <p>
                  Covering the stock market and BTC market with daily updates.
                  You’ll see what we’re looking for and how we plan our trades
                  every day live, Monday to Friday.
                </p>
                <Link className="default-btn" href="/courses-1">
                  <i className="flaticon-agenda"></i>
                  View Courses
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bulb">
          <img src="/images/bulb.png" alt="image" />
        </div>
      </div>

      <div className="premium-access-area-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="premium-access-content-style-two">
                <span className="sub-title">GO AT YOUR OWN PACE</span>
                <h2>Trading can be lonely, but it doesn't have to be</h2>
                <p>
                  We’ve created a warm and professional environment for our
                  members to learn and grow together. You’ll gain inspiration
                  from those trading full-time while having the opportunity to
                  interact with our professional team of traders on a daily
                  basis.
                </p>
                <Link className="default-btn" href="/membership-levels">
                  <i className="flaticon-user"></i>
                  Join Now
                  <span></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="premium-access-image-style-two">
                <img src="/images/security.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdemyPremium;
