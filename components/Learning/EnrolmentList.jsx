import Link from "next/link";
import Image from "next/image";
import { ProgressBar } from "react-bootstrap";
import moment from "moment";

function EnrolmentList({ enrolments = [], category = {} }) {
  const filteredCourses = enrolments.filter(
    (course) => course.category === category.name && course.lessonCount > 0,
  );

  if (filteredCourses.length === 0) {
    return;
  }

  return (
    <>
      <ul className="nav-style1">
        <li>
          <Link href="#">{category.name}</Link>
        </li>
      </ul>
      <div className="row" style={{ marginBottom: 20 }}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div className="col-lg-4 col-md-6" key={course._id}>
              <div className="single-courses-box style-2">
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
                      style={{ width: "750px", height: "300px" }}
                      width={750}
                      height={350}
                    />
                  </Link>
                </div>

                <div className="courses-content">
                  <h3>
                    <Link href={`/learning/course/${course._id}/${course._id}`}>
                      {course.name}
                    </Link>
                  </h3>
                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-tutorials"></i>{" "}
                      {course.chapterCount} Modules
                    </li>
                    <li>
                      <i className="flaticon-agenda"></i> {course.lessonCount}{" "}
                      Chapters
                    </li>
                  </ul>
                  <div className="mt-20" suppressHydrationWarning>
                    Course Duration :{" "}
                    {moment.utc(course.totalDuration * 1000).format("HH:mm:ss")}
                  </div>
                  <div className="mt-20" suppressHydrationWarning>
                    <ProgressBar
                      now={course.completionPercentage}
                      label={`${Math.round(course.completionPercentage)}%`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-lg-12 col-md-12">
            <div className="text-center fs-5 border p-3">Empty</div>
          </div>
        )}
      </div>
    </>
  );
}

export default EnrolmentList;
