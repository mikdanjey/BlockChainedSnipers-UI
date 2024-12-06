import React from "react";
import {
  getCourseByIdNew,
  getChaptersByCourseId,
} from "@/actions/getCourseById";
import Header from "../../Header";
import CourseVideos from "@/components/Instructor/CourseVideos";
import { CourseManageChapter } from "@/components/Instructor/CourseManageChapter";
// import { SingleLineTextPage } from "@/components/Instructor/SingleLineTextPage";
import DeleteButton from "./DeleteButton";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Page = async ({ params }) => {
  const { courseId } = params;
  const { course } = await getCourseByIdNew(params);
  const { chapters } = await getChaptersByCourseId(params);
  const currentUser = await getCurrentUser();
  const userType = currentUser?.userType || "";

  return (
    <div className="main-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <AdminSideNav userType={userType} />
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="main-content-box">
              <h2 className="fw-bold mb-4">Course: {course.name}</h2>
              <Header />
              <div className="basic-profile-information-form">
                <CourseManageChapter
                  chapters={chapters}
                  course={course}
                  courseId={courseId}
                  params={params}
                />
                {/* <div className="row">
            {videos.map((vdo) => (
              <div className="col-md-3" key={vdo.id}>
                <div className="card">
                  <video width="100%" controls>
                    <source src={vdo.video_url} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>

                  <div className="card-body">
                    <h6 className="card-title">{vdo.title}</h6>
                    <DeleteButton videoId={vdo.id} />
                  </div>
                </div>
              </div>
            ))}
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
