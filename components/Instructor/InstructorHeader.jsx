"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const InstructorHeader = ({ categoriesList = [], courses = [], userType }) => {
  const [category, setCategory] = useState(null);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const filteredCourses = courses.filter((course) => {
    if (category) {
      return course.category === category;
    } else {
      return true;
    }
  });

  return (
    <>
      <div className="row align-items-center mtb-20">
        <div className="col-lg-9">
          <Link className="default-btn mt-10" href="/instructor/course/create/">
            <i className="flaticon-tutorials"></i> Create a new Course{" "}
            <span></span>
          </Link>
        </div>
        <div className="col-lg-3 text-end">
          <div className="select-box">
            <select
              value={category}
              className="form-select"
              onChange={(e) => handleChangeCategory(e)}
            >
              <option value="">All Courses</option>
              {categoriesList.map((item) => (
                <option key={item._id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="pb-100">
        <div className="container">
          <h3 className="mb-5 text-center">Courses</h3>
          <div className="row">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div key={course._id} className="col-lg-4 col-md-6">
                  <div className="single-courses-box">
                    <div className="courses-image">
                      <Link
                        className="d-block image"
                        href={`/instructor/course/${course._id}/edit`}
                      >
                        <Image
                          src={
                            course.thumbnailImage ||
                            "https://res.cloudinary.com/dev-empty/image/upload/v1707716814/ahooraqaikeoou3tqp7a.jpg"
                          }
                          alt={course.name}
                          style={{ width: "750px", height: "300px" }}
                          width={750}
                          height={350}
                        />
                      </Link>

                      <div className="dropdown action-dropdown">
                        <div className="icon">
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item"
                              href={`/instructor/course/${course._id}/edit`}
                            >
                              {" "}
                              <i className="bx bx-edit"></i> Edit Course
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href={`/instructor/course/${course._id}/chapters`}
                            >
                              <i className="bx bxs-file-plus"></i> Edit Modules
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href={`/instructor/course/${course._id}/lessons`}
                            >
                              <i className="bx bx-cloud-upload"></i> Edit
                              Chapters
                            </Link>
                          </li>
                          {/* <li>
              <div
                className="css-bbq5bh"
                style={{
                  fontSize: "12px",
                }}
              >
                <button
                  type="button"
                  className="dropdown-item"
                  disabled=""
                >
                  <i className="bx bxs-trash"></i>{" "}
                  Delete{" "}
                  <i
                    className="bx bx-info-circle"
                    style={{
                      left: "5px",
                      position:
                        "relative",
                      top: "2px",
                    }}
                  ></i>
                </button>
              </div>
            </li> */}
                        </ul>
                      </div>
                    </div>

                    <div className="courses-content">
                      <h3>
                        <Link href={`/instructor/course/${course._id}/edit`}>
                          {course.name}
                        </Link>
                      </h3>
                      <p>{course.category}</p>
                      <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                        <li>
                          <i className="flaticon-tutorials"></i>{" "}
                          {course.chapterCount} Modules
                        </li>
                        <li>
                          <i className="flaticon-agenda"></i>{" "}
                          {course.lessonCount} Chapters
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-12 col-md-12">
                <div className="text-center fs-5 border p-3">
                  No courses found in this category
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorHeader;
