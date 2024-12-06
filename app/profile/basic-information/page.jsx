import React from "react";
import Link from "next/link";
import UpdateProfileForm from "@/components/Instructor/UpdateProfileForm";
import {
  getCurrentUser,
  getCurrentUserDetails,
} from "@/actions/getCurrentUser";

const Page = async () => {
  const currentUser = await getCurrentUser();
  const currentUserDetails = await getCurrentUserDetails();
  const userType = currentUser?.userType || "";

  return (
    <div className="ptb-70">
      <div className="container">
        <h2 className="fw-bold mb-4">Profile &amp; Settings</h2>

        <ul className="nav-style1">
          <li>
            <Link href="/profile/basic-information">Profile</Link>
          </li>
          <li>
            <Link href="/profile/password">Change Password</Link>
          </li>
        </ul>

        <div className="basic-profile-information-form">
          <UpdateProfileForm
            userType={userType}
            currentUser={currentUserDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
