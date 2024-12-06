import httpServer from "@/utils/http-server-common";
import { getCurrentUser } from "./getCurrentUser";
import { redirect } from "next/navigation";

export async function allUsers() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const response = await httpServer.get("/v1/users");
    return { users: response.data };
  } catch (error) {
    // console.error("Error fetching users:", error);
    return { users: [] };
  }
}

export async function allEmployees() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const response = await httpServer.get("/v1/admins");
    return { employees: response.data };
  } catch (error) {
    // console.error("Error fetching employees:", error);
    return { employees: [] };
  }
}
