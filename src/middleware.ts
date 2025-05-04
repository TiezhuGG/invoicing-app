import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 保护路由
// const isProtectedRoute = createRouteMatcher([
//   "/dashboard",
//   "/invoices(.*)",
// ]);

// 公开路由
const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up"]);

export default clerkMiddleware(async (auth, req) => {
  //   if (isProtectedRoute(req)) await auth.protect();
  if (!isPublicRoute(req)) {
    await auth.protect({
      unauthenticatedUrl: new URL("/sign-in", req.url).toString() // 替换原来的 redirectUrl
    });
  }

  // 重定向到主页
  //   return NextResponse.redirect(new URL("/sign-in", req.url));
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
