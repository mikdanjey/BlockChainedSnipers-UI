import httpServer from "@/utils/http-server-common";
import { getCurrentUser } from "./getCurrentUser";
import { redirect } from "next/navigation";

export async function adminDashboard() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }
  try {
    const response = await httpServer.get("/v1/dashboard");
    return response.data;
  } catch (error) {
    // console.error("Error fetching subscriptions:", error);
    return {
      countUser: 0,
      countEmployee: 0,
      countCategory: 0,
      countCourse: 0,
      countLesson: 0,
      countSubscription: 0,
      subscriptions: [],
    };
  }
}
