import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const authenticated = !!token;

  if (!authenticated && req.nextUrl.pathname.startsWith("/account")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (authenticated && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/account", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*", "/login/:path*"],
};
