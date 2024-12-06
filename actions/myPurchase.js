import { getCurrentUser } from "./getCurrentUser";
import { redirect } from "next/navigation";

export async function myPurchase() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const enrolments = [
      {
        id: 28,
        userId: 1,
        courseId: 2,
        order_number: "ORD-1785",
        price: 149,
        paymentId: "pi_3OhRE7GkYVWSHYLW0PhFkBIf",
        payment_status: "PAID",
        status: "PAID",
        payment_via: "Stripe",
        created_at: "2024-02-08T06:36:51.846Z",
        updated_at: "2024-02-08T06:36:53.641Z",
        course: {
          id: 2,
          userId: 1,
          category: "App Development",
          title: "The Complete Flutter Development Course",
          slug: "dart-flutter-the-complete-flutter-development-course",
          description:
            "<p>Welcome to&nbsp;<strong>The Complete Flutter 2.0 Development Course</strong>. The most&nbsp;<strong>up-to-date</strong>&nbsp;Flutter course available online. Covering all the fundamental concepts for Flutter development, using the latest Flutter 2.0 version.</p><p>I’ve built this course over months, perfecting the curriculum to ensure that you come out of this course as a fully-fledged&nbsp;<strong>Flutter developer. I’ll take you from scratch</strong>&nbsp;and make you into a&nbsp;<strong>skilled Flutter developer</strong>&nbsp;with a&nbsp;<strong>strong portfolio</strong>&nbsp;of beautiful Flutter apps.</p><p>This course will teach Flutter &amp; Dart from scratch,&nbsp;<strong>NO prior knowledge</strong>&nbsp;of either of the two is required! And you certainly don't need any Android or iOS development experience since the whole idea behind Flutter is to only learn one language.</p>",
          regular_price: 149,
          before_price: 199,
          lessons: "20",
          duration: "3h 25m total length",
          image:
            "https://res.cloudinary.com/dev-empty/image/upload/v1707204269/pmyhthvg0xixlirzpmbk.jpg",
          access_time: "Lifetime",
          requirements:
            "<ul><li>A Passion To Learn</li><li>A Computer That Has Admin Privileges</li><li>10GB Of Free Space On Hard Drive.</li><li>Mac Computer RequiredAlthough you can build iOS apps on a Windows computer with Flutter, if you want to test it, you will need a Mac.</li></ul>",
          what_you_will_learn:
            "<ul><li>Become A Fully-Fledged Flutter Developer</li><li>Build Engaging Native Mobile Apps For Both Android and iOS Using Single Codebase</li><li>Build A Portfolio Of Beautiful Flutter Apps</li></ul>",
          who_is_this_course_for:
            "<ul><li>Developers Looking To Build Quality Apps With Flutter</li></ul>",
          status: "Approved",
          in_home_page: false,
          in_home_page_set_at: "2024-02-06T07:25:23.890Z",
          created_at: "2024-02-06T07:25:23.890Z",
          updated_at: "2024-02-12T05:51:34.331Z",
          user: {
            id: 1,
            name: "John Doe",
            designation: null,
            email: "instructor@edemy.com",
            emailVerified: null,
            image: null,
            hashedPassword:
              "$2a$12$aEkqHjxHcUJIkSonDHK0B.xdFzCRPkDujmMnt8oM/15hF7tqZpZgG",
            role: "ADMIN",
            is_instructor: false,
            created_at: "2024-02-06T07:17:13.567Z",
            updated_at: "2024-02-06T07:17:13.567Z",
          },
        },
      },
      {
        id: 29,
        userId: 1,
        courseId: 1,
        order_number: "ORD-6673",
        price: 99,
        paymentId: "pi_3OhRE7GkYVWSHYLW0PhFkBIf",
        payment_status: "PAID",
        status: "PAID",
        payment_via: "Stripe",
        created_at: "2024-02-08T06:36:51.850Z",
        updated_at: "2024-02-08T06:36:53.644Z",
        course: {
          id: 1,
          userId: 1,
          category: "Web Development",
          title: "Complete JavaScript Course 2024",
          slug: "complete-javascript-course-2024",
          description:
            "<p><em>Well-made course. Super in-depth, with great challenges and projects that will solidify your Javascript understanding. I found the lectures were paced perfectly -- Jonas doesn't skip over anything that might be useful to a JS developer\"</em>&nbsp;— Carson Bartholomew</p><p>JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides millions of high-paying jobs all over the world.</p><p>That's why you want to learn JavaScript too. And you came to the right place!</p>",
          regular_price: 99,
          before_price: 149,
          lessons: "21",
          duration: "68h 34m total length",
          image:
            "https://res.cloudinary.com/dev-empty/image/upload/v1707203985/mwg8hiewqc1cfl7k3dvt.jpg",
          access_time: "Lifetime",
          requirements:
            "<ul><li>No coding experience is necessary to take this course! I take you from beginner to expert!</li><li>Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.</li><li>A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.</li></ul>",
          what_you_will_learn:
            "<ul><li>Become an advanced, confident, and modern JavaScript developer from scratch</li><li>Build 6 beautiful real-world projects for your portfolio (not boring toy apps)</li><li>Become job-ready by understanding how JavaScript really works behind the scenes</li><li>How to think and work like a developer: problem-solving, researching, workflows</li></ul><p><br></p>",
          who_is_this_course_for:
            "<ul><li>Take this course if you want to gain a true and deep understanding of JavaScript</li><li>Take this course if you have been trying to learn JavaScript but: 1) still don't really understand JavaScript, or 2) still don't feel confident to code real apps</li><li>Take this course if you're interested in using a library/framework like React, Angular, Vue or Node in the future</li></ul>",
          status: "Approved",
          in_home_page: false,
          in_home_page_set_at: "2024-02-06T07:21:35.780Z",
          created_at: "2024-02-06T07:21:35.780Z",
          updated_at: "2024-02-06T07:26:49.757Z",
          user: {
            id: 1,
            name: "John Doe",
            designation: null,
            email: "instructor@edemy.com",
            emailVerified: null,
            image: null,
            hashedPassword:
              "$2a$12$aEkqHjxHcUJIkSonDHK0B.xdFzCRPkDujmMnt8oM/15hF7tqZpZgG",
            role: "ADMIN",
            is_instructor: false,
            created_at: "2024-02-06T07:17:13.567Z",
            updated_at: "2024-02-06T07:17:13.567Z",
          },
        },
      },
    ];

    return { enrolments };
  } catch (error) {
    // console.error("Error fetching counts:", error);
  }
}
