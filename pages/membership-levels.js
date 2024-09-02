import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const MembershipLevels = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Membership Levels"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Membership Levels"
      />

      <div className="membership-levels-area ptb-100">
        <div className="container">
          <div className="membership-levels-table table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <h2>$500</h2>
                    <h3>Silver Membership</h3>
                    <span className="desc">You can view few of courses</span>
                  </th>
                  <th>
                    <h2>$1,000</h2>
                    <h3>Gold Membership</h3>
                    <span className="desc">You can view most of courses</span>
                  </th>
                  <th>
                    <h2>$1,500</h2>
                    <h3>Diamond Membership</h3>
                    <span className="desc">You can view all of courses</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Number of courses</td>
                  <td>5</td>
                  <td>10</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">
                      Investment Fundamentals & Data Analytics
                    </Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Hands-On Python & R In Data Science</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Complete Data Science Bootcamp</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">
                      Programming MasterclassName for Developers
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Hands-On Artificial Neural Networks</Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">
                      PRINCE2® Practitioner Certification Training
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">PMI-RMP® Certification Training</Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">
                      PRINCE2® Foundation Certification Training
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">PMP® Plus</Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">PMP® Renewal Pack</Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Digital Project Manager</Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">
                      Agile Project Management; Agile Delivery
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Vue JS 2 - The Complete Guide</Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">
                      Everything You Need to Program in Python
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">
                      Mathematical Foundation For Machine Learning
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Drawing Course - Beginner to Advanced</Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">
                      Deep Learning and Artificial Intelligence
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Information About UI/UX Design Degree</Link>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">Photography Photo modify and Beautiful</Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="#">
                      Professional IT Expert Certificate Course
                    </Link>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Link href="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link href="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link href="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MembershipLevels;
