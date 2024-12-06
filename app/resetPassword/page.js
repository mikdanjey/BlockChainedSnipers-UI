import { getCurrentUser } from "@/actions/getCurrentUser";
import { ResetPasswordForm } from "@/components/Auth/ResetPasswordForm";
import PageBanner from "@/components/Shared/PageBanner";
import { redirect } from "next/navigation";

const page = async () => {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    redirect("/");
  }
  return (
    <>
      <PageBanner
        pageTitle="Reset Password"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Reset Password"
      />

      <div className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="login-form">
                <h2>Reset Password</h2>
                <ResetPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
