"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";

const UserMenu = ({ currentUser }) => {
  const isAdmin = currentUser && currentUser?.userType === "Admin";
  const isEmployee = currentUser && currentUser?.userType === "Employee";
  const isStudent = currentUser && currentUser?.userType === "Student";

  const { setTheme, resolvedTheme } = useTheme();
  const [loginUser, setLoginUser] = useState({});

  useEffect(() => {
    try {
      const rawLoginUser = localStorage.getItem("loginUser");
      const loginUser = JSON.parse(rawLoginUser || {});
      setLoginUser(loginUser);
    } catch (error) {

    }
  }, [currentUser]);
  return (
    <>
      {!currentUser && (
        <div className="option-item">
          <Link href="/login" className="default-btn">
            <i className="flaticon-user"></i> Login/Register <span></span>
          </Link>
        </div>
      )}
      {currentUser && (
        <div className="option-item">
          <div className="dropdown profile-dropdown">
            <div className={isStudent ? "img" : "adminImg"}>
              <Image
                src={currentUser.profileImage || "/images/avatar.png"}
                alt="Menu"
                width={35}
                height={35}
              />
            </div>

            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item author-dropdown-item"
                  href={
                    isAdmin
                      ? "/admin/update-profile"
                      : "/profile/basic-information/"
                  }
                >
                  <div className="d-flex align-items-center">
                    <div className="img">
                      <Image
                        src={currentUser.profileImage || "/images/avatar.png"}
                        alt="Profile"
                        width={35}
                        height={35}
                      />
                    </div>

                    <span className="ps-3">
                      <span className="fw-semibold fs-16 mb-1 d-block">
                        {loginUser.firstName} {loginUser.lastName}
                      </span>
                      <span className="fs-13 mt-minus-2 d-none d-lg-block">
                        {loginUser.email}
                      </span>
                    </span>
                  </div>
                </Link>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              {(isAdmin || isEmployee) && (
                <li>
                  <Link className="dropdown-item" href="/admin/">
                    <i className="bx bxs-dashboard"></i> Dashboard
                  </Link>
                </li>
              )}

              {(isAdmin || isEmployee) && (
                <li>
                  <Link className="dropdown-item" href="/instructor/courses">
                    <i className="bx bxs-dashboard"></i> Manage Courses
                  </Link>
                </li>
              )}

              {isStudent && (
                <li>
                  <Link className="dropdown-item" href="/learning/dashboard/">
                    <i className="bx bx-book"></i>Dashboard
                  </Link>
                </li>
              )}

              {isStudent && (
                <li>
                  <Link className="dropdown-item" href="/learning/my-courses/">
                    <i className="bx bx-book"></i>All Courses
                  </Link>
                </li>
              )}

              {/* isStudent && (
                <li>
                  <Link
                    className="dropdown-item"
                    href="/learning/my-purchase-history/"
                  >
                    <i className="bx bx-credit-card-front"></i>
                    My Purchases
                  </Link>
                </li>
              ) */}

              {/* isStudent && (
                <li>
                  <Link className="dropdown-item" href="/learning/wishlist/">
                    <i className="bx bxs-heart"></i>Wishlist
                  </Link>
                </li>
              ) */}

              <li>
                <Link
                  className="dropdown-item"
                  href={
                    isAdmin
                      ? "/admin/update-profile"
                      : "/profile/basic-information/"
                  }
                >
                  <i className="bx bx-user-circle"></i> Update Profile
                </Link>
              </li>

              <li>
                <a
                  className="dropdown-item"
                  onClick={() =>
                    resolvedTheme === "dark"
                      ? setTheme("light")
                      : setTheme("dark")
                  }
                >
                  <i className="bx bx-credit-card-front"></i>{" "}
                  Switch to {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
                </a>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <button
                  type="submit"
                  className="dropdown-item"
                  onClick={() => signOut()}
                >
                  <i className="bx bx-log-out"></i> Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMenu;
