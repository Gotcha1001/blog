// import { httpRouter } from "convex/server";
// import { authComponent, createAuth } from "./auth";

// const http = httpRouter();

// authComponent.registerRoutes(http, createAuth);

// export default http;

import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { authComponent, createAuth } from "./auth";

const http = httpRouter();

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

http.route({
  pathPrefix: "/api/auth/",
  method: "OPTIONS",
  handler: httpAction(async () => {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": siteUrl,
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Cookie",
        "Access-Control-Allow-Credentials": "true",
      },
    });
  }),
});

authComponent.registerRoutes(http, createAuth, {
  cors: {
    allowedOrigins: [siteUrl],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    exposedHeaders: ["Set-Cookie"],
  },
});

export default http;
