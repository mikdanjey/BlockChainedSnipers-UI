import React from "react";
import Link from "next/link";

const FeaturedCourses = () => {
  return (
    <div className="boxes-area boxes-style-two">
      <div className="container">
        <div className="overview-box">
          <div
            className="overview-content"
            style={{ flex: "0 0 100%", maxWidth: "100%" }}
          >
            <span className="sub-title">Exclusive Deals</span>
            <h2>
              Make use of our exclusive partner deals. We've negotiated the best
              bonuses for our members. <br />
              <br />
              <br />
            </h2>
          </div>
        </div>

        <div className="row" style={{ marginTop: 80 }}>
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-box-item bybit">
              <div className="image">
                <img src="/images/boxes-img1.png" alt="image" />
              </div>
              <h3>BYBIT</h3>
              {/*<Link href="/courses-1" className="link-btn">
              Get Now!
                </Link> */}
            </div>
            <h4 className="text-center mt-10">$30000 Deposit bonus</h4>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="single-box-item expressvpn">
              <div className="image">
                <img src="/images/boxes-img2.png" alt="image" />
              </div>
              <h3>Express VPN</h3>
              <p>Your all-access pass to the internet</p>
              {/*<Link href="/courses-1" className="link-btn">
              Get Now!
                </Link> */}
            </div>
            <h4 className="text-center mt-10">3 Months Free</h4>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div className="single-box-item bingx">
              <div className="image">
                <img src="/images/boxes-img3.png" alt="image" />
              </div>
              <h3>BINGX</h3>
              {/*<Link href="/courses-1" className="link-btn">
              Get Now!
                </Link> */}
            </div>
            <h4 className="text-center mt-10">Claim 6,200 + USDT Rewards</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
