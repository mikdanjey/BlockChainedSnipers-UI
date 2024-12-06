import httpServer from "@/utils/http-server-common";
import { getCurrentUser } from "./getCurrentUser";
import { redirect } from "next/navigation";

export async function getCourseById(params) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }
  const { courseId } = params;

  try {
    const course = [
      {
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
    ];
    const videos = [
      {
        id: 2,
        courseId: 2,
        type: "video",
        title: "Introduction to Finance",
        file_url: null,
        video_url:
          "https://res.cloudinary.com/dev-empty/video/upload/v1707204363/ljg3ntdjjguqxiku2xpe.mp4",
        video_length: null,
        is_preview: false,
        created_at: "2024-02-06T07:26:11.414Z",
        updated_at: "2024-02-06T07:26:11.414Z",
      },
    ];
    const assets = [
      {
        id: 39,
        courseId: 9,
        type: "file",
        title: "dfgdgdfg",
        file_url:
          "https://res.cloudinary.com/dev-empty/video/upload/v1709406219/jrtymnpwqlcohe82kpsy.mp4",
        video_url: null,
        video_length: null,
        is_preview: false,
        created_at: "2024-03-02T19:03:44.682Z",
        updated_at: "2024-03-02T19:03:44.682Z",
      },
    ];

    return { course, videos, assets };
  } catch (error) {
    // console.error("Error fetching counts:", error);
  }
}

export async function getCourseByIdNew(params) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }
  const { courseId } = params;
  try {
    const { data } = await httpServer.get("/v1/courses/" + courseId);
    return { course: data };
  } catch (error) {
    // console.error("Error fetching counts:", error);
    return { course: {} };
  }
}

export async function getChaptersByCourseId(params) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }
  const { courseId } = params;
  try {
    const { data } = await httpServer.get(`/v1/courses/${courseId}/chapters`);
    return { chapters: data };
  } catch (error) {
    // console.error("Error fetching counts:", error);
    return { chapters: [] };
  }
}

export async function getLessonsByCourseId(params) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }
  const { courseId, chapterId } = params;
  try {
    const { data } = await httpServer.get(
      `/v1/courses/${courseId}/chapters/${chapterId}/lessons`,
    );
    return { lessons: data };
  } catch (error) {
    // console.error("Error fetching counts:", error);
    return { lessons: [] };
  }
}
