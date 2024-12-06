import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function GET(request, { params }) {
  const { videoId } = params;

  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json(
      {
        message: "Unauthorized user.",
      },
      { status: 401 },
    );
  }

  const video = {
    id: videoId,
    courseId: 2,
    type: "video",
    title: "Intro",
    file_url: null,
    video_url:
      "https://res.cloudinary.com/dev-empty/video/upload/v1707204363/ljg3ntdjjguqxiku2xpe.mp4",
    video_length: null,
    is_preview: false,
    created_at: "2024-02-06T07:26:11.414Z",
    updated_at: "2024-02-06T07:26:11.414Z",
  };

  return NextResponse.json(video);
}
