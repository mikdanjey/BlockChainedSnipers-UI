import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const { NEXTAUTH_URL, NEXTAUTH_SECRET } = process.env;
// List of routes requiring authentication
const PROTECTED_PATHS = ["/admin", "/profile", "/instructor", "/learning"];

// Middleware function
export async function middleware(request) {
  const { pathname } = request.nextUrl;
  // Check if the route is protected
  const isProtectedRoute = PROTECTED_PATHS.some((path) =>
    pathname.startsWith(path),
  );

  // If not protected, continue to the requested route
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // Retrieve token (e.g., from cookies or headers)
  const token = await getToken({ req: request, secret: NEXTAUTH_SECRET });
  // If there's no token, redirect to login
  if (!token) {
    const url = new URL("/login", request.url);
    return NextResponse.redirect(url);
  }

  // Verify token validity
  try {
    // const decoded = jwt.verify(token.accessToken, NEXTAUTH_SECRET);
    // console.log("token valid", decoded)
    return NextResponse.next();
  } catch (err) {
    // Token is invalid or expired; redirect to login
    // const url = new URL('/login', request.url);
    // return NextResponse.redirect(url);
    // return NextResponse.redirect('http://localhost:3000/api/auth/signout?callbackUrl=/login');
    return new Response(null, {
      status: 302,
      headers: {
        "Set-Cookie": `next-auth.session-token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
        Location: `${NEXTAUTH_URL}/login`,
      },
    });
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // "/((?!api|_next/static|_next/image|images|login|follow-us|deals|favicon.ico|.*\\.png$).*)",
    "/admin/:path*",
    "/profile/:path*", // Match any subpath under /profile
    "/instructor/:path*",
    "/learning/:path*",
  ],
};
