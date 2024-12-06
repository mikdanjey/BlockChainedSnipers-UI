import httpServer from "@/utils/http-server-common";
import { getCurrentUser } from "./getCurrentUser";
import { redirect } from "next/navigation";

export async function myLearning() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

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

  try {
    const response = await httpServer.get("/v1/courses");
    return { enrolments: response.data };
  } catch (error) {
    // console.error("Error fetching subscriptions:", error);
    return { enrolments: [] };
  }
}

export async function myLearningPlay(params) {
  const { courseId } = params;
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const course = {
      id: courseId,
      userId: 1,
      category: "Marketing",
      title: "Complete Listing Optimization Training",
      slug: "complete-listing-optimization-training",
      description:
        "<p>Are you looking for a Google My Business (GMB) course that shows you how to rank Google My Business listings?</p><p>Great, you’re in the right place.</p><p>Maybe you own a local business and would like to optimize your GMB listing OR maybe you would like to learn the whole process so you can offer it as a service to local business owners.</p><p>Whichever one it is, you can be sure I’ve got you covered.</p><p>I don’t just talk the talk; I walk the walk and live it too.</p><p>In this course, you’ll be able to watch me in real-time as I optimize a LIVE Google My Business listing and get it ranked.</p><p>At the end of the course, you’ll find that this GMB listing is ranking for some BIG keywords.</p><p>The process I follow throughout the course is the SAME process I use when ranking my client GMBs, so you can be confident what you’re learning is indeed used in the real world and does work.</p>",
      regular_price: 19,
      before_price: 29,
      lessons: "10",
      duration: "3h 25m total length",
      image:
        "https://res.cloudinary.com/dev-empty/image/upload/v1707718314/nlvyu6eejci1nuri8olx.jpg",
      access_time: "Lifetime",
      requirements:
        "<ul><li>No previous SEO knowledge or experience is required</li><li>You should have a Google My Business listing you can optimise (or one you plan to optimise in the future)</li></ul>",
      what_you_will_learn:
        "<ul><li>Learn how to optimize your Google My Business listing</li><li>Find out what the top GMB ranking factors are</li><li>Find out what citations are and how to build them to correct way</li><li>How to generate more reviews for your business</li><li>How to deal with fake reviews on your GMB listing</li></ul>",
      who_is_this_course_for:
        "<ul><li>Anyone interested in learning more about Google My Business optimizations</li></ul>",
      status: "Approved",
      in_home_page: false,
      in_home_page_set_at: "2024-02-12T06:13:22.117Z",
      created_at: "2024-02-12T06:13:22.117Z",
      updated_at: "2024-02-12T06:16:11.405Z",
      assets: [
        {
          id: 21,
          courseId: 8,
          type: "video",
          title: "Start Here: Read Me Before You Start\r\n",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
        {
          id: 22,
          courseId: 8,
          type: "video",
          title: "What To Expect + Proof This Works",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
        {
          id: 23,
          courseId: 8,
          type: "video",
          title: "How To Check If You Already Have A GMB listing",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
        {
          id: 24,
          courseId: 8,
          type: "video",
          title: "How To Set Up A GMB Listing",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
        {
          id: 25,
          courseId: 8,
          type: "video",
          title: "How To Navigate Around The GMB Dashboard",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
        {
          id: 26,
          courseId: 8,
          type: "video",
          title: "What We're Going To Cover In This Section",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
        {
          id: 27,
          courseId: 8,
          type: "video",
          title: "GMB Ranking Factors",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
        {
          id: 28,
          courseId: 8,
          type: "video",
          title: "The 9 Elements To Optimize On A GMB Listing",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
        {
          id: 29,
          courseId: 8,
          type: "video",
          title: "How To Optimise Your GMB Listing",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
        {
          id: 30,
          courseId: 8,
          type: "video",
          title:
            "How To Find Out What GMB Categories Your Competitors Have Selected",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
        {
          id: 31,
          courseId: 8,
          type: "video",
          title: "How To Handle Multiple Locations For GMBs",
          file_url: null,
          video_url:
            "https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4",
          video_length: null,
          is_preview: false,
          created_at: "2024-02-12T05:55:29.652Z",
          updated_at: "2024-02-12T05:55:29.652Z",
        },
      ],
    };

    try {
      const response = await httpServer.get("/v1/user-courses/" + courseId);
      return { course: response.data };
    } catch (error) {
      // console.error("Error fetching subscriptions:", error);
      return { course: [] };
    }
  } catch (error) {
    console.error("Error fetching counts:", error);
  }
}
