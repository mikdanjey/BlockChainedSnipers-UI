import React from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { ManageCategories } from "@/components/Admin/ManageCategories";
import { approvedCourses } from "@/actions/approvedCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getCurrentToken } from "@/actions/getCurrentToken";
import { getCategories } from "@/actions/getCategories";

const Page = async () => {
  const { courses } = await approvedCourses();
  const { categories } = await getCategories();
  const currentUser = await getCurrentUser();
  const accessToken = await getCurrentToken();
  const userType = currentUser?.userType || "";

  // console.log(accessToken)
  // console.log(currentUser)
  return (
    <div className="main-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <AdminSideNav userType={userType} />
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="main-content-box">
              <div className="row">
                <div className="col-md-3">
                  <h3>Manage Category</h3>
                </div>
                <div className="col-md-5">
                  <ManageCategories action={"ADD"} />
                </div>
              </div>

              <div className="table-responsive">
                <table className="table align-middle table-hover fs-14">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <tr key={category._id}>
                          <td className="data-col">{category.name}</td>
                          <td>
                            <ManageCategories
                              action={"EDIT"}
                              details={category}
                            />
                            <ManageCategories
                              action={"DELETE"}
                              details={category}
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">
                          <div className="text-center">Empty</div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
