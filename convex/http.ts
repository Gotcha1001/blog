// import { httpRouter } from "convex/server";
// import { authComponent, createAuth } from "./auth";

// const http = httpRouter();

// authComponent.registerRoutes(http, createAuth);

// export default http;

import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { authComponent, createAuth } from "./auth";

const http = httpRouter();

http.route({
  pathPrefix: "/api/auth/",
  method: "OPTIONS",
  handler: httpAction(async () => {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin":
          "https://blog-wes-projects-3b3f8366.vercel.app",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
      },
    });
  }),
});

authComponent.registerRoutes(http, createAuth, {
  cors: {
    allowedOrigins: ["https://blog-wes-projects-3b3f8366.vercel.app"],
  },
});

export default http;
