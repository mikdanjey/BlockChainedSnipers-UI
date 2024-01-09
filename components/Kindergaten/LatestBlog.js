import React from "react";
import Link from "next/link";

const LatestBlog = () => {
  return (
    <div className="blog-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Our News</span>
          <h2 className="font-weight-black">Check Out Our Latest Blog</h2>
          <p>
            We always give extra care to our student's skills improvements and
            feel excited to share our latest research and learnings!
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-blog-item">
              <div className="post-image">
                <Link href="/single-blog-1" className="d-block" legacyBehavior>
                  <img src="/images/blog/kindergarten-img1.jpg" alt="image" />
                </Link>
                <Link href="#" className="link-btn" legacyBehavior></Link>
              </div>

              <div className="post-content">
                <Link href="#" className="category">
                  Preschool
                </Link>
                <h3 className="font-weight-black">
                  <Link href="/single-blog-1">
                    Why Play Is Important in Preschool and Early
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-blog-item">
              <div className="post-image">
                <Link href="/single-blog-1" className="d-block" legacyBehavior>
                  <img src="/images/blog/kindergarten-img2.jpg" alt="image" />
                </Link>

                <Link href="#" className="link-btn" legacyBehavior></Link>
              </div>

              <div className="post-content">
                <a href="#" className="category">
                  Books
                </a>
                <h3 className="font-weight-black">
                  <Link href="/single-blog-1">
                    Best Three Billy Goats Gruff Books for Preschool
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div className="single-blog-item">
              <div className="post-image">
                <Link href="/single-blog-1" className="d-block" legacyBehavior>
                  <img src="/images/blog/kindergarten-img3.jpg" alt="image" />
                </Link>

                <Link href="#" className="link-btn" legacyBehavior></Link>
              </div>

              <div className="post-content">
                <a href="#" className="category">
                  Theme
                </a>
                <h3 className="font-weight-black">
                  <Link href="/single-blog-1">
                    Flashlight Literacy Activity for Your Camping Theme
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
