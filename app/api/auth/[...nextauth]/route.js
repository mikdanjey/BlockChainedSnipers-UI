import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 5 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const { email, password, userType } = credentials;
          if (!email || !password || !userType) {
            throw new Error("Invalid credentials");
          }
          const apiUrl = process.env.NEXT_PUBLIC_API_URL;
          const data = {
            email,
            password,
          };
          const Auth_URL =
            userType === "Admin" || userType === "Employee"
              ? `${apiUrl}/v1/admin-login`
              : `${apiUrl}/v1/user-login`;
          try {
            const response = await axios.post(Auth_URL, data);
            if (response.status === 200 && response.data) {
              cookies().set("accessToken", response.data.accessToken, {
                httpOnly: true,
              });
              return { ...response.data };
            }
          } catch (error) {
            console.log(error.message);
            return null;
          }
        } catch (error) {
          console.log("Authentication error:", error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          userType: user.userType,
          accessToken: user.accessToken,
          profileImage: user.profileImage,
          subscription: user.subscription,
          subscriptionEndDate: user.subscriptionEndDate,
        };
      }
      return token;
    },
    // async redirect({ url, baseUrl }) {
    //   return "/learning/my-courses"
    // },
    async session({ session, token, user }) {
      // Populate the session object with user details and accessToken
      session.user = {
        ...session.user,
        userId: token.userId,
        firstName: token.firstName,
        lastName: token.lastName,
        userType: token.userType,
        profileImage: token.profileImage,
        subscription: token.subscription,
        subscriptionEndDate: token.subscriptionEndDate,
      };
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
};
const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
