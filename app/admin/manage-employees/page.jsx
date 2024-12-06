import React from "react";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { ManageEmployee } from "@/components/Admin/ManageEmployees";
import { allEmployees } from "@/actions/allUsers";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Page = async () => {
  const { employees } = await allEmployees();
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
              <div className="row">
                <div className="col-md-7">
                  <h3>Manage Employees</h3>
                </div>
                <div className="col-md-3">
                  <ManageEmployee action={"ADD"} />
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
                    {employees.length > 0 ? (
                      employees.map((user) => (
                        <tr key={user.id}>
                          <td className="data-col">
                            {user.firstName} {user.lastName}
                          </td>
                          <td>
                            <div
                              className="css-bbq5bh"
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              <ManageEmployee action={"EDIT"} details={user} />
                              <ManageEmployee
                                action={"DELETE"}
                                details={user}
                              />
                            </div>
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
