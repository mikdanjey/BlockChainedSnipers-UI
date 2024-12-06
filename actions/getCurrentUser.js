import httpServer from "@/utils/http-server-common";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getCurrentSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getCurrentSession();
    // console.log(session.accessToken)

    if (!session?.user) {
      return null;
    }

    const currentUser = { ...session.user };

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    return null;
  }
}

export async function getCurrentAdminDetails() {
  try {
    const response = await httpServer.get("/v1/admin-profile");
    return response.data;
  } catch (error) {
    return {};
  }
}

export async function getCurrentUserDetails() {
  try {
    const response = await httpServer.get("/v1/user-profile");
    return response.data;
  } catch (error) {
    return {};
  }
}
