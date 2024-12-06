import { getCurrentUser } from "./getCurrentUser";
import { redirect } from "next/navigation";

export async function pendingCourses() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const courses = [];

    return { courses };
  } catch (error) {
    // console.error("Error fetching counts:", error);
  }
}
