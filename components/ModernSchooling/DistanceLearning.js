import React from "react";
import Link from "next/link";

const DistanceLearning = () => {
  return (
    <div className="overview-area ptb-100">
      <div className="container">
        <div className="overview-box">
          <div className="overview-content">
            <span className="sub-title">Online Learning</span>
            <h2>New to trading? Find out if trading suits you</h2>
            <p>
              Our courses have been designed so you can step in at any level of
              experience. If you are a beginner, we will take you from the most
              basic principles all the way up to the strategies used by 1000ths
              of profitable traders. You’ll have strong support along the way
              from our team of professional traders and your fellow community
              members.
            </p>

            <Link href="#" className="default-btn">
              <i className="flaticon-user"></i>Learn more about trading
              <span></span>
            </Link>
          </div>

          <div className="overview-image">
            <img src="/images/overview-img1.png" alt="image" />
          </div>
        </div>

        <div className="overview-box">
          <div className="overview-image">
            <img src="/images/overview-img2.png" alt="image" />
          </div>

          <div className="overview-content">
            <span className="sub-title">Social Media</span>
            <h2>Get Updates From Your Mobile Any Where</h2>
            <p>Full time trader crypto and stock trader</p>

            <div className="btn-box">
              <a
                href="https://instagram.com/blockchainedbb"
                target="_blank"
                className="playstore-btn"
              >
                <img src="/images/instagram.png" alt="image" />
                Follow on<span>Instagram</span>
              </a>

              <a
                href="https://x.com/blockchainedbb"
                target="_blank"
                className="applestore-btn"
              >
                <img src="/images/twitter.png" alt="image" />
                Follow on<span>Twitter</span>
              </a>

              <a
                href="https://tiktok.com/@blockchainedbb_vivian"
                target="_blank"
                className="applestore-btn"
              >
                <img src="/images/tik-tok.png" alt="image" />
                Follow on<span>Tittok</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="shape2">
        <img src="/images/shape2.png" alt="image" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.png" alt="image" />
      </div>
      <div className="shape4">
        <img src="/images/shape4.png" alt="image" />
      </div>
      <div className="shape9">
        <img src="/images/shape8.svg" alt="image" />
      </div>
    </div>
  );
};

export default DistanceLearning;
