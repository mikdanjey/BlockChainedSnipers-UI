import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PasswordChangePage } from "@/components/Instructor/PasswordChangePage";

const Page = () => {
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
          <PasswordChangePage />

          {/* <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label fw-semibold">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    className="form-control file-control"
                    name="profilePhoto"
                    accept="image/*"
                    required=""
                  />
                  <div className="form-text mt-2">
                    Upload image size 200x200 pixels!
                  </div>
                  <div className="mt-3">
                    <Image
                      src="/images/avatar.jpg"
                      alt="image"
                      className="img-thumbnail mw-200px"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <button className="btn default-btn" type="submit">
                  <i className="flaticon-right-arrow"></i>Save <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
