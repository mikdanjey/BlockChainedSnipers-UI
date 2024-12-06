"use client";

import React from "react";

const Instructor = ({ user }) => {
  return (
    <>
      <div className="courses-instructor">
        <div className="single-advisor-box">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4">
              <div className="advisor-image">
                <img src="/images/advisor/advisor2.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="advisor-content">
                <h3>{user.name}</h3>
                <span className="sub-title">{user.designation}</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>

                <ul className="social-link">
                  <li>
                    <a href="#" className="d-block" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-block" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-block" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-block" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
