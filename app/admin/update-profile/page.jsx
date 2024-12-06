import React from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import UpdateProfileForm from "@/components/Instructor/UpdateProfileForm";
import { approvedCourses } from "@/actions/approvedCourses";
import {
  getCurrentUser,
  getCurrentAdminDetails,
} from "@/actions/getCurrentUser";

const Page = async () => {
  const { courses } = await approvedCourses();
  const currentUser = await getCurrentUser();
  const currentUserDetails = await getCurrentAdminDetails();
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
              <h2 className="fw-bold mb-4">Profile &amp; Settings</h2>

              {/* <ul className="nav-style1">
                  <li>
                    <Link href="/profile/basic-information/">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile/photo/">Profile Picture</Link>
                  </li>
                </ul> */}

              <div className="basic-profile-information-form">
                <UpdateProfileForm
                  userType={userType}
                  currentUser={currentUserDetails}
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
