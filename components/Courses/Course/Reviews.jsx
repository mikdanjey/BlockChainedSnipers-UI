"use client";

import React from "react";

const Reviews = () => {
  return (
    <>
      <div className="courses-reviews">
        <h3>Course Rating</h3>
        <div className="rating">
          <span className="bx bxs-star checked"></span>
          <span className="bx bxs-star checked"></span>
          <span className="bx bxs-star checked"></span>
          <span className="bx bxs-star checked"></span>
          <span className="bx bxs-star"></span>
        </div>
        <div className="rating-count">
          <span>4.1 average based on 4 reviews.</span>
        </div>
        <div className="row">
          <div className="side">
            <div>5 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-5"></div>
            </div>
          </div>
          <div className="side right">
            <div>02</div>
          </div>
          <div className="side">
            <div>4 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-4"></div>
            </div>
          </div>
          <div className="side right">
            <div>03</div>
          </div>
          <div className="side">
            <div>3 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-3"></div>
            </div>
          </div>
          <div className="side right">
            <div>04</div>
          </div>
          <div className="side">
            <div>2 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-2"></div>
            </div>
          </div>
          <div className="side right">
            <div>05</div>
          </div>
          <div className="side">
            <div>1 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-1"></div>
            </div>
          </div>
          <div className="side right">
            <div>00</div>
          </div>
        </div>
      </div>

      <div className="courses-review-comments">
        <h3>3 Reviews</h3>
        <div className="user-review">
          <img src="/images/user1.jpg" alt="image" />

          <div className="review-rating">
            <div className="review-stars">
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
            </div>

            <span className="d-inline-block">James Anderson</span>
          </div>

          <span className="d-block sub-comment">Excellent</span>
          <p>
            Very well built theme, couldn't be happier with it. Can't wait for
            future updates to see what else they add in.
          </p>
        </div>

        <div className="user-review">
          <img src="/images/user2.jpg" alt="image" />

          <div className="review-rating">
            <div className="review-stars">
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>

            <span className="d-inline-block">Sarah Taylor</span>
          </div>

          <span className="d-block sub-comment">Video Quality!</span>
          <p>
            Was really easy to implement and they quickly answer my additional
            questions!
          </p>
        </div>

        <div className="user-review">
          <img src="/images/user3.jpg" alt="image" />

          <div className="review-rating">
            <div className="review-stars">
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
            </div>

            <span className="d-inline-block">David Warner</span>
          </div>

          <span className="d-block sub-comment">Perfect Coding!</span>
          <p>
            Stunning design, very dedicated crew who welcome new ideas suggested
            by customers, nice support.
          </p>
        </div>

        <div className="user-review">
          <img src="/images/user4.jpg" alt="image" />

          <div className="review-rating">
            <div className="review-stars">
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star checked"></i>
              <i className="bx bxs-star"></i>
            </div>

            <span className="d-inline-block">King Kong</span>
          </div>

          <span className="d-block sub-comment">Perfect Video!</span>
          <p>
            Stunning design, very dedicated crew who welcome new ideas suggested
            by customers, nice support.
          </p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
