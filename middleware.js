import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const ADMIN_USER_IDS = ['user_2r6nKR4A6JG1vSRXXDXWzRaSV6S', 'user_2r6n5oSeNHtUf27FZHxhu9yCXxQ', 'user_2qL5YAi2C3byqT4QyZqK5t8CYr5']

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    "/",                    // Landing page       
    "/sign-in", 
    "/api/transliterate",        // Auth pages
    "/sign-up",
    "/api/stories",          // Allow public access to stories API
    "/api/stories/(.*)",     // Allow access to all story-related endpoints         // Allow access to story pages
  ],
  ignoredRoutes: ["/api/webhooks(.*)"],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
