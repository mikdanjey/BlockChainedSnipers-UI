import AdminSideNav from "@/components/Admin/AdminSideNav";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { adminDashboard } from "@/actions/adminDashboard";
import Link from "next/link";

const Page = async () => {
  const {
    countUser,
    countEmployee,
    countCategory,
    countCourse,
    countLesson,
    countSubscription,
    subscriptions = [],
  } = await adminDashboard();

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
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                  <div className="info-box-card">
                    <i className="bx bx-group"></i>
                    <h1>
                      <Link href="/admin/manage-users">{countUser}</Link>
                    </h1>
                    <p>
                      <Link href="/admin/manage-users">
                        Total Registered Users
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="info-box-card">
                    <i className="bx bxs-file"></i>
                    <h1>
                      <Link href="/admin/manage-employees">
                        {countEmployee}
                      </Link>
                    </h1>
                    <p>
                      <Link href="/admin/manage-employees">
                        Total Employees
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="info-box-card">
                    <i className="bx bxs-file"></i>
                    <h1>
                      <Link href="/admin/manage-catagory">{countCategory}</Link>
                    </h1>
                    <p>
                      <Link href="/admin/manage-catagory">
                        Total Categories
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="info-box-card">
                    <i className="bx bx-group"></i>
                    <h1>
                      <Link href="/instructor/courses">{countCourse}</Link>
                    </h1>
                    <p>
                      <Link href="/instructor/courses">Total Courses</Link>
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="info-box-card">
                    <i className="bx bx-group"></i>
                    <h1>
                      <Link href="/instructor/courses">{countLesson}</Link>
                    </h1>
                    <p>
                      <Link href="/instructor/courses">Total Videos</Link>
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="info-box-card">
                    <i className="bx bx-group"></i>
                    <h1>
                      <Link href="/admin/manage-subscription">
                        {countSubscription}
                      </Link>
                    </h1>
                    <p>
                      <Link href="/admin/manage-subscription">
                        Total Subscriptions
                      </Link>
                    </p>
                  </div>
                </div>

                {subscriptions.map((item) => (
                  <div className="col-lg-4 col-sm-6">
                    <div className="info-box-card">
                      <i className="bx bx-group"></i>
                      <h1>
                        <Link href="/admin/manage-subscription">
                          {item?.countSubscriptionUser}
                        </Link>
                      </h1>
                      <p>
                        <Link href="/admin/manage-subscription">
                          {item?.subscriptionName} Subscribers
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
