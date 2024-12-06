"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

const AdminSideNav = ({ userType }) => {
  // Sidebar Nav
  const [isActiveSidebarNav, setActiveSidebarNav] = useState("false");
  const handleToggleSidebarNav = () => {
    setActiveSidebarNav(!isActiveSidebarNav);
  };

  const isAdmin = userType === "Admin";
  const isEmployee = userType === "Employee";

  useEffect(() => {
    if (!(isAdmin || isEmployee)) {
      redirect("/");
    }
  }, [isAdmin, isEmployee]);

  return (
    <>
      <div className="text-end d-md-none">
        <div className="sidebar-menu-button" onClick={handleToggleSidebarNav}>
          Sidebar Menu
        </div>
      </div>

      <div className={`side-nav-wrapper ${isActiveSidebarNav ? "" : "active"}`}>
        <div className="sticky-box">
          <div className="close d-md-none" onClick={handleToggleSidebarNav}>
            <i className="bx bx-x"></i>
          </div>

          <div className="side-nav">
            <ul>
              <li>
                <Link href="/admin">Dashboard</Link>
              </li>
              <li>
                <Link href="/instructor/courses">Manage Courses</Link>
              </li>
              <li>
                <Link href="/admin/manage-catagory">Manage Categories</Link>
              </li>
              <li>
                <Link href="/admin/manage-subscription">
                  Manage Subscriptions
                </Link>
              </li>

              {isAdmin && (
                <li>
                  <Link href="/admin/manage-employees">Manage Employees</Link>
                </li>
              )}

              <li>
                <Link href="/admin/manage-users">Manage Users</Link>
              </li>

              {/* <li>
                <Link href="/admin/transactions">Payment History</Link>
              </li> */}
              <li>
                <Link href="/admin/update-profile">Update Profile</Link>
              </li>
              <li>
                <Link href="/admin/change-password">Change Password</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSideNav;
