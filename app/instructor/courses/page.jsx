import React from "react";
import InstructorHeader from "@/components/Instructor/InstructorHeader";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { myCourses } from "@/actions/myCourses";
import { getCategories } from "@/actions/getCategories";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Page = async () => {
  const { courses } = await myCourses();
  const currentUser = await getCurrentUser();
  const { categories } = await getCategories();
  const { userType } = currentUser;

  return (
    <>
      <div className="main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <AdminSideNav userType={userType} />
            </div>
            <div className="col-lg-9 col-md-8">
              <InstructorHeader
                categoriesList={categories}
                courses={courses}
                userType={userType}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
