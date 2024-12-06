import { getCurrentUser } from "./getCurrentUser";
import { redirect } from "next/navigation";

export async function getAdminStats() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const [students, instructors, courses, enrolments, videos, assets] = [];

    return { students, courses, instructors, enrolments, videos, assets };
  } catch (error) {
    // console.error("Error fetching counts:", error);
  }
}
