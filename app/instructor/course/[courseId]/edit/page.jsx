import React from "react";
import CourseCreateForm from "@/components/Instructor/CourseCreateForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getCategories } from "@/actions/getCategories";
import { allSubscriptions } from "@/actions/allSubscriptions";
import { getCourseByIdNew } from "@/actions/getCourseById";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import Header from "../../Header";

const Page = async ({ params }) => {
  const currentUser = await getCurrentUser();
  const { categories } = await getCategories();
  const userType = currentUser?.userType || "";
  const { subscriptions } = await allSubscriptions();
  const { course } = await getCourseByIdNew(params);
  return (
    <div className="main-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <AdminSideNav userType={userType} />
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="main-content-box">
              <h2 className="fw-bold mb-4">Edit: {course.name}</h2>
              <Header />
              <div className="basic-profile-information-form">
                <CourseCreateForm
                  course={course}
                  currentUser={currentUser}
                  categories={categories}
                  subscriptionList={subscriptions}
                  action={"EDIT"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
