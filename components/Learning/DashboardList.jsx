// "use client";

import Link from "next/link";
import Image from "next/image";
import { ProgressBar } from "react-bootstrap";
import moment from "moment";
import { myLearning } from "@/actions/myLearning";
import { getCategories } from "@/actions/getCategories";

async function DashboardList({ currentUser = {} }) {
  const { enrolments } = await myLearning();
  const { subscription = {}, subscriptionEndDate } = currentUser;
  const { name } = subscription;
  const inProgessCourses = enrolments.filter(
    (course) =>
      course.completionPercentage > 0 && course.completionPercentage < 100,
  );
  const completedCourses = enrolments.filter(
    (course) => course.completionPercentage >= 100,
  );

  console.log("enrolments", enrolments);
  console.log("currentUser", currentUser);
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="cart-totals mb-30">
            <h3>My Learning</h3>
            <ul>
              <li>
                Completed Courses <span>{completedCourses.length}</span>
              </li>
              <li>
                In-Progress Courses<span>{inProgessCourses.length}</span>
              </li>
              <li>
                Available Courses <span>{enrolments.length}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="cart-totals mb-30">
            <h3>Subscription Status</h3>
            <p>
              <b>Current Subscription</b>: {name}
            </p>
            <p className="mt-20">
              <b>End Date</b>:{" "}
              {subscriptionEndDate
                ? moment(subscriptionEndDate).format("MM/DD/YYYY")
                : "-"}
            </p>
            <p>
              <b>Status</b>: Active
            </p>
            {/*
                        <h3>Categories</h3>
                        <ul>
                            {categories.map((category) => (<>
                                <li>{category.name} </li>
                            </>))}

                            </ul>*/}
          </div>
        </div>
      </div>
      <ul className="nav-style1">
        <li>
          <Link href="#">In Progress Courses</Link>
        </li>
      </ul>
      <div className="row" style={{ marginBottom: 20 }}>
        {inProgessCourses.length > 0 ? (
          inProgessCourses.map((course) => (
            <div className="col-lg-6 col-md-12" key={course._id}>
              <div className="single-courses-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4">
                    <div className="courses-image">
                      <Link
                        className="d-block image"
                        href={`/learning/course/${course._id}/${course._id}`}
                      >
                        <Image
                          src={
                            course.thumbnailImage ||
                            "https://res.cloudinary.com/dev-empty/image/upload/v1707716814/ahooraqaikeoou3tqp7a.jpg"
                          }
                          alt={course.name}
                          style={{ width: "750px", height: "190px" }}
                          width={750}
                          height={190}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div className="courses-content">
                      <span className="price">
                        <Link
                          href={`/learning/course/${course._id}/${course._id}`}
                        >
                          {course.name}
                        </Link>
                      </span>
                      <div>{course.category}</div>
                      <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-agenda"></i>{" "}
                          <p>
                            <b>Time Left</b>
                          </p>
                          {moment
                            .utc(
                              (course.totalDuration -
                                course.totalWatchedDuration) *
                                1000,
                            )
                            .format("HH:mm:ss")}
                        </li>
                        {course.userTracks?.updatedAt && (
                          <li>
                            <i className="flaticon-people"></i>{" "}
                            <p>
                              <b>Last Visit</b>
                            </p>
                            {moment(course.userTracks.updatedAt).fromNow()}
                          </li>
                        )}
                      </ul>
                      <p className="mt-10">
                        Course Duration:{" "}
                        {moment
                          .utc(course.totalDuration * 1000)
                          .format("HH:mm:ss")}
                      </p>
                      <div className="mt-10" suppressHydrationWarning>
                        <ProgressBar
                          now={course.completionPercentage}
                          label={`${Math.round(course.completionPercentage)}%`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-lg-12 col-md-12">
            <div className="text-center fs-5 border p-3">
              No In-progress courses
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DashboardList;
