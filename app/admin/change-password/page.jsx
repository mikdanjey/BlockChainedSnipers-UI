import React from "react";
import Link from "next/link";
import { PasswordChangePage } from "@/components/Instructor/PasswordChangePage";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { approvedCourses } from "@/actions/approvedCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Page = async () => {
  const { courses } = await approvedCourses();
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
              <h2 className="fw-bold mb-4">Change &amp; Password</h2>

              <div className="basic-profile-information-form">
                <PasswordChangePage userType={userType} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
