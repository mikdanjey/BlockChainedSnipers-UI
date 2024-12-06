import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getCurrentSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentToken() {
  try {
    const session = await getCurrentSession();

    if (!session?.user) {
      return null;
    }

    const accessToken = session.accessToken;

    if (!accessToken) {
      return null;
    }

    return accessToken;
  } catch (error) {
    return null;
  }
}
