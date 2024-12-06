import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="about-area bg-f5f7fa ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image text-center">
              <img src="/images/about-img10.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <span className="sub-title">About Us</span>
              <h2>Stop losing and become profitable</h2>
              <p>
                At Block Chained Snipers we’re putting confidence back into our
                traders, by taking the guesswork out of trading. Through our
                on-demand platform, we’ve developed the most advanced strategies
                and converted them into simplified teachings for all experience
                levels. Our platform is created with a single goal in mind -
                Make you a profitable trader.
              </p>

              <ul className="features-list">
                <li>
                  <span>
                    <i className="flaticon-experience"></i> Skilled Experts
                  </span>
                </li>
                <li>
                  <span>
                    <i className="flaticon-time-left"></i> Affordable Courses
                  </span>
                </li>
                <li>
                  <span>
                    <i className="flaticon-tutorials"></i> Efficient & Flexible
                  </span>
                </li>
                <li>
                  <span>
                    <i className="flaticon-self-growth"></i> Self Development
                  </span>
                </li>
              </ul>

              <Link href="/profile-authentication" className="default-btn">
                <i className="flaticon-user"></i>Join Now<span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
