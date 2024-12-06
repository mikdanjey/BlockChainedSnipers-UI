import { getCurrentUser } from "@/actions/getCurrentUser";
import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm";
import RegisterForm from "@/components/Auth/RegisterForm";
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
        pageTitle="Forgot Password"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Forgot Password"
      />

      <div className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <ForgotPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
