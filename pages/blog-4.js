import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import BlogSidebar from "../components/Blog/BlogSidebar";

const Blog4 = () => {
  return (
    <>
      <PageBanner
        pageTitle="Blog Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Right Sidebar"
      />

      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href="/single-blog-1" className="d-block">
                        <img src="/images/blog/blog1.jpg" alt="image" />
                      </Link>
                    </div>
                    <div className="post-content">
                      <Link href="#" className="category">
                        Education
                      </Link>
                      <h3>
                        <Link href="/single-blog-1">
                          The Beat Goes On: High School Choirs Improvise In The
                          Age Of Coronavirus
                        </Link>
                      </h3>
                      <ul className="post-content-footer d-flex justify-content-between align-items-center">
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

                <div className="col-lg-12 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href="/single-blog-1" className="d-block">
                        <img src="/images/blog/blog2.jpg" alt="image" />
                      </Link>
                    </div>
                    <div className="post-content">
                      <Link href="#" className="category">
                        Online
                      </Link>
                      <h3>
                        <Link href="/single-blog-1">
                          How Online Book Read-Alouds Can Help Students'
                          Literacy and Connection During Social Distancing
                        </Link>
                      </h3>
                      <ul className="post-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <div className="post-author d-flex align-items-center">
                            <img
                              src="/images/user2.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                            <span>Sarah Taylor</span>
                          </div>
                        </li>
                        <li>
                          <i className="flaticon-calendar"></i> April 29, 2020
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href="/single-blog-1" className="d-block">
                        <img src="/images/blog/blog3.jpg" alt="image" />
                      </Link>
                    </div>
                    <div className="post-content">
                      <Link href="#" className="category">
                        Learning
                      </Link>
                      <h3>
                        <Link href="/single-blog-1">
                          How To Secure Remote Workers During The COVID-19
                          Outbreak
                        </Link>
                      </h3>
                      <ul className="post-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <div className="post-author d-flex align-items-center">
                            <img
                              src="/images/user3.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                            <span>David Warner</span>
                          </div>
                        </li>
                        <li>
                          <i className="flaticon-calendar"></i> April 28, 2020
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href="/single-blog-1" className="d-block">
                        <img src="/images/blog/blog7.jpg" alt="image" />
                      </Link>
                    </div>
                    <div className="post-content">
                      <Link href="#" className="category">
                        Learning
                      </Link>
                      <h3>
                        <Link href="/single-blog-1">
                          What A Company Needs To Provide Employees For
                          Effective Remote Work
                        </Link>
                      </h3>
                      <ul className="post-content-footer d-flex justify-content-between align-items-center">
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

                {/* Pagination */}
                <div className="col-lg-12 col-md-12">
                  <div className="pagination-area text-center">
                    <a href="#" className="prev page-numbers">
                      <i className="bx bx-chevrons-left"></i>
                    </a>
                    <span className="page-numbers current" aria-current="page">
                      1
                    </span>
                    <a href="#" className="page-numbers">
                      2
                    </a>
                    <a href="#" className="page-numbers">
                      3
                    </a>
                    <a href="#" className="page-numbers">
                      4
                    </a>
                    <a href="#" className="next page-numbers">
                      <i className="bx bx-chevrons-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog4;