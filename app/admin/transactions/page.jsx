import React from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { approvedTransactions } from "@/actions/approvedTransactions";
import Header from "./Header";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Page = async () => {
  const { transactions } = await approvedTransactions();
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
              <Header />

              <div className="table-responsive">
                <table className="table align-middle table-hover fs-14">
                  <thead>
                    <tr>
                      <th scope="col">Transaction Date</th>
                      <th scope="col">User</th>
                      <th scope="col">Price</th>
                      <th scope="col">Subscription Category</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {transactions.length > 0 ? (
                      transactions.map((course) => (
                        <tr key={course.id}>
                          <td>
                            {/* 
                            <Link href={`/course/${course.slug}/${course.id}`}>
                              {course.created_at}
                            </Link>
                            */}
                            {course.created_at}
                          </td>
                          <td>{course.user?.name}</td>
                          <td>${course.regular_price}</td>
                          <td>{course.category}</td>
                          <td>
                            <div
                              className="css-bbq5bh"
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              <button
                                type="button"
                                className="btn btn-success btn-sm fs-12 ms-2"
                                disabled=""
                              >
                                {course.status}
                              </button>
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
