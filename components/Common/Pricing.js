import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="pricing-area bg-f9f9f9 pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Plans</span>
          <h2 className="playfair-display-font">Our Flexible Pricing Plan</h2>
          <p>
            Flexible pricing is a strategy that allows businesses to change
            their prices in response to changes in demand or other market
            conditions or as a result of negotiation between traders and us.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-pricing-box">
              <div className="pricing-features">
                {/* <img src="/images/yoga-pricing-img1.png" alt="image" /> */}
                <h3>Spectator</h3>
              </div>

              <div className="pricing-features">
                <ul>
                  <li>Community Discord Server</li>
                  <li>Beginners Course</li>
                  <li>Coaches Trade Recaps</li>
                  <li>Community Discord Server - Spectators</li>
                  <li>Weekly Trading Lessons</li>
                </ul>
              </div>

              <div className="price">
                Free
                <span>Forever</span>
              </div>

              <Link className="default-btn" href="#">
                Join now!<span></span>
              </Link>

              <div className="pricing-shape1">
                <img src="/images/pricing-shape1.png" alt="image" />
              </div>
              <div className="pricing-shape2">
                <img src="/images/pricing-shape2.png" alt="image" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-pricing-box">
              <div className="pricing-features">
                {/* <img src="/images/yoga-pricing-img2.png" alt="image" /> */}
                <h3>Contender</h3>
              </div>

              <div className="pricing-features">
                <ul>
                  <li>All Spectator features plus</li>
                  <li>Daily BTC update - Monday Only</li>
                  <li>Daily Stock update - Monday Only</li>
                  <li>Live Weekly Trading AMA</li>
                  <li>Trading Assistant</li>
                </ul>
              </div>

              <div className="price">
                $97
                <span>Per Month</span>
              </div>

              <Link className="default-btn" href="#">
                Join now!<span></span>
              </Link>

              <div className="pricing-shape1">
                <img src="/images/pricing-shape1.png" alt="image" />
              </div>
              <div className="pricing-shape2">
                <img src="/images/pricing-shape2.png" alt="image" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="single-pricing-box">
              <div className="pricing-features">
                {/* <img src="/images/yoga-pricing-img3.png" alt="image" /> */}
                <h3>Champion</h3>
              </div>

              <div className="pricing-features">
                <ul>
                  <li>All Contender features plus</li>
                  <li>Live Trading Sessions - x2</li>
                  <li>Weekly BTC Trading Plan</li>
                  <li>Weekly Altcoin Trading Plan</li>
                  <li>Coaches Update Channels</li>
                </ul>
              </div>

              <div className="price">
                $197
                <span>Per Month</span>
              </div>

              <Link className="default-btn" href="#">
                Join now!<span></span>
              </Link>

              <div className="pricing-shape1">
                <img src="/images/pricing-shape1.png" alt="image" />
              </div>
              <div className="pricing-shape2">
                <img src="/images/pricing-shape2.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
