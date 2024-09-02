import React from "react";
import Link from "next/link";

const PopularCourses = () => {
  return (
    <div className="courses-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Learn At Your Own Pace</span>
          <h2>eDemy Popular Courses</h2>
          <p>
            Explore all of our courses and pick your suitable ones to enroll and
            start learning with us! We ensure that you will never regret it!
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-courses-box">
              <div className="courses-image">
                <Link href="/single-courses-1" className="d-block image">
                  <img src="/images/courses/courses1.jpg" alt="image" />
                </Link>

                <Link href="#" className="fav">
                  <i className="flaticon-heart"></i>
                </Link>

                <div className="price shadow">$39</div>
              </div>

              <div className="courses-content">
                <div className="course-author d-flex align-items-center">
                  <img
                    src="/images/user1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <span>Alex Morgan</span>
                </div>

                <h3>
                  <Link href="/single-courses-1">
                    Deep Learning a-z™: Hands-on Artificial Neural Networks
                  </Link>
                </h3>

                <p>
                  This master level course is for you if you are looking to
                  learn the DL & ANN topics in and out within a short time!
                </p>

                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                  <li>
                    <i className="flaticon-agenda"></i> 15 Lessons
                  </li>
                  <li>
                    <i className="flaticon-people"></i> 145 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-courses-box">
              <div className="courses-image">
                <Link href="/single-courses-1" className="d-block image">
                  <img src="/images/courses/courses2.jpg" alt="image" />
                </Link>

                <Link href="#" className="fav">
                  <i className="flaticon-heart"></i>
                </Link>

                <div className="price shadow">$49</div>
              </div>

              <div className="courses-content">
                <div className="course-author d-flex align-items-center">
                  <img
                    src="/images/user2.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <span>Sarah Taylor</span>
                </div>

                <h3>
                  <Link href="/single-courses-1">
                    Java Programming MasterclassName for Software Developers
                  </Link>
                </h3>

                <p>
                  Java is the most stable and vastly uses a top programming
                  language for mobile, web, and desktop environments.
                </p>

                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                  <li>
                    <i className="flaticon-agenda"></i> 20 Lessons
                  </li>
                  <li>
                    <i className="flaticon-people"></i> 100 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="single-courses-box">
              <div className="courses-image">
                <Link href="/single-courses-1" className="d-block image">
                  <img src="/images/courses/courses3.jpg" alt="image" />
                </Link>

                <Link href="#" className="fav">
                  <i className="flaticon-heart"></i>
                </Link>

                <div className="price shadow">$59</div>
              </div>

              <div className="courses-content">
                <div className="course-author d-flex align-items-center">
                  <img
                    src="/images/user3.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <span>David Warner</span>
                </div>

                <h3>
                  <Link href="/single-courses-1">
                    The Data Science Course 2020: Complete Data Science Bootcamp
                  </Link>
                </h3>
                <p>
                  We designed the Data Science Bootcamp course to give you the
                  best learning experience within a short time.
                </p>

                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                  <li>
                    <i className="flaticon-agenda"></i> 20 Lessons
                  </li>
                  <li>
                    <i className="flaticon-people"></i> 150 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="courses-info">
              <p>
                Enjoy the top notch learning methods and achieve next level
                skills! You are the creator of your own career & we will guide
                you through that.{" "}
                <Link href="/profile-authentication">Register Free Now!</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
