import React from "react";
import Link from "next/link";

const LatestNewsTwo = () => {
  return (
    <div className="blog-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">News</span>
          <h2>Check Out Our Latest Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="single-blog-post-item">
              <div className="post-image">
                <Link href="/single-blog-3" className="d-block" legacyBehavior>
                  <img src="/images/blog/blog4.jpg" alt="image" />
                </Link>
              </div>
              <div className="post-content">
                <Link href="#" className="category">
                  Education
                </Link>
                <h3>
                  <Link href="/single-blog-3">
                    University Admissions Could Face Emergency Controls
                  </Link>
                </h3>
                <ul className="post-content-footer d-flex align-items-center">
                  <li>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src="/images/user1.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                      <span>Alex Morgan</span>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-calendar"></i> April 30, 2020
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="blog-post-list">
              <div className="row">
                <div className="col-lg-12 col-sm-6 col-md-6">
                  <div className="single-blog-post-item">
                    <div className="post-image">
                      <Link href="/single-blog-3" className="d-block" legacyBehavior>
                        <img src="/images/blog/blog5.jpg" alt="image" />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3>
                        <Link href="/single-blog-3">
                          Online Learning Can Prepare Students For A
                          Fast-Changing
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-sm-6 col-md-6">
                  <div className="single-blog-post-item">
                    <div className="post-image">
                      <Link href="/single-blog-3" className="d-block" legacyBehavior>
                        <img src="/images/blog/blog6.jpg" alt="image" />
                      </Link>
                    </div>
                    <div className="post-content">
                      <h3>
                        <Link href="/single-blog-3">
                          As Learning Moves Online, Trigger Warnings Must Too
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="blog-post-info">
              <p>
                Get into details now?​{" "}
                <Link href="/blog-3">View all posts</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsTwo;
