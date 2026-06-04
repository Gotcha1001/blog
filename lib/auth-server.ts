// import { createAuth } from "@/convex/auth";
// import { getToken as getTokenNextjs } from "@convex-dev/better-auth/nextjs";

// export const getToken = () => {
//   return getTokenNextjs(createAuth);
// };

import { convexBetterAuthNextJs } from "@convex-dev/better-auth/nextjs";

const { getToken } = convexBetterAuthNextJs({
  convexUrl: process.env.NEXT_PUBLIC_CONVEX_URL!,
  convexSiteUrl: process.env.NEXT_PUBLIC_CONVEX_SITE_URL!,
});

export { getToken };
