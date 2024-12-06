"use client";

import React from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const params = useParams();
  return (
    <ul className="nav-style1">
      {params && params.courseId && (
        <>
          <li>
            <Link
              href={`/instructor/course/${params.courseId}/edit`}
              className={
                pathname == `/instructor/course/${params.courseId}/edit`
                  ? "active"
                  : null
              }
            >
              Update Course
            </Link>
          </li>
          <li>
            <Link
              href={`/instructor/course/${params.courseId}/chapters`}
              className={
                pathname == `/instructor/course/${params.courseId}/chapters`
                  ? "active"
                  : null
              }
            >
              Manage Modules
            </Link>
          </li>
          <li>
            <Link
              href={`/instructor/course/${params.courseId}/lessons`}
              className={
                pathname == `/instructor/course/${params.courseId}/lessons`
                  ? "active"
                  : null
              }
            >
              Manage Chapters
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Header;
