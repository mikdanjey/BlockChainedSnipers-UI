import httpServer from "@/utils/http-server-common";
import { getCurrentUser } from "./getCurrentUser";
import { redirect } from "next/navigation";

export async function allSubscriptions() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const response = await httpServer.get("/v1/subscriptions");
    return { subscriptions: response.data };
  } catch (error) {
    // console.error("Error fetching subscriptions:", error);
    return { subscriptions: [] };
  }
}
