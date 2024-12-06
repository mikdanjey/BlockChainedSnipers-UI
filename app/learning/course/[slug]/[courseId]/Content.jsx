"use client";

import React, { useState } from "react";
import CourseOverview from "@/components/Learning/CourseOverview";

const Content = ({ overview }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <ul className="nav-style1 learning-course-nav">
        <li
          onClick={() => handleTabClick(0)}
          className={` ${activeTab === 0 ? "active" : ""}`}
        >
          Overview
        </li>
      </ul>

      <div>{activeTab === 0 && <CourseOverview description={overview} />}</div>
    </>
  );
};

export default Content;
