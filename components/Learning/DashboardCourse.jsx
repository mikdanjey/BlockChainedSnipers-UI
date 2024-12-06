import Link from "next/link";
import Image from "next/image";
import { ProgressBar } from "react-bootstrap";
import moment from "moment";
import { myLearning } from "@/actions/myLearning";

async function DashboardCourse({ currentUser = {} }) {
  // const { categories } = await getCategories();
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

  // console.log("enrolments", enrolments);
  // console.log("currentUser", currentUser);
  return (
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
  );
}

export default DashboardCourse;
