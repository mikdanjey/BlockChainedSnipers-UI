import React from "react";
import CourseCreateForm from "@/components/Instructor/CourseCreateForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { getCategories } from "@/actions/getCategories";
import { allSubscriptions } from "@/actions/allSubscriptions";
import Header from "../Header";

const Page = async () => {
  const currentUser = await getCurrentUser();
  const userType = currentUser?.userType || "";
  const { categories } = await getCategories();
  const { subscriptions } = await allSubscriptions();
  return (
    <div className="main-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <AdminSideNav userType={userType} />
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="main-content-box">
              <h2 className="fw-bold mb-4">Create Course</h2>
              <Header />
              <div className="basic-profile-information-form">
                <CourseCreateForm
                  currentUser={currentUser}
                  categories={categories}
                  subscriptionList={subscriptions}
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
