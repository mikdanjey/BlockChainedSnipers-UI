import httpServer from "@/utils/http-server-common";
import { getCurrentUser } from "./getCurrentUser";
import { redirect } from "next/navigation";

export async function getCategories() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }
  try {
    const response = await httpServer.get("/v1/categories");
    return { categories: response.data };
  } catch (error) {
    // console.error("Error fetching", error);
    return { categories: [] };
  }
}
