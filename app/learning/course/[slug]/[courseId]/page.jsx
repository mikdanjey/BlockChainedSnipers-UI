import React from "react";

import { myLearningPlay } from "@/actions/myLearning";
import { getCurrentUser } from "@/actions/getCurrentUser";
import MainContent from "./MainContent";

const Page = async ({ params }) => {
  const currentUser = await getCurrentUser();
  const { userType, subscription } = currentUser;
  const { course } = await myLearningPlay(params);
  return (
    <div className="mt-5 pb-5 video-area">
      <div className="container-fluid">
        <MainContent course={course} currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Page;
