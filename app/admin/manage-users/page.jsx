import React from "react";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import moment from "moment";
import { ManageUser } from "@/components/Admin/ManageUsers";
import { UsersList } from "@/components/Admin/UsersList";
import { ManageUserSubscription } from "@/components/Admin/ManageUserSubscription";
import { allUsers } from "@/actions/allUsers";
import { allSubscriptions } from "@/actions/allSubscriptions";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Page = async () => {
  const { users } = await allUsers();
  const { subscriptions } = await allSubscriptions();
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
              <div className="row mb-20">
                <div className="col-md-9">
                  <h3>Manage Users</h3>
                </div>
                <div className="col-md">
                  <ManageUser action={"ADD"} />
                </div>
              </div>
              <UsersList users={users} subscriptions={subscriptions} />
              {/* 
              <div className="table-responsive">
                <table className="table align-middle table-hover fs-14">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Subscription Name</th>
                      <th scope="col">Subscription End Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length > 0 ? (
                      users.map((user) => (
                        <tr key={user.id}>
                          <td className="data-col">
                            {user.firstName} {user.lastName}
                          </td>
                          <td className="data-col-3">
                            {user?.subscription?.name}
                          </td>
                          <td className="data-col-3">
                            {(user?.subscriptionEndDate && user?.subscription?.name === "Basic") ?  "N/A" : moment(user?.subscriptionEndDate).format("MM/DD/YYYY")}
                          </td>
                          <td>
                            <div
                              className="css-bbq5bh"
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              <ManageUserSubscription details={user} subscriptionList={subscriptions} />
                              <ManageUser action={"EDIT"} details={user} />
                              <ManageUser action={"DELETE"} details={user} />
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
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
